import { z } from "zod";

export const ieSchema = z.object({
  instituicao_ensino: z.string().min(1, "Insira o nome da instituição de ensino"),
  numero_convenio: z.string().min(1, "Insira o número do convênio"),
  data_assinatura: z.string().regex(/^\d{4}-\d{2}-\d{2}$/i, "Insira uma data válida"),
  publicacao_doe_pb: z.string().regex(/^\d{4}-\d{2}-\d{2}$/i, "Insira uma data válida"),
  cidade: z.string().min(1, "Insira o nome da cidade"),
  macrorregiao: z.string().min(1, "Insira a macrorregião"),
  nome_responsavel: z.string().min(1, "Insira o nome do responsável"),
  contato_responsavel: z.string().min(1, "Insira o contato do responsável"),
  email_responsavel: z.string().email("Insira um e-mail válido"),
  nome_segundo_responsavel: z.string().min(1, "Insira o nome do segundo responsável").optional(),
  contato_segundo_responsavel: z.string().min(1, "Insira o contato do segundo responsável").optional(),
  email_segundo_responsavel: z.string().email("Insira um e-mail válido").optional(),
});

export type IESchemaType = z.infer<typeof ieSchema>;