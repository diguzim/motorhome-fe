"use client";

import React from "react";
import Image from "next/image";
import { useResponsiveImage } from "@/hooks/useResponsiveImage";
import type { Image as ImageType } from "@/domain/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ResponsiveImageCarouselProps {
  images?: ImageType[];
  alt: string;
  className?: string;
  aspectRatio?: "square" | "video" | "wide" | "auto";
  priority?: boolean;
}

/**
 * Responsive Image Carousel component that displays trabalho images with automatic
 * format selection based on screen size and fallback to placeholder
 */
export function ResponsiveImageCarousel({
  images = [],
  alt,
  className = "",
  aspectRatio = "video",
  priority = false,
}: ResponsiveImageCarouselProps) {
  const aspectRatioClasses = {
    square: "aspect-square",
    video: "aspect-video",
    wide: "aspect-[21/9]",
    auto: "",
  };

  // If no images, show fallback
  const imagesToShow = images.length > 0 ? images : [];
  const showFallback = imagesToShow.length === 0;

  // Single image without carousel
  if (imagesToShow.length === 1) {
    return (
      <div className={`relative ${className}`}>
        <CarouselImageItem
          image={imagesToShow[0]}
          alt={alt}
          aspectRatio={aspectRatio}
          priority={priority}
        />
      </div>
    );
  }

  // Fallback single image
  if (showFallback) {
    return (
      <div
        className={`${aspectRatioClasses[aspectRatio]} relative overflow-hidden rounded-lg ${className}`}
      >
        <Image
          src="/motorhome-placeholder.svg"
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 70vw"
          className="object-contain bg-gray-100"
        />
      </div>
    );
  }

  // Multiple images with carousel
  return (
    <div className={`relative ${className}`}>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {imagesToShow.map((image, index) => (
            <CarouselItem key={image.id || index}>
              <CarouselImageItem
                image={image}
                alt={`${alt} - Imagem ${index + 1}`}
                aspectRatio={aspectRatio}
                priority={priority && index === 0}
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Buttons - Only show if more than one image */}
        {imagesToShow.length > 1 && (
          <>
            <CarouselPrevious className="left-4 bg-white/80 hover:bg-white border-gray-200 text-gray-700 hover:text-gray-900" />
            <CarouselNext className="right-4 bg-white/80 hover:bg-white border-gray-200 text-gray-700 hover:text-gray-900" />
          </>
        )}
      </Carousel>
    </div>
  );
}

/**
 * Individual carousel image item component
 */
function CarouselImageItem({
  image,
  alt,
  aspectRatio,
  priority,
}: {
  image: ImageType;
  alt: string;
  aspectRatio: "square" | "video" | "wide" | "auto";
  priority: boolean;
}) {
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
        className={`${aspectRatioClasses[aspectRatio]} bg-gray-200 animate-pulse rounded-lg`}
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
        className={`${aspectRatioClasses[aspectRatio]} bg-gray-100 rounded-lg flex items-center justify-center`}
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
      className={`${aspectRatioClasses[aspectRatio]} relative overflow-hidden rounded-lg`}
    >
      <Image
        src={imageUrl}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 70vw"
        className="object-cover"
        onError={(e) => {
          // Fallback to placeholder on error
          e.currentTarget.src = "/motorhome-placeholder.svg";
          e.currentTarget.className = "object-contain bg-gray-100";
        }}
      />
    </div>
  );
}
