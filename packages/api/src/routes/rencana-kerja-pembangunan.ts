import {
  countRencanaKerjaPembangunans,
  deleteRencanaKerjaPembangunan,
  getRencanaKerjaPembangunanById,
  getRencanaKerjaPembangunans,
  insertRencanaKerjaPembangunan,
  insertRencanaKerjaPembangunanSchema,
  searchRencanaKerjaPembangunans,
  updateRencanaKerjaPembangunan,
  updateRencanaKerjaPembangunanSchema,
  type SelectRencanaKerjaPembangunan,
} from "@pintudesa/db"
import { tryCatch } from "@yopem/try-catch"
import { z } from "zod"

import {
  adminProtectedProcedure,
  createTRPCRouter,
  publicProcedure,
} from "../trpc"
import { handleTRPCError } from "../utils/error"

export const rencanaKerjaPembangunanRouter = createTRPCRouter({
  create: adminProtectedProcedure
    .input(insertRencanaKerjaPembangunanSchema)
    .mutation(async ({ input }) => {
      const { data, error } = await tryCatch(
        insertRencanaKerjaPembangunan(input),
      )
      if (error) {
        handleTRPCError(error)
      }
      return data
    }),

  update: adminProtectedProcedure
    .input(updateRencanaKerjaPembangunanSchema)
    .mutation(async ({ input }) => {
      const { data, error } = await tryCatch(
        updateRencanaKerjaPembangunan(input as SelectRencanaKerjaPembangunan),
      )
      if (error) {
        handleTRPCError(error)
      }
      return data
    }),

  delete: adminProtectedProcedure
    .input(z.string())
    .mutation(async ({ input }) => {
      const { data, error } = await tryCatch(
        deleteRencanaKerjaPembangunan(input),
      )
      if (error) {
        handleTRPCError(error)
      }
      return data
    }),

  all: adminProtectedProcedure
    .input(z.object({ page: z.number(), perPage: z.number() }))
    .query(async ({ input }) => {
      const { data, error } = await tryCatch(
        getRencanaKerjaPembangunans(input.page, input.perPage),
      )
      if (error) {
        handleTRPCError(error)
      }
      return data
    }),

  byId: publicProcedure.input(z.string()).query(async ({ input }) => {
    const { data, error } = await tryCatch(
      getRencanaKerjaPembangunanById(input),
    )
    if (error) {
      handleTRPCError(error)
    }
    return data
  }),

  search: publicProcedure
    .input(z.object({ searchQuery: z.string(), limit: z.number() }))
    .query(async ({ input }) => {
      const { data, error } = await tryCatch(
        searchRencanaKerjaPembangunans(input),
      )
      if (error) {
        handleTRPCError(error)
      }
      return data
    }),

  count: publicProcedure.query(async () => {
    const { data, error } = await tryCatch(countRencanaKerjaPembangunans())
    if (error) {
      handleTRPCError(error)
    }
    return data
  }),
})
