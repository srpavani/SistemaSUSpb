import { z } from "zod";

export const nepSchema = z.object({
  nep: z.string().min(1, "Insira o nome do NEP"),
  regiao_saude: z.string().min(1, "Insira a região de saúde"),
  municipio: z.string().min(1, "Insira o município"),
  nome_diretor: z.string().min(1, "Insira o nome do diretor"),
  telefone_servico: z.string().min(1, "Insira o telefone do serviço"),
  email_direcao_geral: z.string().email("Insira um e-mail válido"),
  nome_responsavel: z.string().min(1, "Insira o nome do responsável"),
  contato_responsavel: z.string().min(1, "Insira o contato do responsável"),
  email_responsavel: z.string().email("Insira um e-mail válido"),
});

export type NEPSchemaType = z.infer<typeof nepSchema>;