import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { images } from "@/lib/images";
import PhoneIcon from "./PhoneIcon";

export default function WarningBox() {
  return (
    <section className="py-4 sm:py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden ">
          <Image
            src={images.nightRoad}
            alt="Cesta za soumraku"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />

          <div className="relative grid gap-6 p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h3 className="font-heading text-xl font-bold text-white sm:text-2xl">
                Proč nezkoušet otevřít auto svépomocí?
              </h3>
              <p className="mt-2 max-w-2xl text-sm text-white sm:text-base">
                Pokusy o otevření auta bez potřebných zkušeností často vedou k
                poškození klik, gumových těsnění nebo dokonce k prasknutí skla.
                Oprava takových škod může stát několikanásobně více než
                profesionální otevření od nás.
              </p>
            </div>

            <a
              href={siteConfig.phoneHref}
              className="flex shrink-0 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/20"
            >
              <PhoneIcon className="h-4 w-4" />
              Zavolejte nám radši
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

