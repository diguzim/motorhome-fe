"use client";

import { useQuery } from "@tanstack/react-query";
import { getTrabalhoBySlug } from "@/services/trabalhoService";

export function useTrabalho(slug: string) {
  return useQuery({
    queryKey: ["trabalho", slug],
    queryFn: () => getTrabalhoBySlug(slug),
    enabled: !!slug, // Only run if slug is provided
  });
}
