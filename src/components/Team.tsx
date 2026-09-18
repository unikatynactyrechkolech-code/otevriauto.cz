import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { team } from "@/lib/team";

export default function Team() {
  return (
    <section id="kdo-prijede" className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Kdo vám přijede"
          description="Jsme rodinná firma bez dispečinku a subdodavatelů. K vašemu autu přijede Andrej Husak nebo jeho syn Artur."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:max-w-4xl">
          {team.map((person) => (
            <article key={person.name} className="border border-black/10 bg-white">
              <div className="relative aspect-[4/5] bg-neutral-100">
                <Image
                  src={person.photo}
                  alt={`${person.name} – ${person.role}`}
                  fill
                  sizes="(min-width: 1024px) 28rem, (min-width: 640px) 50vw, 100vw"
                  className="object-contain object-bottom"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="font-heading text-2xl font-bold text-ink">{person.name}</h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-ink">{person.role}</p>
                <p className="mt-3 text-sm text-ink sm:text-base">{person.note}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
