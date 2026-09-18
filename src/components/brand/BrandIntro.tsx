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
          <p className="mt-6 text-xs text-ink/60">
            Nejsme autorizovaný servis ani zastoupení značky {brand.name}. Název značky a modelů
            uvádíme pouze pro označení vozů, které otevíráme.
          </p>
        </div>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-black/5 bg-gray-50/70 p-6 shadow-sm shadow-black/[0.03]">
            <h3 className="font-heading text-lg font-bold text-ink">
              Modely značky {brand.name}, které otevíráme nejčastěji
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {brand.models.map((model) => (
                <li
                  key={model}
                  className="rounded-full border border-black/5 bg-white px-3 py-1.5 text-sm font-semibold text-ink shadow-sm"
                >
                  {model.startsWith(brand.name) ? model : `${brand.name} ${model}`}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-brand/30 bg-brand/10 p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-dark">
              Než zavoláte – tip pro majitele vozů {brand.name}
            </p>
            <p className="mt-2 text-sm font-semibold text-ink">{brand.emergencyTip}</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
