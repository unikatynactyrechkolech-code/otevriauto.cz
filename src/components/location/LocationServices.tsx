import SectionHeading from "../SectionHeading";
import CheckIcon from "../CheckIcon";

const services = [
  "Otevření auta se zabouchnutými klíči",
  "Otevření zamčeného kufru",
  "Otevření auta s vybitou baterií",
  "Rozmrazení a otevření zamrzlého zámku",
  "Otevření vozu při ztracených klíčích",
  "Porucha centrálního zamykání a alarmu",
  "Otevření vozů s bezklíčovým vstupem (keyless)",
  "Otevření dodávek a užitkových vozů",
];

type LocationServicesProps = {
  locative: string;
};

export default function LocationServices({ locative }: LocationServicesProps) {
  return (
    <section id="sluzby" className="scroll-mt-20 bg-gray-50/70 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          title={`Nouzové otevírání aut ${locative}`}
          description="Díky nářadí určenému přímo pro automobilové zámky otevřeme vaše auto bez poškození dveří, těsnění, skel i elektroniky."
        />

        <ul className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <li
              key={service}
              className="flex items-center gap-4 border border-black/5 bg-white px-6 py-5 text-sm font-semibold text-ink sm:text-base"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand text-black">
                <CheckIcon className="h-3.5 w-3.5" />
              </span>
              {service}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
