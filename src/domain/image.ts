import { z } from "zod";

/**
 * Enum for supported image MIME types
 */
export enum ImageMimeType {
  JPEG = "image/jpeg",
  PNG = "image/png",
  WEBP = "image/webp",
  GIF = "image/gif",
}

/**
 * Enum for supported image file extensions
 */
export enum ImageExtension {
  JPG = ".jpg",
  JPEG = ".jpeg",
  PNG = ".png",
  WEBP = ".webp",
  GIF = ".gif",
}

/**
 * Enum for image format sizes
 */
export enum ImageFormatSize {
  THUMBNAIL = "thumbnail",
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

/**
 * Zod schema for image format (different sizes of the same image)
 */
export const imageFormatSchema = z.object({
  ext: z.nativeEnum(ImageExtension),
  url: z.string().min(1), // Allow relative URLs like "/uploads/image.jpg"
  hash: z.string(),
  mime: z.nativeEnum(ImageMimeType),
  name: z.string(),
  path: z.string().nullable(),
  size: z.number().positive(),
  width: z.number().positive(),
  height: z.number().positive(),
  sizeInBytes: z.number().positive(),
});

/**
 * Zod schema for image formats object (contains multiple sizes)
 */
export const imageFormatsSchema = z
  .record(z.string(), imageFormatSchema)
  .optional();

/**
 * Zod schema for the main image object
 */
export const imageSchema = z.object({
  id: z.number(),
  documentId: z.string(),
  name: z.string(),
  alternativeText: z.string().nullable(),
  caption: z.string().nullable(),
  width: z.number().positive(),
  height: z.number().positive(),
  formats: imageFormatsSchema,
  hash: z.string(),
  ext: z.nativeEnum(ImageExtension),
  mime: z.nativeEnum(ImageMimeType),
  size: z.number().positive(),
  url: z.string().min(1), // Allow relative URLs like "/uploads/image.jpg"
  previewUrl: z.string().min(1).nullable(),
  provider: z.string(),
  provider_metadata: z.any().nullable(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  publishedAt: z.string().datetime(),
});

/**
 * TypeScript interfaces derived from Zod schemas
 */
export type ImageFormat = z.infer<typeof imageFormatSchema>;
export type ImageFormats = z.infer<typeof imageFormatsSchema>;
export type Image = z.infer<typeof imageSchema>;

/**
 * Validates and transforms a single image object
 */
export function validateImage(data: unknown): Image {
  return imageSchema.parse(data);
}

/**
 * Validates and transforms an array of image objects
 */
export function validateImages(data: unknown[]): Image[] {
  return data.map(validateImage);
}
