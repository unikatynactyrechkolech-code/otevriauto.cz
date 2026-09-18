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
  { href: "#", label: "Ceník služeb" },
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
              <span className="h-4 w-1.5 rounded-full bg-brand" />
              otevriauto.cz
            </Link>
            <p className="mt-4 max-w-xs text-sm text-white">
              Nouzové otevírání aut v Praze 1 – nonstop, šetrně a bez poškození
              vozidla. Spolehněte se na odborníky s praxí.
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
              <li>{siteConfig.phone}</li>
              <li>{siteConfig.email}</li>
              <li>Praha a Středočeský kraj</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 border-t border-white/10 pt-6 text-xs text-white sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Všechna práva vyhrazena.</p>
          <p>Nouzové otevírání aut v Praze a Středočeském kraji · nonstop 24/7</p>
        </div>
      </div>
    </footer>
  );
}
