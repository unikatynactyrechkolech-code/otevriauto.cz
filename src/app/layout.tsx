import type { Metadata } from "next";
import { Archivo, IBM_Plex_Sans } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const plex = IBM_Plex_Sans({
  variable: "--font-plex",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "latin-ext"],
  weight: ["700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Otevírání aut Praha 1 | Nouzové otevření vozidla 24/7",
  description:
    "Nouzové otevírání aut v Praze 1 – Staré Město, Josefov, Malá Strana, Hradčany a Nové Město. Bez poškození, nonstop 24/7, dojezd 10–40 minut po celé Praze. Volejte 734 565 987.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="cs"
      className={`${plex.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-ink">{children}</body>
    </html>
  );
}
