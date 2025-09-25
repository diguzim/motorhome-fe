"use client";

import { useTrabalhos } from "../../hooks";
import { TrabalhoCard } from "../../components/trabalho-card";
import type { Trabalho } from "@/domain/trabalho";

export default function TrabalhosPage() {
  const { data, isLoading, error } = useTrabalhos();

  if (isLoading) {
    return (
      <main className="container mx-auto px-6 py-12">
        <div className="flex items-center justify-center min-h-[200px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600">Carregando trabalhos...</p>
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="container mx-auto px-6 py-12">
        <div className="flex items-center justify-center min-h-[200px]">
          <div className="text-center">
            <div className="text-red-500 text-6xl mb-4">⚠️</div>
            <p className="text-lg text-red-600">
              Erro ao carregar os trabalhos
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Tente novamente mais tarde
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-6 py-12">
      <div className="prose prose-lg prose-gray max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Nossos Trabalhos
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos projetos que realizamos com dedicação e qualidade
          </p>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-6"></div>
        </header>

        {data && data.length > 0 ? (
          <div className="grid gap-8 md:gap-12">
            {data.map((trabalho: Trabalho, index: number) => (
              <TrabalhoCard
                key={trabalho.slug}
                trabalho={trabalho}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📋</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Nenhum trabalho encontrado
            </h3>
            <p className="text-gray-600">
              Em breve teremos novos projetos para compartilhar
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
