"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLink {
  href: string;
  label: string;
}

const links: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/recipes", label: "Recipes" },
  { href: "/collections/drinks", label: "Drinks" },
  { href: "/guide", label: "Guide" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between flex-wrap gap-3 border-b border-border px-6 py-5">
      <Link href="/" className="font-display text-xl font-semibold text-accent">
        Dhaba Diaries
      </Link>
      <div className="flex gap-5 flex-wrap">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm py-1 border-b ${
                isActive ? "text-accent border-accent" : "text-muted border-transparent"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}