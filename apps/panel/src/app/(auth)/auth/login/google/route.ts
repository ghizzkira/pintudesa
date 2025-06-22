import { cookies } from "next/headers"
import { globalGETRateLimit, googleOAuth } from "@pintudesa/auth"
import { generateCodeVerifier, generateState } from "arctic"

import { appEnv } from "@/lib/utils/env"

export async function GET(): Promise<Response> {
  const rateLimit = await globalGETRateLimit()

  if (!rateLimit) {
    return new Response("Too many requests", {
      status: 429,
    })
  }

  const cookiesData = await cookies()

  const state = generateState()
  const codeVerifier = generateCodeVerifier()

  const url = googleOAuth.createAuthorizationURL(state, codeVerifier, [
    "openid",
    "profile",
    "email",
  ])

  cookiesData.set("google_oauth_state", state, {
    path: "/",
    secure: appEnv === "production",
    httpOnly: true,
    maxAge: 60 * 10,
    sameSite: "lax",
  })

  cookiesData.set("google_code_verifier", codeVerifier, {
    path: "/",
    secure: appEnv === "production",
    httpOnly: true,
    maxAge: 60 * 10,
    sameSite: "lax",
  })

  return Response.redirect(url)
}
