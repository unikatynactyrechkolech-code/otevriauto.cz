import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { images } from "@/lib/images";
import { PRAGUE_ARRIVAL } from "@/lib/locations";

function buildSteps(arrival: string) {
  return [
    {
      title: "Zavoláte nám",
      text: "Telefonicky nás kontaktujete a uvedete typ vozidla.",
    },
    {
      title: "Upřesníme detaily",
      text: "Doplníme značku, model a rok výroby automobilu.",
    },
    {
      title: "Sdělíme cenu",
      text: "Před výjezdem sdělíme orientační cenu zásahu.",
    },
    {
      title: "Andrej nebo Artur vyrazí",
      text: `Jeden z nich je u vás zpravidla za ${arrival}.`,
    },
    {
      title: "Otevření vozidla",
      text: "Po odsouhlasení ceny provedeme šetrné otevření.",
    },
  ];
}

type HowItWorksProps = {
  title?: string;
  arrival?: string;
};

export default function HowItWorks({
  title = "Jak probíhá otevírání aut krok za krokem",
  arrival = PRAGUE_ARRIVAL,
}: HowItWorksProps) {
  const steps = buildSteps(arrival);

  return (
    <section id="postup" className="scroll-mt-20 bg-gray-50/70 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={title} />

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src={images.process}
                alt="Autozámečník šetrně otevírá zámek dveří auta"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div>
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="flex items-baseline gap-5 border-b border-black/5 py-5 first:pt-0"
              >
                <span className="font-heading text-2xl font-extrabold text-brand shrink-0 sm:text-3xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-heading text-base font-bold text-ink sm:text-lg">{step.title}</h3>
                  <p className="mt-1 text-sm text-ink">{step.text}</p>
                </div>
              </div>
            ))}

            <p className="mt-8 border border-brand/30 bg-brand/10 px-6 py-4 text-sm font-semibold text-ink-soft">
              Cena je vždy dohodnuta před zahájením práce a během zásahu se nemění.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

