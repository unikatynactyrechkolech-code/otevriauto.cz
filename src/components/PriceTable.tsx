import { priceList } from "@/lib/pricing";

export default function PriceTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-black/10 bg-white">
      <h3 className="bg-ink px-4 py-4 font-heading text-lg font-bold text-white sm:px-6">
        Otevírání aut / automobilů
      </h3>
      <div className="flex justify-between bg-gray-50 px-4 py-3 text-xs font-bold uppercase tracking-wider text-black sm:px-6">
        <span>Služba</span>
        <span>Cena</span>
      </div>
      <ul>
        {priceList.map((row) => (
          <li
            key={row.service}
            className="flex items-center justify-between gap-4 border-t border-black/10 px-4 py-4 text-sm text-black sm:px-6 sm:text-base"
          >
            <span>{row.service}</span>
            <span className="shrink-0 whitespace-nowrap font-heading font-bold">{row.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
