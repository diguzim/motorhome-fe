import "./globals.css";
import Header from "../components/navigation/Header";
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
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
