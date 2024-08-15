import { z } from "zod";

export const residenciaIESchema = z.object({
  nome_residente: z.string().min(6, "O nome deve ter pelo menos 5 caracteres"),
  conselho_profissional: z.string().min(1, "Insira o conselho profissional"),
  hospital_sede: z.string().min(1, "Insira o hospital sede"),
  semestre: z.string().refine((value) => value !== "", {
    message: "Selecione um Semestre",
  }),
  preceptor_responsavel: z.string().min(1, "Insira o preceptor responsável"),
  programa_residencia: z.string().min(1, "Insira o programa de residência"),
  hospital_rodizio: z.string().min(1, "Insira o hospital de rodízio"),
  setor: z.string().min(1, "Insira o setor de realização do rodízio"),
  turnos: z.string().min(1, "Insira os turnos"),
});

export type ResidenciaIESchemaType = z.infer<typeof residenciaIESchema>;
