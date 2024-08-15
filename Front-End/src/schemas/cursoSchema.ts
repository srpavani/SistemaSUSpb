import { z } from "zod";

export const cursoSchema = z.object({
  curso: z.string().min(2, "Insira o nome do curso"),
  inoc: z.number().min(1, "Insira o INOC do curso")
})

export type CursoSchemaType = z.infer<typeof cursoSchema>