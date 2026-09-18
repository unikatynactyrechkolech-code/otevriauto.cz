"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";
import PhoneIcon from "./PhoneIcon";

const links = [
  { href: "/#sluzby", label: "Služby" },
  { href: "/#znacky", label: "Značky vozidel" },
  { href: "/#postup", label: "Jak to funguje" },
  { href: "/cenik", label: "Ceník" },
  { href: "/#lokality", label: "Lokality" },
  { href: "/#kontakt", label: "Kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // Lock page scroll behind the full-screen menu and let Escape close it.
  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 font-heading text-lg font-bold text-black"
          >
            <Image src="/logo.png" alt="" width={36} height={36} />
            otevriauto.cz
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-ink transition hover:text-black"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="-mr-2 flex h-11 w-11 flex-col items-center justify-center gap-[6px] lg:hidden"
            aria-label={open ? "Zavřít menu" : "Otevřít menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span className={`h-1 w-7 rounded-full bg-brand transition ${open ? "translate-y-[5px] rotate-45" : ""}`} />
            <span className={`h-1 w-7 rounded-full bg-brand transition ${open ? "-translate-y-[5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </header>

      {/* Full-screen overlay sits under the sticky header (z-50) and above the call button (z-40). */}
      {open ? (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-[45] flex items-center justify-center bg-white px-6 pt-16 lg:hidden"
        >
          {/* Left-aligned column, centred on the screen as a block. */}
          <div className="flex flex-col items-start gap-10">
            <nav className="flex flex-col items-start gap-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-heading text-3xl font-bold text-black transition hover:text-brand-dark"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <a
              href={siteConfig.phoneHref}
              className="flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-lg font-bold text-black transition hover:bg-brand-dark"
            >
              <PhoneIcon className="h-5 w-5" />
              Volejte {siteConfig.phone}
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}
