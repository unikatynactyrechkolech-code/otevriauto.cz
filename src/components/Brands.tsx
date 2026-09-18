import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { brandGroups } from "@/lib/brands";
import { brandPath, getBrandPageForLabel } from "@/lib/brand-pages";

type BrandsProps = {
  title?: string;
  description?: string;
};

export default function Brands({
  title = "Otevíráme všechny značky a modely",
  description = "Od běžných po prémiové vozy – ať už jde o moderní vůz s bezklíčovým vstupem, nebo starší typ se zámkem, jsme připraveni pomoci 24/7 v centru Prahy.",
}: BrandsProps) {
  return (
    <section id="znacky" className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={title} description={description} />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {brandGroups.map((group) => (
            <div key={group.label} className="rounded-[1.75rem] bg-neutral-100 p-6">
              <p className="font-heading text-xs font-bold uppercase tracking-wider text-ink">{group.label}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.brands.map((brand) => {
                  const page = getBrandPageForLabel(brand);
                  const chipClass =
                    "rounded-full bg-white px-3 py-1.5 text-sm font-bold text-ink transition hover:bg-brand";
                  // Brands with their own page link there; the rest lead to the contact section.
                  return page ? (
                    <Link key={brand} href={brandPath(page)} className={chipClass}>
                      {brand}
                    </Link>
                  ) : (
                    <a key={brand} href="#kontakt" className={chipClass}>
                      {brand}
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
