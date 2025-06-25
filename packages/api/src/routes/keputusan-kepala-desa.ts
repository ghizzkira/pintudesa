import {
  countKeputusanKepalaDesas,
  deleteKeputusanKepalaDesa,
  getKeputusanKepalaDesaById,
  getKeputusanKepalaDesas,
  insertKeputusanKepalaDesa,
  insertKeputusanKepalaDesaSchema,
  searchKeputusanKepalaDesas,
  updateKeputusanKepalaDesa,
  updateKeputusanKepalaDesaSchema,
  type SelectKeputusanKepalaDesa,
} from "@pintudesa/db"
import { tryCatch } from "@yopem/try-catch"
import { z } from "zod"

import {
  adminProtectedProcedure,
  createTRPCRouter,
  publicProcedure,
} from "../trpc"
import { handleTRPCError } from "../utils/error"

export const keputusanKepalaDesaRouter = createTRPCRouter({
  create: adminProtectedProcedure
    .input(insertKeputusanKepalaDesaSchema)
    .mutation(async ({ input }) => {
      const { data, error } = await tryCatch(insertKeputusanKepalaDesa(input))
      if (error) {
        handleTRPCError(error)
      }
      return data
    }),

  update: adminProtectedProcedure
    .input(updateKeputusanKepalaDesaSchema)
    .mutation(async ({ input }) => {
      const { data, error } = await tryCatch(
        updateKeputusanKepalaDesa(input as SelectKeputusanKepalaDesa),
      )
      if (error) {
        handleTRPCError(error)
      }
      return data
    }),

  delete: adminProtectedProcedure
    .input(z.string())
    .mutation(async ({ input }) => {
      const { data, error } = await tryCatch(deleteKeputusanKepalaDesa(input))
      if (error) {
        handleTRPCError(error)
      }
      return data
    }),

  all: adminProtectedProcedure
    .input(z.object({ page: z.number(), perPage: z.number() }))
    .query(async ({ input }) => {
      const { data, error } = await tryCatch(
        getKeputusanKepalaDesas(input.page, input.perPage),
      )
      if (error) {
        handleTRPCError(error)
      }
      return data
    }),

  byId: adminProtectedProcedure.input(z.string()).query(async ({ input }) => {
    const { data, error } = await tryCatch(getKeputusanKepalaDesaById(input))
    if (error) {
      handleTRPCError(error)
    }
    return data
  }),

  search: publicProcedure
    .input(z.object({ searchQuery: z.string(), limit: z.number() }))
    .query(async ({ input }) => {
      const { data, error } = await tryCatch(searchKeputusanKepalaDesas(input))
      if (error) {
        handleTRPCError(error)
      }
      return data
    }),

  count: publicProcedure.query(async () => {
    const { data, error } = await tryCatch(countKeputusanKepalaDesas())
    if (error) {
      handleTRPCError(error)
    }
    return data
  }),
})
