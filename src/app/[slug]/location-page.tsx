import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Brands from "@/components/Brands";
import HowItWorks from "@/components/HowItWorks";
import WarningBox from "@/components/WarningBox";
import CoverageAreas from "@/components/CoverageAreas";
import CtaBanner from "@/components/CtaBanner";
import Contact from "@/components/Contact";
import LocationsDirectory from "@/components/LocationsDirectory";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import JsonLd from "@/components/JsonLd";
import LocationIntro from "@/components/location/LocationIntro";
import LocationServices from "@/components/location/LocationServices";
import LocationFaq from "@/components/location/LocationFaq";
import NearbyLocations from "@/components/location/NearbyLocations";
import {
  allLocations,
  arrivalWindow,
  getRegion,
  locationPath,
  nearbyLocations,
  type Location,
} from "@/lib/locations";
import { buildLocationFaq } from "@/lib/locations/faq";
import { siteConfig } from "@/lib/site-config";
import { images } from "@/lib/images";

const heroImages = [images.hero, images.nightRoad, images.dashboard, images.wheel, images.keys];

export function locationMetadata(location: Location): Metadata {
  const title = `Autozámečník ${location.name} – otevření auta nonstop`;
  const description = `Autozámečník ${location.locative} nonstop: otevření auta bez poškození, všechny značky. ${location.parts.slice(0, 3).join(", ")} a okolí – příjezd do ${arrivalWindow(location)}. Volejte ${siteConfig.phone}.`;
  const path = locationPath(location);

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, siteName: siteConfig.name, locale: "cs_CZ", type: "website" },
  };
}

export default function LocationPage({ location }: { location: Location }) {
  const region = getRegion(location.region);
  const regionHref = `/#lokality-${region.id}`;
  const arrival = arrivalWindow(location);
  const faq = buildLocationFaq(location, arrival);
  const pageUrl = `${siteConfig.url}${locationPath(location)}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Locksmith",
        name: `${siteConfig.name} – autozámečník ${location.name}`,
        url: pageUrl,
        telephone: siteConfig.phoneHref.replace("tel:", ""),
        email: siteConfig.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.street,
          addressLocality: siteConfig.address.city,
          postalCode: siteConfig.address.postalCode,
          addressCountry: "CZ",
        },
        priceRange: "900–2500 Kč",
        openingHours: "Mo-Su 00:00-23:59",
        areaServed: [location.name, ...location.parts.filter((part) => part !== location.name)].map(
          (name) => ({ "@type": "Place", name }),
        ),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Domů", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: region.name, item: `${siteConfig.url}${regionHref}` },
          { "@type": "ListItem", position: 3, name: `Autozámečník ${location.name}`, item: pageUrl },
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
          title={`Autozámečník ${location.name}`}
          subtitle={`Nonstop otevírání aut bez poškození – příjezd do ${arrival}`}
          breadcrumbs={[
            { label: "Domů", href: "/" },
            { label: region.name, href: regionHref },
          ]}
          arrival={arrival}
          extraStat={{ label: "Značky", value: "Všechny značky aut" }}
          image={heroImages[allLocations.indexOf(location) % heroImages.length]}
          imageAlt={`Autozámečník ${location.name} – nouzové otevření auta`}
        />
        <LocationIntro location={location} />
        <LocationServices name={location.name} locative={location.locative} />
        <Brands
          title={`Otevíráme všechny značky aut – ${location.name}`}
          description={`Od Škody a Volkswagenu přes BMW a Mercedes-Benz až po Teslu nebo Porsche – ${location.locative} otevřeme osobní auta, SUV i dodávky všech značek, včetně vozů s bezklíčovým vstupem.`}
        />
        <HowItWorks title={`Příjezd autozámečníka do ${arrival} – ${location.name}`} arrival={arrival} />
        <WarningBox />
        <CoverageAreas
          title={`Oblasti, které pokrýváme – ${location.name}`}
          description={`Autozámečník ${location.locative} vyjíždí nonstop ve dne, v noci i o svátcích – na ulici, na parkoviště i do podzemních garáží.`}
          areas={location.parts}
        />
        <LocationFaq title={`Časté dotazy – autozámečník ${location.name}`} items={faq} />
        <NearbyLocations name={location.name} locations={nearbyLocations(location)} />
        <CtaBanner />
        <Contact />
        <LocationsDirectory currentSlug={location.slug} />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
