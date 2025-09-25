import { z } from "zod";

/**
 * Zod schema for validating Trabalho data from API responses
 */
export const trabalhoSchema = z.object({
  id: z.union([z.string(), z.number()]).transform(String),
  titulo: z.string().min(1, "Título é obrigatório"),
  descricao: z.string().min(1, "Descrição é obrigatória"),
  // Add other fields that might come from the API
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  publishedAt: z.string().optional(),
});

/**
 * TypeScript interface derived from the Zod schema
 */
export type Trabalho = z.infer<typeof trabalhoSchema>;

/**
 * Validates and transforms a single trabalho object
 */
export function validateTrabalho(data: unknown): Trabalho {
  return trabalhoSchema.parse(data);
}

/**
 * Validates and transforms an array of trabalho objects
 */
export function validateTrabalhos(data: unknown[]): Trabalho[] {
  return data.map(validateTrabalho);
}
