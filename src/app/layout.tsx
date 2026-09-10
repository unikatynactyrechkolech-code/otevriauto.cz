import type { Metadata } from "next";
import { Mulish, Poppins } from "next/font/google";
import "./globals.css";

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin", "latin-ext"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Otevírání aut Praha 1 | Nouzové otevření vozidla 24/7",
  description:
    "Nouzové otevírání aut v Praze 1 – Staré Město, Josefov, Malá Strana, Hradčany a Nové Město. Bez poškození, nonstop 24/7, dojezd do 30 minut. Volejte 775 180 299.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="cs"
      className={`${mulish.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-ink">{children}</body>
    </html>
  );
}
