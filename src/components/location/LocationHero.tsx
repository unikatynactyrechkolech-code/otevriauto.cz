import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import PhoneIcon from "../PhoneIcon";

type LocationHeroProps = {
  name: string;
  regionName: string;
  regionHref: string;
  arrival: string;
  image: string;
};

function ClockIcon({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 10.4 3.2 3.2-1.4 1.4-3.8-3.8V6h2v6.4Z" />
    </svg>
  );
}

function ShieldIcon({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3Zm-1.2 14.2-3.5-3.5 1.4-1.4 2.1 2.1 4.6-4.6 1.4 1.4-6 6Z" />
    </svg>
  );
}

function CarIcon({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.9 5.8A1.5 1.5 0 0 0 17.5 5h-11c-.7 0-1.2.4-1.4 1L3 12v8a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h12v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-8l-2.1-6.2ZM6.5 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm11 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM5 11l1.5-4.5h11L19 11H5Z" />
    </svg>
  );
}

export default function LocationHero({ name, regionName, regionHref, arrival, image }: LocationHeroProps) {
  const stats = [
    { icon: ClockIcon, label: "Příjezd", value: arrival },
    { icon: PhoneIcon, label: "Nonstop linka", value: siteConfig.phone },
    { icon: ShieldIcon, label: "Garance", value: "Cena předem" },
    { icon: CarIcon, label: "Značky", value: "Všechny značky aut" },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-ink">
        <Image
          src={image}
          alt={`Autozámečník ${name} – nouzové otevření auta`}
          fill
          preload
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />

        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 pb-16 pt-14 text-center sm:px-6 sm:pb-20 sm:pt-20 lg:px-8">
          <nav aria-label="Drobečková navigace">
            <ol className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-white/60">
              <li>
                <Link href="/" className="transition hover:text-white">
                  Domů
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li>
                <Link href={regionHref} className="transition hover:text-white">
                  {regionName}
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li aria-current="page" className="font-semibold text-brand">
                Autozámečník {name}
              </li>
            </ol>
          </nav>

          <h1 className="mt-6 font-heading text-4xl font-extrabold uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
            Autozámečník {name}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/75 sm:text-lg">
            Nonstop otevírání aut bez poškození – příjezd do {arrival}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
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
      </section>

      <section className="bg-black">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 gap-y-6 px-4 py-7 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-3 lg:justify-center">
              <Icon className="h-7 w-7 shrink-0 text-brand" />
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-white/60">{label}</p>
                <p className="text-sm font-bold text-white sm:text-base">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
