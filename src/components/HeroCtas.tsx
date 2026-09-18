import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

type HeroCtasProps = {
  align?: "start" | "center";
  secondary?: { label: string; href: string };
};

export default function HeroCtas({
  align = "start",
  secondary = { label: "Ceník", href: "/cenik" },
}: HeroCtasProps) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
      <a
        href={siteConfig.phoneHref}
        className="rounded-full bg-brand px-7 py-3.5 font-heading text-base font-bold text-black transition hover:bg-brand-dark sm:px-9 sm:py-4 sm:text-lg"
      >
        Zavolat teď
      </a>
      <Link
        href={secondary.href}
        className="rounded-full border-2 border-white px-7 py-3 font-heading text-base font-bold text-white transition hover:bg-white hover:text-black sm:px-9 sm:py-3.5 sm:text-lg"
      >
        {secondary.label}
      </Link>
    </div>
  );
}
