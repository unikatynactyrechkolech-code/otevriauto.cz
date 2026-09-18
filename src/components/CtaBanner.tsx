import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { images } from "@/lib/images";
import PhoneIcon from "./PhoneIcon";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <Image
        src={images.callNonstop}
        alt="Řidič volá nonstop autozámečníka u zaparkovaného auta"
        fill
        sizes="100vw"
        className="object-cover object-[50%_30%]"
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-4xl font-extrabold text-white sm:text-5xl">
          Jsme k dispozici 24/7 pro nouzové otevření vozidla
        </h2>

        <a
          href={siteConfig.phoneHref}
          className="mt-2 flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-bold text-black transition hover:bg-brand-dark"
        >
          <PhoneIcon className="h-4 w-4" />
          Volejte {siteConfig.phone}
        </a>
      </div>
    </section>
  );
}

