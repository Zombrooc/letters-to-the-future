import { z } from "zod";

export const signInSchema = z.object({
  email: z
    .string({ required_error: "Email é obrigatório" })
    .min(1, "Email é obrigatório")
    .email("E-mail inválido"),
});
