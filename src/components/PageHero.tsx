import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import PhoneIcon from "./PhoneIcon";
import HeroCtas from "./HeroCtas";

type PageHeroProps = {
  title: string;
  subtitle: string;
  /** Links leading to this page; the page itself is appended as the last crumb. */
  breadcrumbs: { label: string; href: string }[];
  arrival: string;
  /** Fourth item of the stats bar, e.g. { label: "Značky", value: "Všechny značky aut" }. */
  extraStat: { label: string; value: string };
  image: string;
  imageAlt: string;
  /** Second hero button; defaults to the price list. */
  secondaryCta?: { label: string; href: string };
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

export default function PageHero({
  title,
  subtitle,
  breadcrumbs,
  arrival,
  extraStat,
  image,
  imageAlt,
  secondaryCta,
}: PageHeroProps) {
  const stats = [
    { icon: ClockIcon, label: "Příjezd", value: arrival },
    { icon: PhoneIcon, label: "Nonstop linka", value: siteConfig.phone },
    { icon: ShieldIcon, label: "Garance", value: "Cena předem" },
    { icon: CarIcon, ...extraStat },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-ink">
        <Image
          src={image}
          alt={imageAlt}
          fill
          preload
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />

        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 pb-16 pt-14 text-center sm:px-6 sm:pb-20 sm:pt-20 lg:px-8">
          <nav aria-label="Drobečková navigace">
            <ol className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-white">
              {breadcrumbs.map((crumb) => (
                <Fragment key={crumb.href}>
                  <li>
                    <Link href={crumb.href} className="transition hover:text-white">
                      {crumb.label}
                    </Link>
                  </li>
                  <li aria-hidden="true">›</li>
                </Fragment>
              ))}
              <li aria-current="page" className="font-semibold text-brand">
                {title}
              </li>
            </ol>
          </nav>

          <h1 className="mt-6 font-heading text-4xl font-extrabold uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white sm:text-lg">{subtitle}</p>

          <div className="mt-8">
            <HeroCtas align="center" secondary={secondaryCta} />
          </div>
        </div>
      </section>

      <section className="bg-black">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 gap-y-6 px-4 py-7 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-3 lg:justify-center">
              <Icon className="h-7 w-7 shrink-0 text-brand" />
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-white">{label}</p>
                <p className="text-sm font-bold text-white sm:text-base">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
