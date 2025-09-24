"use client";

import { useQuery } from "@tanstack/react-query";
import { getTrabalhos } from "@/services/trabalhoService";

export function useTrabalhos() {
  return useQuery({
    queryKey: ["trabalhos"],
    queryFn: getTrabalhos,
  });
}
