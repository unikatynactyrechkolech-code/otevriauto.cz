import SectionHeading from "./SectionHeading";

const tips = [
  "Mějte vždy rezervní klíč u příbuzného nebo doma.",
  "Udržujte baterii klíče v dobrém stavu.",
  "Nezamykejte dveře při krátkém vystoupení, zvlášť u starších aut.",
];

export default function Tips() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Doporučení našich zámečníků" />

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {tips.map((tip, index) => (
            <div key={tip} className="border-t-2 border-ink pt-4">
              <span className="font-heading text-sm font-bold text-brand-dark">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 text-sm font-semibold text-ink">{tip}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
