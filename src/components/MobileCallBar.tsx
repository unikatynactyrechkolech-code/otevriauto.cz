"use client";

import { siteConfig } from "@/lib/site-config";
import PhoneIcon from "./PhoneIcon";

export default function MobileCallBar() {
  return (
    <a
      href={siteConfig.phoneHref}
      className="fixed bottom-3 right-3 z-40 flex items-center justify-center gap-1.5 rounded-full bg-brand px-4 py-2.5 text-xs font-bold text-black lg:hidden"
    >
      <PhoneIcon className="h-3.5 w-3.5" />
      Zavolat {siteConfig.phone}
    </a>
  );
}
