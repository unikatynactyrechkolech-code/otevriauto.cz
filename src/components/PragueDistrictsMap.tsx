import SectionHeading from "./SectionHeading";
import PragueMap from "./PragueMap";
import { PRAGUE_ARRIVAL } from "@/lib/locations";

type PragueDistrictsMapProps = {
  /** Slug of the district to highlight, e.g. "praha-5". */
  currentSlug?: string;
};

// Map section for the Prague district pages; the homepage shows the map inside DamageFree.
export default function PragueDistrictsMap({ currentSlug }: PragueDistrictsMapProps) {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          title={`Dojezd ${PRAGUE_ARRIVAL} po celé Praze`}
          description="Najeďte na obvod a uvidíte odhadovaný dojezd z naší základny v Hostivaři. Kliknutím otevřete stránku obvodu."
        />
        <div className="mt-10">
          <PragueMap currentSlug={currentSlug} />
        </div>
      </div>
    </section>
  );
}
