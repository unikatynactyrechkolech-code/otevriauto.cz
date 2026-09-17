import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Brands from "@/components/Brands";
import HowItWorks from "@/components/HowItWorks";
import WarningBox from "@/components/WarningBox";
import CoverageAreas from "@/components/CoverageAreas";
import CtaBanner from "@/components/CtaBanner";
import ContactForm from "@/components/ContactForm";
import LocationsDirectory from "@/components/LocationsDirectory";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import LocationHero from "@/components/location/LocationHero";
import LocationIntro from "@/components/location/LocationIntro";
import LocationServices from "@/components/location/LocationServices";
import LocationFaq from "@/components/location/LocationFaq";
import NearbyLocations from "@/components/location/NearbyLocations";
import {
  allLocations,
  arrivalWindow,
  getLocationByRouteSlug,
  getRegion,
  locationPath,
  locationRouteSlug,
  nearbyLocations,
} from "@/lib/locations";
import { buildLocationFaq } from "@/lib/locations/faq";
import { siteConfig } from "@/lib/site-config";
import { images } from "@/lib/images";

// Only the locations below exist; any other single-segment URL is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return allLocations.map((location) => ({ slug: locationRouteSlug(location) }));
}

const heroImages = [images.hero, images.nightRoad, images.dashboard, images.wheel, images.keys];

export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationByRouteSlug(slug);
  if (!location) return {};

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

export default async function LocationPage({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;
  const location = getLocationByRouteSlug(slug);
  if (!location) notFound();

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Header />
      <main className="flex-1">
        <LocationHero
          name={location.name}
          regionName={region.name}
          regionHref={regionHref}
          arrival={arrival}
          image={heroImages[allLocations.indexOf(location) % heroImages.length]}
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
        <LocationFaq name={location.name} items={faq} />
        <NearbyLocations name={location.name} locations={nearbyLocations(location)} />
        <CtaBanner />
        <ContactForm />
        <LocationsDirectory currentSlug={location.slug} />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
