"use client";

import { use } from "react";
import { useTrabalho } from "../../../hooks";
import { MarkdownContent } from "../../../components/ui/markdown-content";
import { ResponsiveImageCarousel } from "../../../components/ui/responsive-image-carousel";

interface TrabalhoDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function TrabalhoDetailPage({
  params,
}: TrabalhoDetailPageProps) {
  const { slug } = use(params);
  const { data: trabalho, isLoading, error } = useTrabalho(slug);

  if (isLoading) {
    return (
      <main className="container mx-auto px-6 py-12">
        <div className="flex items-center justify-center min-h-[200px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600">Carregando trabalho...</p>
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
            <p className="text-lg text-red-600">Erro ao carregar o trabalho</p>
            <p className="text-sm text-gray-500 mt-2">
              Trabalho não encontrado ou erro no servidor
            </p>
          </div>
        </div>
      </main>
    );
  }

  if (!trabalho) {
    return (
      <main className="container mx-auto px-6 py-12">
        <div className="flex items-center justify-center min-h-[200px]">
          <div className="text-center">
            <div className="text-gray-400 text-6xl mb-4">📋</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Trabalho não encontrado
            </h3>
            <p className="text-gray-600">
              O trabalho que você está procurando não existe
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-2 h-12 bg-green-500 rounded-full mr-4"></div>
            <div>
              <span className="text-sm font-medium text-green-600 uppercase tracking-wide">
                Projeto Detalhado
              </span>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {trabalho.titulo}
          </h1>
          <div className="w-24 h-1 bg-green-500 mx-auto"></div>
        </header>

        {/* Content */}
        <div className="space-y-8">
          {/* Image Carousel */}
          <div className="w-full">
            <ResponsiveImageCarousel
              images={trabalho.imagens}
              alt={trabalho.titulo}
              className="w-full"
              aspectRatio="video"
              priority={true}
            />
          </div>

          {/* Description */}
          <div className="prose prose-lg prose-gray max-w-none">
            <MarkdownContent
              content={trabalho.descricao}
              className="text-gray-700"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
