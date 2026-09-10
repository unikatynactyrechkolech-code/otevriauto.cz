import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { images } from "@/lib/images";

const vehicleTypes = [
  "Osobní automobily všech značek",
  "Užitkové a dodávkové vozy",
  "Vozidla s mechanickým i elektronickým zamykáním",
  "Starší i moderní vozy s imobilizérem",
];

export default function DamageFree() {
  return (
    <section id="sluzby" className="py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <SectionHeading
            title="Otevření auta bez poškození"
            description="Používáme speciální nástroje a postupy určené přímo pro automobilové zámky. Díky tomu dokážeme otevřít vozidlo bez poškození dveří, těsnění, oken nebo elektroniky."
          />

          <ul className="mt-8 space-y-3">
            {vehicleTypes.map((type) => (
              <li
                key={type}
                className="flex items-baseline gap-3 border-b border-black/5 pb-3 text-sm font-semibold text-ink"
              >
                <span className="text-brand-dark">—</span>
                {type}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-xl shadow-black/10 sm:aspect-[4/3]">
          <Image
            src={images.toolClose}
            alt="Šetrné otevření zámku vozidla odborným nástrojem"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />

          <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-3 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-md">
            <div>
              <p className="font-heading text-lg font-bold text-white">Dojezd do 30 min</p>
              <p className="text-xs text-white/70">i v náročných podmínkách</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

