import type { BrandPage } from "@/lib/brand-pages";
import SectionHeading from "../SectionHeading";

type BrandIntroProps = {
  brand: BrandPage;
};

export default function BrandIntro({ brand }: BrandIntroProps) {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:items-start lg:px-8">
        <div>
          <SectionHeading title={`Otevření auta ${brand.name} – ${brand.headline}`} />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink">
            {brand.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-6 text-xs text-ink">
            Nejsme autorizovaný servis ani zastoupení značky {brand.name}. Název značky a modelů
            uvádíme pouze pro označení vozů, které otevíráme.
          </p>
        </div>

        <aside className="space-y-4">
          <div className="rounded-none border-2 border-black bg-gray-50/70 p-6">
            <h3 className="font-heading text-lg font-bold text-ink">
              Modely značky {brand.name}, které otevíráme nejčastěji
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {brand.models.map((model) => (
                <li
                  key={model}
                  className="rounded-none border-2 border-black bg-white px-3 py-1.5 text-sm font-semibold text-ink"
                >
                  {model.startsWith(brand.name) ? model : `${brand.name} ${model}`}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-none border border-brand bg-brand/10 p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-black">
              Než zavoláte – tip pro majitele vozů {brand.name}
            </p>
            <p className="mt-2 text-sm font-semibold text-ink">{brand.emergencyTip}</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
