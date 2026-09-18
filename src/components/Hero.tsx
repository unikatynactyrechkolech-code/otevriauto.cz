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

          <div className="mt-8 flex flex-wrap items-center gap-2 sm:gap-3">
            <a
              href={siteConfig.phoneHref}
              className="flex items-center gap-1.5 whitespace-nowrap rounded-full bg-brand px-4 py-3 text-[13px] font-bold text-black shadow-[0_14px_30px_-10px_rgba(242,183,5,0.8)] transition hover:bg-brand-dark sm:gap-2 sm:px-6 sm:text-base"
            >
              <PhoneIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Volejte {siteConfig.phone}
            </a>
            <a
              href="#postup"
              className="whitespace-nowrap rounded-full border border-white/30 bg-white/10 px-4 py-3 text-[13px] font-bold text-white backdrop-blur-sm transition hover:bg-white/20 sm:px-6 sm:text-base"
            >
              Jak to funguje?
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

