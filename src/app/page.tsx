import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Situations from "@/components/Situations";
import DamageFree from "@/components/DamageFree";
import Brands from "@/components/Brands";
import HowItWorks from "@/components/HowItWorks";
import PricingPreview from "@/components/PricingPreview";
import WarningBox from "@/components/WarningBox";
import Tips from "@/components/Tips";
import CoverageAreas from "@/components/CoverageAreas";
import PragueDistrictsMap from "@/components/PragueDistrictsMap";
import CtaBanner from "@/components/CtaBanner";
import Contact from "@/components/Contact";
import LocationsDirectory from "@/components/LocationsDirectory";
import Footer from "@/components/Footer";
import CallButton from "@/components/CallButton";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Situations />
        <DamageFree />
        <Brands />
        <HowItWorks />
        <PricingPreview />
        <WarningBox />
        <Tips />
        <PragueDistrictsMap />
        <CoverageAreas />
        <CtaBanner />
        <Contact />
        <LocationsDirectory />
      </main>
      <Footer />
      <CallButton />
    </>
  );
}
