import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import PriceTable from "@/components/PriceTable";
import HowItWorks from "@/components/HowItWorks";
import Team from "@/components/Team";
import CtaBanner from "@/components/CtaBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CallButton from "@/components/CallButton";
import JsonLd from "@/components/JsonLd";
import LocationFaq from "@/components/location/LocationFaq";
import NearbyLocations from "@/components/location/NearbyLocations";
import { travelAndPayment } from "@/lib/pricing";
import { PRAGUE_ARRIVAL, relatedLocations } from "@/lib/locations";
import { siteConfig } from "@/lib/site-config";
import { images } from "@/lib/images";

const title = "Ceník otevírání aut – Praha a Středočeský kraj";
const description = `Ceník otevření auta bez poškození: 900 až 2 500 Kč podle roku výroby a zabezpečení vozu. Výjezd po Praze 700 Kč, platba hotově i kartou. Nonstop, volejte ${siteConfig.phone}.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/cenik" },
  openGraph: { title, description, url: "/cenik", siteName: siteConfig.name, locale: "cs_CZ", type: "website" },
};

const faq = [
  {
    question: "Na čem závisí cena otevření auta?",
    answer:
      "Hlavně na roku výroby vozu a na tom, zda má speciální zabezpečení nebo pojistku SAFE. Otevření auta do roku 2000 stojí 900 Kč, u novějších a lépe zabezpečených vozů se cena pohybuje od 1 200 do 2 500 Kč.",
  },
  {
    question: "Kolik stojí výjezd technika?",
    answer:
      "Provozní režie za výjezd po Praze je 700 Kč. Mimo Prahu je to 200–900 Kč podle vzdálenosti v kilometrech.",
  },
  {
    question: "Můžu platit kartou?",
    answer: "Ano, přijímáme hotovost i platební karty a ke každé zakázce vystavíme řádný doklad.",
  },
  {
    question: "Může se cena během zásahu změnit?",
    answer: "Ne. Přesnou cenu znáte vždy před zahájením práce a během zásahu se nemění.",
  },
];

export default function PricingPage() {
  const pageUrl = `${siteConfig.url}/cenik`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Domů", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Ceník", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Header />
      <main className="flex-1">
        <PageHero
          title="Ceník"
          breadcrumbs={[{ label: "Domů", href: "/" }]}
          arrival={PRAGUE_ARRIVAL}
          extraStat={{ label: "Výjezd Praha", value: "700 Kč" }}
          image={images.dashboard}
          imageAlt="Ceník otevírání aut"
        />

        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              align="center"
              title="Ceník otevírání aut"
              description="Cena závisí na roku výroby a na tom, zda má vůz speciální zabezpečení nebo pojistku SAFE."
            />
            <div className="mt-10">
              <PriceTable />
            </div>
          </div>
        </section>

        <section className="bg-gray-50/70 py-16 sm:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <SectionHeading align="center" title="Výjezd zámečníka – příplatky a způsoby platby" />
            <div className="mt-10 grid grid-cols-2 gap-2 sm:gap-4 lg:grid-cols-4">
              {travelAndPayment.map((item) => (
                <div
                  key={item.title}
                  className="border border-black/5 bg-white p-4 text-center sm:p-6"
                >
                  <h3 className="font-heading text-base font-bold text-black sm:text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm text-black">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <LocationFaq title="Časté dotazy k cenám" items={faq} />
        <HowItWorks />
        <Team />
        <NearbyLocations
          title="Kam jezdíme"
          description="Výběr lokalit v Praze a Středočeském kraji, kde auta otevíráme za stejné ceny"
          locations={relatedLocations("cenik")}
        />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <CallButton />
    </>
  );
}
