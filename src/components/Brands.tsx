import SectionHeading from "./SectionHeading";

const brandGroups = [
  { label: "Německé a evropské", brands: ["BMW", "Mercedes-Benz", "Audi", "Volkswagen", "Škoda"] },
  { label: "Francouzské a americké", brands: ["Ford", "Opel", "Peugeot", "Renault", "Citroën", "Fiat"] },
  { label: "Asijské", brands: ["Toyota", "Nissan", "Mazda", "Hyundai", "Kia", "Honda"] },
  { label: "Ostatní vozidla", brands: ["Dodávky a mikrobusy", "Nákladní vozy", "SUV a karavany"] },
];

export default function Brands() {
  return (
    <section id="znacky" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Otevíráme všechny značky a modely"
          description="Od běžných po prémiové vozy – ať už jde o moderní vůz s bezklíčovým vstupem, nebo starší typ se zámkem, jsme připraveni pomoci 24/7 v centru Prahy."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {brandGroups.map((group) => (
            <div
              key={group.label}
              className="rounded-2xl border border-black/5 bg-gray-50/70 p-6 shadow-sm shadow-black/[0.03]"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-brand-dark">
                {group.label}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.brands.map((brand) => (
                  <span
                    key={brand}
                    className="rounded-full border border-black/5 bg-white px-3 py-1.5 text-sm font-semibold text-ink shadow-sm"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
