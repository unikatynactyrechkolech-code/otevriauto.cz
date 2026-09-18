import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { team } from "@/lib/team";

export default function Team() {
  return (
    <section id="kdo-prijede" className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Kdo vám přijede"
          description="Žádný dispečink ani subdodavatel. Auta v Praze a okolí otevírají dva bratři z Ukrajiny, kteří tu žijí a pracují."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:max-w-4xl">
          {team.map((person) => (
            <article key={person.name} className="border-2 border-black bg-white shadow-hard">
              <div className="relative aspect-[4/3] overflow-hidden border-b-2 border-black bg-ink">
                {person.photo ? (
                  <Image src={person.photo} alt={person.name} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
                ) : (
                  <div className="flex h-full flex-col items-start justify-between p-5">
                    <span className="font-heading text-6xl font-black text-brand sm:text-7xl">{person.initials}</span>
                    <span className="border border-brand px-2 py-1 font-heading text-[11px] font-bold uppercase tracking-wider text-brand">
                      Fotka brzy
                    </span>
                  </div>
                )}
                <div aria-hidden="true" className="hazard absolute inset-x-0 bottom-0 h-2" />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="font-heading text-2xl font-black tracking-tight text-black">{person.name}</h3>
                <p className="mt-1 font-heading text-xs font-bold uppercase tracking-wider text-black">{person.role}</p>
                <p className="mt-3 text-sm text-black sm:text-base">{person.note}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
