import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="p-8 space-y-8">
      {/* Cabeçalho */}
      <h1 className="text-3xl font-bold">Bem-vindo ao meu projeto 🚐</h1>

      {/* Botão */}
      <Button>Botão padrão</Button>
      <Button variant="outline">Botão Outline</Button>
      <Button disabled>Botão Desabilitado</Button>
      <h1> Hello world! </h1>
      <h1 className="text-3xl font-bold underline"> Hello world! </h1>

      {/* Card */}
      <Card>
        <CardHeader>
          <CardTitle>Exemplo de Card</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Esse é um card básico usando os componentes do shadcn/ui.</p>
        </CardContent>
      </Card>

      {/* Input */}
      <div className="space-y-2">
        <label htmlFor="nome" className="text-sm font-medium">
          Digite seu nome
        </label>
        <Input id="nome" placeholder="Rodrigo..." />
      </div>
    </main>
  );
}
