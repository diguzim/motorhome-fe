import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MarkdownPreview } from "@/components/ui/markdown-content";
import { ResponsiveImageCard } from "@/components/ui/responsive-image";
import type { Trabalho } from "@/domain/trabalho";

interface TrabalhoCardProps {
  trabalho: Trabalho;
  index: number;
}

export function TrabalhoCard({ trabalho, index }: TrabalhoCardProps) {
  return (
    <Link href={`/trabalhos/${trabalho.slug}`} className="block group">
      <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-gray-300 transition-all duration-500 cursor-pointer overflow-hidden group-hover:-translate-y-1">
        <CardHeader className="pb-4">
          <div className="flex items-center">
            <div className="w-1 h-16 bg-gradient-to-b from-green-400 to-green-600 rounded-full mr-6"></div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Projeto {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900 leading-tight group-hover:text-green-700 transition-colors duration-300">
                {trabalho.titulo}
              </CardTitle>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6 px-8">
          {/* Image */}
          <div className="relative overflow-hidden rounded-xl">
            <ResponsiveImageCard
              image={trabalho.imagens[0]}
              alt={trabalho.titulo}
              className="w-full group-hover:scale-105 transition-transform duration-700"
              priority={index < 2} // Prioritize loading for first 2 images
            />
          </div>

          {/* Description */}
          <div className="space-y-3">
            <MarkdownPreview
              content={trabalho.descricao}
              maxLength={350}
              className="text-gray-700 leading-relaxed"
            />
            <div className="flex items-center text-sm text-green-600 font-medium group-hover:text-green-700 transition-colors duration-300">
              <span>Ver detalhes completos</span>
              <svg
                className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </CardContent>

        <CardFooter className="border-t border-gray-100 bg-gray-50/50 px-8 py-4">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-medium">Projeto concluído</span>
              </div>
            </div>
            <div className="text-xs text-gray-400 uppercase tracking-wide font-semibold">
              Motorhome Personalizado
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
