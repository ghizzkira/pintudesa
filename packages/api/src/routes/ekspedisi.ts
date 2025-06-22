import {
  countEkspedises,
  deleteEkspedisi,
  getEkspedises,
  getEkspedisiById,
  insertEkspedisi,
  insertEkspedisiSchema,
  searchEkspedises,
  updateEkspedisi,
  updateEkspedisiSchema,
  type SelectEkspedisi,
} from "@pintudesa/db"
import { tryCatch } from "@yopem/try-catch"
import { z } from "zod"

import {
  adminProtectedProcedure,
  createTRPCRouter,
  publicProcedure,
} from "../trpc"
import { handleTRPCError } from "../utils/error"

export const ekspedisiRouter = createTRPCRouter({
  create: adminProtectedProcedure
    .input(insertEkspedisiSchema)
    .mutation(async ({ input }) => {
      const { data, error } = await tryCatch(insertEkspedisi(input))
      if (error) {
        handleTRPCError(error)
      }
      return data
    }),

  update: adminProtectedProcedure
    .input(updateEkspedisiSchema)
    .mutation(async ({ input }) => {
      const { data, error } = await tryCatch(
        updateEkspedisi(input as SelectEkspedisi),
      )
      if (error) {
        handleTRPCError(error)
      }
      return data
    }),

  delete: adminProtectedProcedure
    .input(z.string())
    .mutation(async ({ input }) => {
      const { data, error } = await tryCatch(deleteEkspedisi(input))
      if (error) {
        handleTRPCError(error)
      }
      return data
    }),

  all: adminProtectedProcedure
    .input(z.object({ page: z.number(), perPage: z.number() }))
    .query(async ({ input }) => {
      const { data, error } = await tryCatch(
        getEkspedises(input.page, input.perPage),
      )
      if (error) {
        handleTRPCError(error)
      }
      return data
    }),

  byId: publicProcedure.input(z.string()).query(async ({ input }) => {
    const { data, error } = await tryCatch(getEkspedisiById(input))
    if (error) {
      handleTRPCError(error)
    }
    return data
  }),

  search: publicProcedure
    .input(z.object({ searchQuery: z.string(), limit: z.number() }))
    .query(async ({ input }) => {
      const { data, error } = await tryCatch(searchEkspedises(input))
      if (error) {
        handleTRPCError(error)
      }
      return data
    }),

  count: publicProcedure.query(async () => {
    const { data, error } = await tryCatch(countEkspedises())
    if (error) {
      handleTRPCError(error)
    }
    return data
  }),
})
