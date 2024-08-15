import { z } from "zod";

export const atividadesIESchema = z.object({
  nome_estudante: z
    .string()
    .min(6, "O nome deve ter pelo menos 5 caracteres"),
  email: z.string().email("Insira um endereço de e-mail válido"),
  cpf: z
    .string()
    .regex(/^\d{3}(\.?\d{3}){2}-?\d{2}$/, "Insira um CPF válido"),
  telefone: z
    .string()
    .regex(
      /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/,
      "Insira um número de telefone válido"
    ),
  curso: z.string().refine((value) => value !== "", {
    message: "Selecione um Curso",
  }),
  semestre: z.string().refine((value) => value !== "", {
    message: "Selecione um Semestre",
  }),
  endereco: z.string().min(1, "Insira o endereço"),
  bairro: z.string().min(1, "Insira o bairro"),
  matricula: z
    .string()
    .min(5, "A matrícula deve conter pelo menos 5 caracteres")
    .max(20, "A matrícula deve conter no máximo 20 caracteres")
    .regex(/^[A-Za-z0-9]+$/, {
      message: "A matrícula deve conter apenas letras e números",
    }),
  setor_estagio: z.string().min(1, "Insira o setor de realização do estágio"),
  horario_inicio: z
    .string()
    .min(1, "Insira o horário de início do estágio")
    .regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, "Insira um horário válido"),
  horario_saida: z
    .string()
    .min(1, "Insira o horário de término do estágio")
    .regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, "Insira um horário válido"),
  rg: z
    .string()
    .min(1, "Insira o RG")
    .regex(
      /^(\d{1,2}\.\d{3}\.\d{3}[- ]?\d{1}|\d{7}|\d{9}|\d\.\d{3}\.\d{3})$/,
      "Insira um RG válido"
    ),
  cidade: z.string().min(1, "Insira a cidade"),
  cep: z.string().regex(/^\d{5}-?\d{3}$/, "Insira um CEP válido"),
  data_inicio: z.coerce.date().refine((value) => value <= new Date(), {
    message: "Data não pode ser maior que a atual",
  }),
  data_fim: z.coerce.date(),
}).refine((data) => data.data_inicio <= data.data_fim, {
  message: "Data de início deve ser menor que a data de fim",
});

export type AtividadesIESchemaType = z.infer<typeof atividadesIESchema>;
