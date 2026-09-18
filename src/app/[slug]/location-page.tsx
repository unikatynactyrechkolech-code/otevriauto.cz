import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Brands from "@/components/Brands";
import HowItWorks from "@/components/HowItWorks";
import Team from "@/components/Team";
import WarningBox from "@/components/WarningBox";
import CoverageAreas from "@/components/CoverageAreas";
import PragueDistrictsMap from "@/components/PragueDistrictsMap";
import CtaBanner from "@/components/CtaBanner";
import Contact from "@/components/Contact";
import LocationsDirectory from "@/components/LocationsDirectory";
import Footer from "@/components/Footer";
import CallButton from "@/components/CallButton";
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
  relatedLocations,
  type Location,
} from "@/lib/locations";
import { buildLocationFaq } from "@/lib/locations/faq";
import { siteConfig } from "@/lib/site-config";
import { capitalize } from "@/lib/text";
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
        <LocationServices locative={location.locative} />
        <Brands
          title={`${capitalize(location.locative)} otevřeme auto jakékoli značky`}
          description="Od Škody a Volkswagenu přes BMW a Mercedes-Benz až po Teslu nebo Porsche – otevíráme osobní auta, SUV i dodávky, včetně vozů s bezklíčovým přístupem."
        />
        <HowItWorks title={`U auta ${location.locative} jsme za ${arrival}`} arrival={arrival} />
        <Team />
        <WarningBox />
        <CoverageAreas
          title={`Kam všude ${location.locative} jezdíme`}
          description="Vyjíždíme nonstop ve dne, v noci i o svátcích – k autu na ulici, na parkovišti i v podzemní garáži."
          areas={location.parts}
        />
        {location.region === "praha" ? <PragueDistrictsMap currentSlug={location.slug} /> : null}
        <LocationFaq title={`Časté dotazy k otevírání aut ${location.locative}`} items={faq} />
        <NearbyLocations
          title="Další lokality, kam jezdíme"
          description="Nejbližší okolí a výběr dalších míst v Praze a Středočeském kraji"
          locations={relatedLocations(location.slug, location)}
        />
        <CtaBanner />
        <Contact />
        <LocationsDirectory currentSlug={location.slug} />
      </main>
      <Footer />
      <CallButton />
    </>
  );
}
