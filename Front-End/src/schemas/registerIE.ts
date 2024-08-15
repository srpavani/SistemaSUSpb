import { z } from "zod";

export const registerIESchema = z
  .object({
    nomeCompleto: z
      .string()
      .min(6, "O nome completo deve ter pelo menos 5 caracteres"),
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
    password: z.string().min(8, "Senha de, no mínimo, 8 caracteres"),
    password2: z.string(),
    endereco_local_trabalho: z.string().min(1, "Insira o local de trabalho"),
    cargo: z.string().refine((value) => value !== "", {
      message: "Selecione um cargo",
    }),
    data_admissao_cargo: z.coerce
      .date()
      .refine((value) => value <= new Date(), {
        message: "Data não pode ser maior que a atual",
      }),
    tk: z.number().min(1, "Insira o token de acesso"),
    bairro: z.string().min(1, "Insira o bairro"),
    cep: z.string().regex(/^\d{5}-?\d{3}$/, "Insira um CEP válido"),
  })
  .refine((data) => data.password === data.password2, {
    message: "Senhas devem ser iguais",
    path: ["password2"],
  });

export type RegisterIESchemaType = z.infer<typeof registerIESchema>;
