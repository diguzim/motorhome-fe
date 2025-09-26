import {
  mapApiResponseToTrabalhosArray,
  mapApiResponseToTrabalhos,
  mapApiResponseToTrabalho,
} from "@/mappers";
import type { Trabalho } from "@/domain/trabalho";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getTrabalhos(): Promise<Trabalho[]> {
  const res = await fetch(`${API_URL}/trabalhos?populate=*`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    cache: "no-store", // força não usar cache do Next
  });

  if (!res.ok) throw new Error("Erro ao buscar trabalhos");
  const json = await res.json();

  return mapApiResponseToTrabalhosArray(json);
}

export async function getTrabalhosMap(): Promise<Map<string, Trabalho>> {
  const res = await fetch(`${API_URL}/trabalhos?populate=*`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    cache: "no-store", // força não usar cache do Next
  });

  if (!res.ok) throw new Error("Erro ao buscar trabalhos");
  const json = await res.json();

  return mapApiResponseToTrabalhos(json);
}

export async function getTrabalhoBySlug(
  slug: string
): Promise<Trabalho | null> {
  const res = await fetch(
    `${API_URL}/trabalhos?filters[slug][$eq]=${slug}&populate=*`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-store", // força não usar cache do Next
    }
  );

  if (!res.ok) throw new Error("Erro ao buscar trabalho");
  const json = await res.json();

  // The API returns an array, so we get the first item or return null
  if (json.data && json.data.length > 0) {
    return mapApiResponseToTrabalho(json.data[0]);
  }

  return null;
}
