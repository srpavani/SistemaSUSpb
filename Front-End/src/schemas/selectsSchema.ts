import { z } from "zod";

export const selectsSchema = z.object({
  instituicao_ensino: z.string().refine(value => value !== "", {
    message: 'Selecione uma Instituição de Ensino'
  }),
  semestre: z.string().refine(value => value !== "", {
    message: 'Selecione um Semestre'
  }),
  curso: z.string().refine(value => value !== "", {
    message: 'Selecione um Curso'
  }),
})

export type SelectSchemaType = z.infer<typeof selectsSchema>