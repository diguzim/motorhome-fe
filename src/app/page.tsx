import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <h1>Exemplo de uso do Button (shadcn)</h1>
      <Button>Botão padrão</Button>
      <Button variant="outline">Botão Outline</Button>
      <Button disabled>Botão Desabilitado</Button>
    </main>
  );
}
