import type { BrandPage } from "@/lib/brand-pages";
import SectionHeading from "../SectionHeading";
import CheckIcon from "../CheckIcon";

type BrandLockTechProps = {
  brand: BrandPage;
};

export default function BrandLockTech({ brand }: BrandLockTechProps) {
  return (
    <section id="sluzby" className="scroll-mt-20 bg-gray-50/70 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          title={`Klíče a zámky u vozů ${brand.name}`}
          description={`Každá značka zamyká trochu jinak. Když vám vůz ${brand.name} nechce odemknout, hodí se vědět tohle.`}
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {brand.lockTech.map((item) => (
            <div
              key={item.title}
              className="rounded-none border-2 border-black bg-white p-6 shadow-hard"
            >
              <h3 className="font-heading text-lg font-bold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink">{item.text}</p>
            </div>
          ))}
        </div>

        <h3 className="mt-14 text-center font-heading text-2xl font-bold text-ink">
          S čím nám nejčastěji volají řidiči vozů {brand.name}
        </h3>
        <ul className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-2">
          {brand.situations.map((situation) => (
            <li
              key={situation}
              className="flex items-center gap-4 rounded-none border-2 border-black bg-white px-6 py-5 text-sm font-semibold text-ink sm:text-base"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-none bg-brand text-black">
                <CheckIcon className="h-3.5 w-3.5" />
              </span>
              {situation}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
