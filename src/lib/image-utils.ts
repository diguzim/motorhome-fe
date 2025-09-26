/**
 * Utility functions for working with image URLs from the API
 */

/**
 * Converts a relative image URL from the API to a full URL
 * @param relativeUrl - The relative URL from the API (e.g., "/uploads/image.jpg")
 * @param baseUrl - The base URL for images (optional, uses env var if not provided)
 * @returns Full URL for the image
 */
export function getFullImageUrl(relativeUrl: string, baseUrl?: string): string {
  // If the URL is already absolute, return as is
  if (relativeUrl.startsWith("http://") || relativeUrl.startsWith("https://")) {
    return relativeUrl;
  }

  // Use provided baseUrl or fallback to images environment variable
  const imagesBaseUrl =
    baseUrl || process.env.NEXT_PUBLIC_IMAGES_BASE_URL || "";

  // Remove trailing slash from baseUrl and leading slash from relativeUrl if present
  const cleanBaseUrl = imagesBaseUrl.replace(/\/+$/, "");
  const cleanRelativeUrl = relativeUrl.startsWith("/")
    ? relativeUrl
    : `/${relativeUrl}`;

  return `${cleanBaseUrl}${cleanRelativeUrl}`;
}

/**
 * Gets the full URL for a specific image format
 * @param image - The image object from the API
 * @param format - The desired format size (thumbnail, small, medium, large)
 * @param fallbackToOriginal - Whether to fallback to the original image if format doesn't exist
 * @returns Full URL for the image format or null if not found
 */
export function getImageFormatUrl(
  image: { formats?: Record<string, { url: string }> | null; url: string },
  format: "thumbnail" | "small" | "medium" | "large",
  fallbackToOriginal: boolean = true
): string | null {
  // Try to get the specific format
  const formatUrl = image.formats?.[format]?.url;
  if (formatUrl) {
    return getFullImageUrl(formatUrl);
  }

  // Fallback to original image if requested
  if (fallbackToOriginal) {
    return getFullImageUrl(image.url);
  }

  return null;
}
