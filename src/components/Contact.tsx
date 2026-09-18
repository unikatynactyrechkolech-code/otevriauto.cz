import { siteConfig } from "@/lib/site-config";

export default function Contact() {
  const { street, city, postalCode } = siteConfig.address;

  return (
    <section id="kontakt" className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-ink px-6 py-12 text-center text-white sm:py-16">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">Kontakt</h2>
          <p className="mt-2 text-sm text-white">Andrej a Artur Husakovi · autozámečníci, Praha</p>
          <ul className="mt-8 space-y-4 text-base sm:text-lg">
            <li>
              <a
                href={siteConfig.phoneHref}
                className="font-heading text-3xl font-bold text-brand transition hover:text-brand-dark sm:text-4xl"
              >
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="break-all transition hover:text-brand">
                {siteConfig.email}
              </a>
            </li>
            <li>
              {street}, {city}, {postalCode}
            </li>
            <li>IČO: {siteConfig.ico}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
