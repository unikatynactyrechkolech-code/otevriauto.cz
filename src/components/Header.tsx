"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import PhoneIcon from "./PhoneIcon";

const links = [
  { href: "#sluzby", label: "Služby" },
  { href: "#znacky", label: "Značky vozidel" },
  { href: "#postup", label: "Jak to funguje" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2 font-heading text-lg font-bold text-black">
          <span className="h-4 w-1.5 rounded-full bg-brand" />
          otevriauto.cz
        </a>

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

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.phoneHref}
            aria-label={`Zavolat ${siteConfig.phone}`}
            className="flex items-center justify-center gap-2 rounded-full bg-brand p-3 text-sm font-bold text-black shadow-[0_8px_20px_-6px_rgba(242,183,5,0.7)] transition hover:bg-brand-dark sm:px-5 sm:py-2.5"
          >
            <PhoneIcon className="h-4 w-4" />
            <span className="hidden sm:inline">{siteConfig.phone}</span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full border border-black/10 lg:hidden"
            aria-label="Otevřít menu"
            aria-expanded={open}
          >
            <span className={`h-[2px] w-5 bg-black transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-[2px] w-5 bg-black transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-black/5 bg-white px-4 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-semibold text-ink transition hover:bg-gray-50 hover:text-black"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
