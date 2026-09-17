import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { images } from "@/lib/images";
import PhoneIcon from "./PhoneIcon";

export default function Hero() {
  return (
    <section className="relative flex min-h-[88svh] w-full items-end overflow-hidden bg-ink sm:min-h-[92svh]">
      <Image
        src={images.hero}
        alt="Otevírání zámku dveří auta"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/10 to-transparent" />

      <div className="relative w-full px-4 pb-12 pt-32 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-7xl">
          <h1 className="max-w-3xl font-heading text-5xl font-extrabold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            Zamčené auto?
            <br />
            Otevřeme ho hned.
          </h1>

          <p className="mt-6 max-w-xl text-base text-white/70 sm:text-lg">
            Zabouchnuté klíče, vybitá baterie nebo zamrzlý zámek? Vyjíždíme po
            celé Praze i Středočeském kraji – od Starého Města po Josefov,
            Malou Stranu, Hradčany a Nové Město – šetrně, rychle a za předem
            dohodnutou cenu.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={siteConfig.phoneHref}
              className="flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 text-center text-base font-bold text-black shadow-[0_14px_30px_-10px_rgba(242,183,5,0.8)] transition hover:bg-brand-dark"
            >
              <PhoneIcon className="h-4 w-4" />
              Volejte {siteConfig.phone}
            </a>
            <a
              href="#postup"
              className="rounded-full border border-white/30 bg-white/10 px-7 py-4 text-center text-base font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Jak to funguje?
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

