import { siteConfig } from "@/lib/site-config";

// Floating call button in the bottom-right corner, with a pulsing glow and a ringing handset.
export default function CallButton() {
  return (
    <a
      href={siteConfig.phoneHref}
      aria-label={`Zavolat ${siteConfig.phone}`}
      className="fixed bottom-4 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-brand text-black shadow-[0_0_28px_rgba(242,183,5,0.75)] transition hover:bg-brand-dark sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
    >
      <span className="absolute inset-0 rounded-full bg-brand opacity-60 motion-safe:animate-ping" aria-hidden="true" />
      <svg viewBox="0 0 24 24" fill="currentColor" className="relative h-6 w-6 motion-safe:animate-ring sm:h-7 sm:w-7" aria-hidden="true">
        <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
      </svg>
    </a>
  );
}
