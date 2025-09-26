import "./globals.css";
import Header from "../components/navigation/header";
import Footer from "../components/footer";
import { ReactQueryProvider } from "../providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <ReactQueryProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
