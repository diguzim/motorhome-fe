import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/navigation/header";
import Footer from "../components/footer";
import { ReactQueryProvider } from "../providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Fábrica de Motorhomes - Sua Casa Sobre Rodas",
  description:
    "Criamos motorhomes personalizados com qualidade, conforto e funcionalidade para suas aventuras.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className={inter.className}>
        <ReactQueryProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
