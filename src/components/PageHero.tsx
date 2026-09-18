import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

type PageHeroProps = {
  title: string;
  /** Links leading to this page; the page itself is appended as the last crumb. */
  breadcrumbs: { label: string; href: string }[];
  arrival: string;
  /** Fourth item of the stats bar, e.g. { label: "Značky", value: "Všechny značky aut" }. */
  extraStat: { label: string; value: string };
  image: string;
  imageAlt: string;
};

export default function PageHero({ title, breadcrumbs, arrival, extraStat, image, imageAlt }: PageHeroProps) {
  const stats = [
    { label: "Příjezd", value: arrival },
    { label: "Nonstop linka", value: siteConfig.phone },
    { label: "Garance", value: "Cena předem" },
    extraStat,
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

        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 pb-14 pt-12 text-center sm:px-6 sm:pb-20 sm:pt-16 lg:px-8">
          <nav aria-label="Drobečková navigace">
            <ol className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-white">
              {breadcrumbs.map((crumb) => (
                <Fragment key={crumb.href}>
                  <li>
                    <Link href={crumb.href} className="transition hover:text-brand">
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
        </div>
      </section>

      <section className="bg-black">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 gap-y-5 px-4 py-6 text-center sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map(({ label, value }) => (
            <div key={label}>
              <dt className="text-[11px] font-bold uppercase tracking-wider text-white">{label}</dt>
              <dd className="mt-1 text-sm font-bold text-white sm:text-base">{value}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
