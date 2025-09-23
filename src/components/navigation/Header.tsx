import React from "react";
import Navbar from "./Navbar";
import Link from "next/link";

const Header: React.FC = () => (
  <header
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "1rem 2rem",
      borderBottom: "1px solid #eee",
    }}
  >
    <div>
      <Link
        href="/"
        style={{
          fontWeight: "bold",
          fontSize: "1.5rem",
          textDecoration: "none",
        }}
      >
        Motorhome
      </Link>
    </div>
    <Navbar />
  </header>
);

export default Header;
