import SectionHeading from "./SectionHeading";
import { siteConfig } from "@/lib/site-config";

type CoverageAreasProps = {
  title?: string;
  description?: string;
  areas?: string[];
};

export default function CoverageAreas({
  title = "Otevírání aut Praha i Středočeský kraj – nonstop i o víkendu",
  description = "Služba otevírání aut je k dispozici nonstop v celé Praze i Středočeském kraji. Jsme připraveni i v náročných podmínkách – podzemní parkoviště, zamrzlé zámky a podobně.",
  areas = siteConfig.areas,
}: CoverageAreasProps) {
  return (
    <section className="bg-gray-50/70 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <SectionHeading title={title} description={description} />

          <div className="flex flex-wrap gap-3">
            {areas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-black/5 bg-white px-4 py-2.5 text-sm font-bold text-ink shadow-sm shadow-black/[0.03]"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
