import {
  countKartuKeluargas,
  deleteKartuKeluarga,
  getKartuKeluargaById,
  getKartuKeluargas,
  insertKartuKeluarga,
  insertKartuKeluargaSchema,
  searchKartuKeluargas,
  updateKartuKeluarga,
  updateKartuKeluargaSchema,
  type SelectKartuKeluarga,
} from "@pintudesa/db"
import { tryCatch } from "@yopem/try-catch"
import { z } from "zod"

import {
  adminProtectedProcedure,
  createTRPCRouter,
  publicProcedure,
} from "../trpc"
import { handleTRPCError } from "../utils/error"

export const kartuKeluargaRouter = createTRPCRouter({
  create: adminProtectedProcedure
    .input(insertKartuKeluargaSchema)
    .mutation(async ({ input }) => {
      const { data, error } = await tryCatch(insertKartuKeluarga(input))
      if (error) {
        handleTRPCError(error)
      }
      return data
    }),

  update: adminProtectedProcedure
    .input(updateKartuKeluargaSchema)
    .mutation(async ({ input }) => {
      const { data, error } = await tryCatch(
        updateKartuKeluarga(input as SelectKartuKeluarga),
      )
      if (error) {
        handleTRPCError(error)
      }
      return data
    }),

  delete: adminProtectedProcedure
    .input(z.string())
    .mutation(async ({ input }) => {
      const { data, error } = await tryCatch(deleteKartuKeluarga(input))
      if (error) {
        handleTRPCError(error)
      }
      return data
    }),

  all: adminProtectedProcedure
    .input(z.object({ page: z.number(), perPage: z.number() }))
    .query(async ({ input }) => {
      const { data, error } = await tryCatch(
        getKartuKeluargas(input.page, input.perPage),
      )
      if (error) {
        handleTRPCError(error)
      }
      return data
    }),

  byId: adminProtectedProcedure.input(z.string()).query(async ({ input }) => {
    const { data, error } = await tryCatch(getKartuKeluargaById(input))
    if (error) {
      handleTRPCError(error)
    }
    return data
  }),

  search: publicProcedure
    .input(z.object({ searchQuery: z.string(), limit: z.number() }))
    .query(async ({ input }) => {
      const { data, error } = await tryCatch(searchKartuKeluargas(input))
      if (error) {
        handleTRPCError(error)
      }
      return data
    }),

  count: publicProcedure.query(async () => {
    const { data, error } = await tryCatch(countKartuKeluargas())
    if (error) {
      handleTRPCError(error)
    }
    return data
  }),
})
