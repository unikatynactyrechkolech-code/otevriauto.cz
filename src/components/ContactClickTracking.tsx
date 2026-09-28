"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    umami?: { track: (event: string, data?: Record<string, string>) => void };
  }
}

const BUTTON_LABELS: Record<string, string> = {
  "hero-podstranky": "pruh „Nonstop linka“ pod nadpisem",
  "plovouci-tlacitko": "plovoucí tlačítko",
  upozorneni: "rámeček s upozorněním",
  "seznam-lokalit": "seznam lokalit",
  kontakt: "kontakt",
  paticka: "patička",
  "spodni-banner": "banner dole",
  menu: "menu",
};

function channelOf(href: string): string | null {
  if (href.startsWith("tel:")) return "telefon";
  if (href.includes("wa.me/")) return "WhatsApp";
  return null;
}

// Every click on a phone or WhatsApp link goes to Umami as "Klik na telefon" / "Klik na WhatsApp"
// with the page and a readable button name, so the stats show where people call from.
// Not data-umami-event: on links Umami holds the navigation until the stat is sent, which would
// delay the dialler, and a stuck stats server would stop the call from opening at all.
export default function ContactClickTracking() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const link = event.target instanceof Element ? event.target.closest("a") : null;
      if (!link) return;
      const channel = channelOf(link.getAttribute("href") ?? "");
      if (!channel) return;
      const path = window.location.pathname;
      const button = link.dataset.misto ?? "";
      window.umami?.track(`Klik na ${channel}`, {
        podstranka: path === "/" ? "úvodní stránka" : path,
        tlacitko: BUTTON_LABELS[button] ?? (button || "jiné"),
      });
    }
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
