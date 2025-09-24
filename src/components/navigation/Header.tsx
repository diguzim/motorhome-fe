import React from "react";
import Navbar from "./Navbar";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => (
  <header className="flex items-center justify-between px-8 py-4 border-b border-gray-200">
    <Link href="/" className="inline-block" aria-label="Ir para página inicial">
      <Image
        src="/logo.png"
        alt="Logo Motorhome"
        width={140}
        height={112}
        className="h-14 w-auto"
        priority
      />
    </Link>
    <Navbar />
  </header>
);

export default Header;
