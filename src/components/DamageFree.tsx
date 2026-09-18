import SectionHeading from "./SectionHeading";
import PragueMap from "./PragueMap";

const vehicleTypes = [
  "Osobní automobily všech značek",
  "Užitkové a dodávkové vozy",
  "Vozidla s mechanickým i elektronickým zamykáním",
  "Starší i moderní vozy s imobilizérem",
];

export default function DamageFree() {
  return (
    <section id="sluzby" className="scroll-mt-20 py-16 sm:py-24">
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
                className="flex items-baseline gap-3 border-b border-black pb-3 text-sm font-semibold text-ink"
              >
                <span className="text-black">—</span>
                {type}
              </li>
            ))}
          </ul>
        </div>

        <PragueMap />
      </div>
    </section>
  );
}

