"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#selected-work", label: "Work" },
  { href: "mailto:shashankmestry@gmail.com", label: "Contact" },
] as const;

const SELECTED_WORK_HASH = "#selected-work";

/**
 * Next.js `<Link>` updates the URL with `history.pushState` for same-route navigations.
 * That path often does not emit `hashchange`, so we subscribe to push/replace/pop as well.
 */
function subscribeToLocationHash(callback: () => void) {
  const notify = () => queueMicrotask(callback);

  window.addEventListener("hashchange", notify);
  window.addEventListener("popstate", notify);

  const push = history.pushState.bind(history);
  const replace = history.replaceState.bind(history);

  history.pushState = (...args: Parameters<typeof push>) => {
    const result = push(...args);
    notify();
    return result;
  };
  history.replaceState = (...args: Parameters<typeof replace>) => {
    const result = replace(...args);
    notify();
    return result;
  };

  return () => {
    window.removeEventListener("hashchange", notify);
    window.removeEventListener("popstate", notify);
    history.pushState = push;
    history.replaceState = replace;
  };
}

function getLocationHashSnapshot() {
  return window.location.hash;
}

function getServerLocationHashSnapshot() {
  return "";
}

function useLocationHash() {
  return useSyncExternalStore(
    subscribeToLocationHash,
    getLocationHashSnapshot,
    getServerLocationHashSnapshot
  );
}

function isNavLinkActive(
  href: string,
  pathname: string | null,
  hash: string
): boolean {
  if (href === "/") {
    return pathname === "/" && hash !== SELECTED_WORK_HASH;
  }
  if (href === `/${SELECTED_WORK_HASH}`) {
    return (
      pathname?.startsWith("/work") === true ||
      (pathname === "/" && hash === SELECTED_WORK_HASH)
    );
  }
  if (href.startsWith("mailto:")) {
    return false;
  }
  return false;
}

export default function Navbar() {
  const pathname = usePathname();
  const hash = useLocationHash();
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
              const active = isNavLinkActive(link.href, pathname, hash);

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`rounded-lg px-4 py-2 text-sm transition ${
                    active
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
              {navLinks.map((link) => {
                const active = isNavLinkActive(link.href, pathname, hash);
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`rounded-lg px-3 py-2 text-sm transition ${
                      active
                        ? "bg-white/15 text-white"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
