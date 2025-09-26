"use client";

import { useTrabalhos } from "../../hooks";
import { TrabalhoCard } from "../../components/trabalho-card";
import type { Trabalho } from "@/domain/trabalho";

export default function TrabalhosPage() {
  const { data, isLoading, error } = useTrabalhos();

  if (isLoading) {
    return (
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center bg-white rounded-2xl shadow-sm border border-gray-100 p-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 font-medium">
                Carregando trabalhos...
              </p>
              <p className="text-sm text-gray-400 mt-2">Aguarde um momento</p>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center bg-white rounded-2xl shadow-sm border border-gray-100 p-12">
              <div className="text-red-500 text-5xl mb-6">⚠️</div>
              <h3 className="text-xl font-semibold text-red-600 mb-2">
                Erro ao carregar os trabalhos
              </h3>
              <p className="text-sm text-gray-500">
                Tente novamente mais tarde ou entre em contato conosco
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Projetos de Qualidade
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Nossos Trabalhos
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Conheça alguns dos projetos que realizamos com dedicação e
              qualidade. Cada motorhome é único e personalizado para atender às
              necessidades específicas de nossos clientes.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto mt-8 rounded-full"></div>
          </header>

          {data && data.length > 0 ? (
            <div className="grid gap-8 lg:gap-12">
              {data.map((trabalho: Trabalho, index: number) => (
                <TrabalhoCard
                  key={trabalho.slug}
                  trabalho={trabalho}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 max-w-md mx-auto">
                <div className="text-gray-300 text-6xl mb-6">📋</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Nenhum trabalho encontrado
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Em breve teremos novos projetos incríveis para compartilhar
                  com você
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
