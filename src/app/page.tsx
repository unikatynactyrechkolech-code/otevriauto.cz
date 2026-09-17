import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Situations from "@/components/Situations";
import DamageFree from "@/components/DamageFree";
import Brands from "@/components/Brands";
import HowItWorks from "@/components/HowItWorks";
import WarningBox from "@/components/WarningBox";
import Tips from "@/components/Tips";
import CoverageAreas from "@/components/CoverageAreas";
import CtaBanner from "@/components/CtaBanner";
import ContactForm from "@/components/ContactForm";
import LocationsDirectory from "@/components/LocationsDirectory";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";

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
        <WarningBox />
        <Tips />
        <CoverageAreas />
        <CtaBanner />
        <ContactForm />
        <LocationsDirectory />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
