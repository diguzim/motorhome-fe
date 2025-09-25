"use client";

import { useTrabalhos } from "../../hooks";

export default function TrabalhosPage() {
  const { data, isLoading, error } = useTrabalhos();

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao carregar</p>;

  return (
    <main>
      <h1>Trabalhos</h1>
      <ul>
        {data?.map((trabalho: any) => (
          <li key={trabalho.id}>
            <h2>{trabalho.titulo}</h2>
            <p>{trabalho.descricao}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
