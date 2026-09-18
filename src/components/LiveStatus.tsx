"use client";

import { useEffect, useState } from "react";

type LiveStatusProps = {
  /** "light" for white backgrounds, "dark" for black ones. */
  tone?: "light" | "dark";
  className?: string;
};

const format = new Intl.DateTimeFormat("cs-CZ", { hour: "2-digit", minute: "2-digit", timeZone: "Europe/Prague" });

// Live "on call" badge with the current Prague time. The time renders only after mount so the
// server and client markup match.
export default function LiveStatus({ tone = "light", className = "" }: LiveStatusProps) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(format.format(new Date()));
    tick();
    const interval = window.setInterval(tick, 15_000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <span
      className={`inline-flex items-center gap-2 font-heading font-bold uppercase tracking-wider ${className.includes("text-") ? "" : "text-xs"} ${
        tone === "light" ? "text-black" : "text-white"
      } ${className}`}
    >
      <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
        <span className="absolute inline-flex h-full w-full rounded-full bg-brand motion-safe:animate-ping" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand" />
      </span>
      <span>Na příjmu</span>
      <span className={tone === "light" ? "text-black/60" : "text-white/70"} suppressHydrationWarning>
        {time ? `· ${time}` : "· nonstop"}
      </span>
    </span>
  );
}
