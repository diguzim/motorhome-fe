"use client";

import Image from "next/image";
import { useResponsiveImage } from "@/hooks/useResponsiveImage";
import type { Image as ImageType } from "@/domain/image";

interface ResponsiveImageProps {
  image?: ImageType;
  alt: string;
  className?: string;
  aspectRatio?: "square" | "video" | "wide" | "auto";
  priority?: boolean;
}

/**
 * ResponsiveImage component that displays trabalho images with automatic
 * format selection based on screen size and fallback to placeholder
 */
export function ResponsiveImage({
  image,
  alt,
  className = "",
  aspectRatio = "video",
  priority = false,
}: ResponsiveImageProps) {
  const { imageUrl, isLoading } = useResponsiveImage(image);

  const aspectRatioClasses = {
    square: "aspect-square",
    video: "aspect-video",
    wide: "aspect-[21/9]",
    auto: "",
  };

  if (isLoading) {
    return (
      <div
        className={`${aspectRatioClasses[aspectRatio]} bg-gray-200 animate-pulse rounded-lg ${className}`}
      >
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-gray-400">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  }

  if (!imageUrl) {
    return (
      <div
        className={`${aspectRatioClasses[aspectRatio]} bg-gray-100 rounded-lg flex items-center justify-center ${className}`}
      >
        <div className="text-gray-400 text-center p-4">
          <svg
            className="w-12 h-12 mx-auto mb-2"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-sm">Imagem não disponível</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`${aspectRatioClasses[aspectRatio]} relative overflow-hidden rounded-lg ${className}`}
    >
      <Image
        src={imageUrl}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover hover:scale-105 transition-transform duration-300"
        onError={(e) => {
          // Fallback to placeholder on error
          e.currentTarget.src = "/motorhome-placeholder.svg";
        }}
      />
    </div>
  );
}

/**
 * Smaller variant for thumbnails
 */
export function ResponsiveImageThumbnail(
  props: Omit<ResponsiveImageProps, "aspectRatio">
) {
  return (
    <ResponsiveImage
      {...props}
      aspectRatio="square"
      className={`w-20 h-20 ${props.className || ""}`}
    />
  );
}

/**
 * Card variant optimized for card layouts
 */
export function ResponsiveImageCard(
  props: Omit<ResponsiveImageProps, "aspectRatio">
) {
  return <ResponsiveImage {...props} aspectRatio="video" />;
}
