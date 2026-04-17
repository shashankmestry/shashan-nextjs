"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#selected-work", label: "Work" },
  { href: "mailto:shashankmestry@gmail.com", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 md:px-8 pt-4">
      <nav className="mx-auto max-w-6xl rounded-2xl border border-white/10 bg-[#0B0F19]/80 backdrop-blur-xl">
        <div className="flex items-center justify-between px-4 py-3 md:px-6">
          <Link
            href="/"
            className="text-sm md:text-base font-semibold tracking-wide text-white"
            onClick={() => setIsOpen(false)}
          >
            Shashank Mestry
          </Link>

          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname?.startsWith("/work");

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`rounded-lg px-4 py-2 text-sm transition ${
                    isActive
                      ? "bg-white/15 text-white"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <button
            type="button"
            className="md:hidden rounded-lg border border-white/10 px-3 py-2 text-sm text-gray-200 hover:bg-white/10"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            Menu
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-white/10 px-4 pb-4 pt-2">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
