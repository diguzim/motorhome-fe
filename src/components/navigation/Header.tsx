import React from "react";
import Navigation from "./Navigation";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => (
  <header className="flex items-center justify-between px-8">
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
      <p className="hidden md:block">Fábrica de Motorhomes</p>
    </div>
    <Navigation />
  </header>
);

export default Header;
