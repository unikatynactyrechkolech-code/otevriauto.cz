import Link from "next/link";
import SectionHeading from "./SectionHeading";
import PriceTable from "./PriceTable";
import { travelAndPayment } from "@/lib/pricing";

export default function PricingPreview() {
  const travel = travelAndPayment[0];

  return (
    <section id="cenik" className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          title="Ceník otevírání aut"
          description="Cena závisí na roku výroby a zabezpečení vozu. Přesnou částku vám řekneme předem do telefonu."
        />
        <div className="mt-10">
          <PriceTable />
        </div>
        <p className="mt-4 text-center text-sm text-black">
          <strong>{travel.title}:</strong> {travel.text}
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/cenik"
            className="rounded-full bg-brand px-7 py-3.5 text-base font-bold text-black transition hover:bg-brand-dark"
          >
            Zobrazit celý ceník
          </Link>
        </div>
      </div>
    </section>
  );
}
