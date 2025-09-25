import { z } from "zod";
import { imageSchema, type Image } from "./image";

/**
 * Zod schema for validating Trabalho data from API responses
 */
export const trabalhoSchema = z.object({
  id: z.number(),
  documentId: z.string(),
  titulo: z.string().min(1, "Título é obrigatório"),
  descricao: z.string().min(1, "Descrição é obrigatória"),
  slug: z.string().min(1, "Slug é obrigatório"),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  publishedAt: z.string().datetime(),
  imagens: z.array(imageSchema).default([]),
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
