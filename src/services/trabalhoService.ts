const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getTrabalhos() {
  const res = await fetch(`${API_URL}/trabalhos?populate=*`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    cache: "no-store", // força não usar cache do Next
  });

  if (!res.ok) throw new Error("Erro ao buscar trabalhos");
  const json = await res.json();

  return json.data;
}
