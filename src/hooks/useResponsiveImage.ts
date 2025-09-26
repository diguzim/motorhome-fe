"use client";

import { useState, useEffect } from "react";
import type { Image } from "@/domain/image";
import { getImageFormatUrl } from "@/lib/image-utils";

/**
 * Hook to get the appropriate image format based on screen size
 */
export function useResponsiveImage(image: Image | undefined) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!image) {
      setImageUrl("/motorhome-placeholder.svg");
      setIsLoading(false);
      return;
    }

    const updateImageUrl = () => {
      const width = window.innerWidth;
      let format: "thumbnail" | "small" | "medium" | "large";

      // Responsive image format selection based on screen size
      if (width < 640) {
        // Mobile: use small or thumbnail
        format = "small";
      } else if (width < 1024) {
        // Tablet: use medium
        format = "medium";
      } else {
        // Desktop: use large
        format = "large";
      }

      const url = getImageFormatUrl(image, format, true);
      setImageUrl(url);
      setIsLoading(false);
    };

    // Set initial image URL
    updateImageUrl();

    // Listen for window resize to update image format
    const handleResize = () => {
      updateImageUrl();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [image]);

  return { imageUrl, isLoading };
}

/**
 * Hook to detect current screen size for responsive behavior
 */
export function useScreenSize() {
  const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop">(
    "desktop"
  );

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setScreenSize("mobile");
      } else if (width < 1024) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };

    // Set initial screen size
    updateScreenSize();

    // Listen for window resize
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return screenSize;
}
