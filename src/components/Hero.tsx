import Image from "next/image";
import { images } from "@/lib/images";
import HeroCtas from "./HeroCtas";

export default function Hero() {
  return (
    <section className="relative flex min-h-[88svh] w-full items-center justify-center overflow-hidden bg-ink sm:min-h-[92svh]">
      <Image
        src={images.hero}
        alt="Otevírání zámku dveří auta"
        fill
        preload
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative w-full px-4 py-24 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-heading text-5xl font-extrabold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            Zamčené auto?
            <br />
            Otevřeme ho hned.
          </h1>

          <div className="mt-6">
            <HeroCtas align="center" />
          </div>
        </div>
      </div>
    </section>
  );
}

