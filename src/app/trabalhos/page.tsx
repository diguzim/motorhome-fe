"use client";

import { useTrabalhos } from "../../hooks";

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
            {data.map((trabalho: any, index: number) => (
              <article
                key={trabalho.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-2 h-12 bg-green-500 rounded-full mr-4"></div>
                    <div>
                      <span className="text-sm font-medium text-green-600 uppercase tracking-wide">
                        Projeto {String(index + 1).padStart(2, "0")}
                      </span>
                      <h2 className="text-2xl font-bold text-gray-900 mt-1">
                        {trabalho.titulo}
                      </h2>
                    </div>
                  </div>

                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700 leading-relaxed">
                      {trabalho.descricao}
                    </p>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex items-center text-sm text-gray-500">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Projeto concluído com sucesso
                    </div>
                  </div>
                </div>
              </article>
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
