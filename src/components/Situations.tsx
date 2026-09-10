import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { images } from "@/lib/images";

const tiles = [
  {
    image: images.keys,
    title: "Zabouchnuté klíče",
    text: "Klíče zůstaly zamčené uvnitř vozidla.",
  },
  {
    image: images.ignition,
    title: "Vybitá baterie",
    text: "Baterie klíče nebo autobaterie brání otevření dveří.",
  },
  {
    image: images.wheel,
    title: "Zamrzlý zámek",
    text: "Šetrné rozmrazení a otevření během zimního období.",
  },
];

const extra = [
  {
    title: "Ztracené nebo ukradené klíče",
    text: "Přijedeme a vůz otevřeme, i když nemáte po ruce žádný klíč.",
  },
  {
    title: "Porucha centrálního zamykání nebo alarmu",
    text: "Diagnostikujeme problém přímo na místě a vůz zpřístupníme.",
  },
  {
    title: "Klíče uzamčené v kufru",
    text: "Otevřeme i zamčený kufr, aniž bychom poškodili zámek.",
  },
  {
    title: "Mechanicky poškozený zámek dveří",
    text: "Poradíme si i s vadným nebo zaseklým zámkem dveří.",
  },
];

export default function Situations() {
  return (
    <section className="bg-gray-50/70 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Typické situace, kdy pomáháme"
          description="Zkušený zámečník pro oblast Josefov, Hradčany, Malá Strana, Nové Město a Staré Město vám pomůže rychle a bez poškození karoserie nebo zámku."
        />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {tiles.map((tile) => (
            <div
              key={tile.title}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg shadow-black/10"
            >
              <Image
                src={tile.image}
                alt={tile.title}
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-heading text-lg font-bold text-white">{tile.title}</h3>
                <p className="mt-1 text-sm text-white/70">{tile.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-black/5 pt-8">
          <h3 className="font-heading text-xl font-bold text-black">Další důvody</h3>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
            {extra.map((item) => (
              <div key={item.title}>
                <h4 className="font-heading text-base font-bold text-ink">{item.title}</h4>
                <p className="mt-1 text-sm text-ink">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

