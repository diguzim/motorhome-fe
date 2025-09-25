import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Trabalho } from "@/domain/trabalho";

interface TrabalhoCardProps {
  trabalho: Trabalho;
  index: number;
}

export function TrabalhoCard({ trabalho, index }: TrabalhoCardProps) {
  return (
    <Card className="bg-white hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <div className="flex items-center">
          <div className="w-2 h-12 bg-green-500 rounded-full mr-4"></div>
          <div>
            <span className="text-sm font-medium text-green-600 uppercase tracking-wide">
              Projeto {String(index + 1).padStart(2, "0")}
            </span>
            <CardTitle className="text-2xl font-bold text-gray-900 mt-1">
              {trabalho.titulo}
            </CardTitle>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-700 leading-relaxed">{trabalho.descricao}</p>
        </div>
      </CardContent>

      <CardFooter className="border-t border-gray-200">
        <div className="flex items-center text-sm text-gray-500">
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          Projeto concluído com sucesso
        </div>
      </CardFooter>
    </Card>
  );
}
