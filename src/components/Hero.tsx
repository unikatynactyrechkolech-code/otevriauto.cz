import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { images } from "@/lib/images";
import HazardStripe from "./HazardStripe";

export default function Hero() {
  return (
    <section className="relative flex min-h-[88svh] w-full items-end overflow-hidden bg-ink sm:min-h-[92svh]">
      <Image
        src={images.hero}
        alt="Otevírání zámku dveří auta"
        fill
        preload
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />

      <div className="relative w-full px-4 pb-24 pt-32 sm:px-6 sm:pb-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="inline-flex items-center gap-3 border-2 border-brand px-3 py-1.5 font-heading text-xs font-bold uppercase tracking-wider text-brand">
            <span className="h-2 w-2 bg-brand" aria-hidden="true" />
            Nonstop 24/7 · Praha a Středočeský kraj
          </p>

          <h1 className="mt-6 max-w-4xl font-heading text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Zamčené auto?
            <br />
            Otevřeme ho hned.
          </h1>

          <a
            href={siteConfig.phoneHref}
            className="mt-8 block w-fit font-heading text-[2.75rem] font-black leading-none tracking-tight text-brand transition hover:text-white sm:text-7xl lg:text-8xl"
          >
            {siteConfig.phone}
          </a>

          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white sm:text-base">
            <span>Volejte kdykoli – cenu se dozvíte předem.</span>
            <Link href="/cenik" className="font-heading font-bold uppercase tracking-wider text-brand underline-offset-4 hover:underline">
              Ceník →
            </Link>
          </div>
        </div>
      </div>

      <HazardStripe className="absolute inset-x-0 bottom-0 h-3" />
    </section>
  );
}
