"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type NavItemProps = {
  label: string;
  href: string;
};

const NavItem: React.FC<NavItemProps> = ({ label, href }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li>
      <Link
        href={href}
        aria-current={isActive ? "page" : undefined}
        className={isActive ? "active" : ""}
      >
        {label}
      </Link>
      <style jsx>{`
        .active {
          font-weight: bold;
          text-decoration: underline;
        }
      `}</style>
    </li>
  );
};

export default NavItem;
