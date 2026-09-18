import { siteConfig } from "@/lib/site-config";
import LiveStatus from "./LiveStatus";

// Floating call panel in the bottom-right corner: hazard stripe, live status and the number itself.
export default function CallButton() {
  return (
    <a
      href={siteConfig.phoneHref}
      aria-label={`Zavolat ${siteConfig.phone}`}
      className="fixed bottom-4 right-4 z-40 block border-2 border-brand bg-ink text-white shadow-hard-brand transition hover:bg-black sm:bottom-6 sm:right-6"
    >
      <div aria-hidden="true" className="hazard h-2" />
      <div className="px-3 py-2 sm:px-5 sm:py-3">
        <LiveStatus tone="dark" className="text-[10px] sm:text-xs" />
        <span className="mt-0.5 block font-heading text-lg font-black leading-none tracking-tight text-brand sm:mt-1 sm:text-2xl">
          {siteConfig.phone}
        </span>
      </div>
    </a>
  );
}
