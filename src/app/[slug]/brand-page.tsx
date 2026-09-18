import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Brands from "@/components/Brands";
import HowItWorks from "@/components/HowItWorks";
import WarningBox from "@/components/WarningBox";
import CtaBanner from "@/components/CtaBanner";
import Contact from "@/components/Contact";
import LocationsDirectory from "@/components/LocationsDirectory";
import Footer from "@/components/Footer";
import CallButton from "@/components/CallButton";
import JsonLd from "@/components/JsonLd";
import LocationFaq from "@/components/location/LocationFaq";
import BrandIntro from "@/components/brand/BrandIntro";
import BrandLockTech from "@/components/brand/BrandLockTech";
import { allBrandPages, brandPath, type BrandPage } from "@/lib/brand-pages";
import { PRAGUE_ARRIVAL } from "@/lib/locations";
import { buildBrandFaq } from "@/lib/brand-pages/faq";
import { siteConfig } from "@/lib/site-config";
import { images } from "@/lib/images";


const heroImages = [images.keys, images.hero, images.dashboard, images.nightRoad, images.wheel];

export function brandMetadata(brand: BrandPage): Metadata {
  const title = `Otevření auta ${brand.name} – nonstop autozámečník`;
  const description = `Zabouchnuté klíče v autě ${brand.name}? Otevřeme ${brand.models.slice(0, 3).join(", ")} i další modely bez poškození, nonstop v Praze a okolí. Cena předem, volejte ${siteConfig.phone}.`;
  const path = brandPath(brand);

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, siteName: siteConfig.name, locale: "cs_CZ", type: "website" },
  };
}

export default function BrandPageView({ brand }: { brand: BrandPage }) {
  const faq = buildBrandFaq(brand, PRAGUE_ARRIVAL);
  const pageUrl = `${siteConfig.url}${brandPath(brand)}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: `Otevření auta ${brand.name}`,
        serviceType: "Nouzové otevření vozidla",
        url: pageUrl,
        areaServed: ["Praha", "Praha-západ", "Praha-východ"].map((name) => ({ "@type": "Place", name })),
        provider: {
          "@type": "Locksmith",
          name: siteConfig.name,
          url: siteConfig.url,
          telephone: siteConfig.phoneHref.replace("tel:", ""),
          address: {
            "@type": "PostalAddress",
            streetAddress: siteConfig.address.street,
            addressLocality: siteConfig.address.city,
            postalCode: siteConfig.address.postalCode,
            addressCountry: "CZ",
          },
          priceRange: "900–2500 Kč",
          openingHours: "Mo-Su 00:00-23:59",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Domů", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Značky vozidel", item: `${siteConfig.url}/#znacky` },
          { "@type": "ListItem", position: 3, name: `Otevření auta ${brand.name}`, item: pageUrl },
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
          title={`Otevření auta ${brand.name}`}
          subtitle={`${brand.models.slice(0, 3).join(", ")} i další modely – nonstop a bez poškození`}
          breadcrumbs={[
            { label: "Domů", href: "/" },
            { label: "Značky vozidel", href: "/#znacky" },
          ]}
          arrival={PRAGUE_ARRIVAL}
          extraStat={{ label: "Modely", value: `Všechny modely ${brand.name}` }}
          image={heroImages[allBrandPages.indexOf(brand) % heroImages.length]}
          imageAlt={`Otevření auta ${brand.name} – nouzové otevření vozidla`}
        />
        <BrandIntro brand={brand} />
        <BrandLockTech brand={brand} />
        <HowItWorks title={`Jak probíhá otevření auta ${brand.name}`} arrival={PRAGUE_ARRIVAL} />
        <WarningBox />
        <LocationFaq title={`Časté dotazy – otevření auta ${brand.name}`} items={faq} />
        <Brands
          title="Otevíráme i další značky aut"
          description="Vyberte značku svého vozu – u nejrozšířenějších značek najdete podrobnosti o klíčích, zámcích a nejčastějších modelech."
        />
        <CtaBanner />
        <Contact />
        <LocationsDirectory />
      </main>
      <Footer />
      <CallButton />
    </>
  );
}
