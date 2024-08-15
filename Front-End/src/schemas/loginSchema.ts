import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Insira um endereço de e-mail válido"),
  password: z.string().min(8, "Senha de, no mínimo, 8 caracteres"),
})

export type LoginSchemaType = z.infer<typeof loginSchema>