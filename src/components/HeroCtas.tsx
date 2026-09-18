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
    <div className={`flex flex-wrap items-center gap-2 sm:gap-3 ${align === "center" ? "justify-center" : ""}`}>
      <a
        href={siteConfig.phoneHref}
        className="rounded-full bg-brand px-5 py-2.5 font-heading text-sm font-bold text-black transition hover:bg-brand-dark sm:px-6 sm:text-base"
      >
        Zavolat teď
      </a>
      <Link
        href={secondary.href}
        className="rounded-full border-2 border-brand px-5 py-2 font-heading text-sm font-bold text-brand transition hover:bg-brand hover:text-black sm:px-6 sm:text-base"
      >
        {secondary.label}
      </Link>
    </div>
  );
}
