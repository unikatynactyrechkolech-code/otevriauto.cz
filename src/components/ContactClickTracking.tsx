"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    umami?: { track: (event: string, data?: Record<string, string>) => void };
  }
}

function channelOf(href: string): string | null {
  if (href.startsWith("tel:")) return "telefon";
  if (href.includes("wa.me/")) return "WhatsApp";
  return null;
}

// Every click on a phone or WhatsApp link goes to Umami as "Klik na telefon" / "Klik na WhatsApp"
// with the button's data-misto, so the stats show which button people use; Umami adds the page.
// Not data-umami-event: on links Umami holds the navigation until the stat is sent, which would
// delay the dialler, and a stuck stats server would stop the call from opening at all.
export default function ContactClickTracking() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const link = event.target instanceof Element ? event.target.closest("a") : null;
      if (!link) return;
      const channel = channelOf(link.getAttribute("href") ?? "");
      if (!channel) return;
      window.umami?.track(`Klik na ${channel}`, { misto: link.dataset.misto ?? "jine" });
    }
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
