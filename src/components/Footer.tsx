import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const quickLinks = [
  { href: "/#sluzby", label: "Služby" },
  { href: "/#znacky", label: "Značky vozidel" },
  { href: "/#postup", label: "Jak to funguje" },
  { href: "/#lokality", label: "Lokality" },
];

const usefulLinks = [
  { href: "/#kontakt", label: "Kontakt" },
  { href: "/cenik", label: "Ceník služeb" },
  { href: "#", label: "Časté dotazy" },
  { href: "#", label: "Ochrana osobních údajů" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2 font-heading text-lg font-bold text-white">
              <Image src="/logo-auto-klic.png" alt="" width={52} height={24} unoptimized />
              otevriauto.cz
            </Link>
            <p className="mt-4 max-w-xs text-sm text-white">
              Nouzové otevírání aut v Praze a Středočeském kraji – nonstop,
              šetrně a bez poškození vozidla.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
              Rychlé odkazy
            </h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white transition hover:text-brand">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
              Užitečné odkazy
            </h3>
            <ul className="mt-4 space-y-2.5">
              {usefulLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white transition hover:text-brand">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
              Kontakt
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white">
              <li>
                <a href={siteConfig.phoneHref} className="transition hover:text-brand">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="break-all transition hover:text-brand">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.postalCode}
              </li>
              <li>IČO: {siteConfig.ico}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 border-t border-white/10 pt-6 text-xs text-white sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Všechna práva vyhrazena.</p>
          <p>
            Stránky vytvořil{" "}
            <a href="https://webpojede.cz" className="font-bold text-brand transition hover:text-brand-dark">
              webpojede.cz
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
