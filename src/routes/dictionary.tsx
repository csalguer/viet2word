
import { createFileRoute } from "@tanstack/react-router"
import { z } from "zod"

const dictionarySearchSchema = z.object({
  q: z.string().optional(),
  page: z.number().optional().default(1),
})

export const Route = createFileRoute("/dictionary")({
  validateSearch: (search) => dictionarySearchSchema.parse(search),
})
