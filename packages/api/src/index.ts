import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server"

import { appRouter, type AppRouter } from "./root"
import { createCallerFactory, createTRPCContext } from "./trpc"

const createCaller = createCallerFactory(appRouter)

type RouterInputs = inferRouterInputs<AppRouter>
type RouterOutputs = inferRouterOutputs<AppRouter>

export { createTRPCContext, appRouter, createCaller }
export type { AppRouter, RouterInputs, RouterOutputs }
