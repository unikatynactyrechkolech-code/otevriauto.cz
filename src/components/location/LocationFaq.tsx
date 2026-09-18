import type { FaqItem } from "@/lib/locations/faq";
import SectionHeading from "../SectionHeading";

type LocationFaqProps = {
  title: string;
  items: FaqItem[];
};

export default function LocationFaq({ title, items }: LocationFaqProps) {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading align="center" title={title} />

        <div className="mt-10 space-y-3">
          {items.map((item, index) => (
            <details
              key={item.question}
              open={index === 0}
              className="group rounded-none border-2 border-black bg-gray-50/70 px-6 py-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base font-bold text-ink [&::-webkit-details-marker]:hidden">
                {item.question}
                <span className="text-xl text-black transition group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
