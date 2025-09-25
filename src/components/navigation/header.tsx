import React from "react";
import Navigation from "./navigation";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => (
  <header className="flex items-center justify-between px-8 py-4 bg-black text-white">
    <div className="flex items-center gap-4">
      <Link
        href="/"
        className="inline-block"
        aria-label="Ir para página inicial"
      >
        <Image
          src="/logo.png"
          alt="Logo Motorhome"
          width={140}
          height={112}
          className="h-14 w-auto"
          priority
        />
      </Link>
      <p className="hidden md:block text-white">Fábrica de Motorhomes</p>
    </div>
    <Navigation />
  </header>
);

export default Header;
