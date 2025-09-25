import React from "react";
import Navigation from "./navigation";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => (
  <header className="flex items-center justify-between px-8 py-4 bg-black text-white">
    <div className="flex items-center gap-6">
      <Link
        href="/"
        className="inline-block transition-transform hover:scale-105 duration-300"
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
      <div className="hidden md:block">
        <p className="text-white font-medium text-lg tracking-wide">
          Fábrica de Motorhomes
        </p>
        <p className="text-gray-400 text-sm font-normal tracking-wider uppercase">
          Sua casa sobre rodas
        </p>
      </div>
    </div>
    <Navigation />
  </header>
);

export default Header;
