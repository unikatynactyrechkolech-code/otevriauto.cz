import Image from "next/image";
import { images } from "@/lib/images";
import HeroCtas from "./HeroCtas";

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

          <div className="mt-8">
            <HeroCtas />
          </div>
        </div>
      </div>
    </section>
  );
}

