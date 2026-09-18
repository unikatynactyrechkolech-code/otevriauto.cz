import Link from "next/link";

type HeroCtasProps = {
  align?: "start" | "center";
};

// Hero call to action: a yellow outlined link to the price list.
export default function HeroCtas({ align = "start" }: HeroCtasProps) {
  return (
    <div className={`flex ${align === "center" ? "justify-center" : ""}`}>
      <Link
        href="/cenik"
        className="rounded-full border-2 border-brand px-5 py-2 font-heading text-sm font-bold text-brand transition hover:bg-brand hover:text-black sm:px-6 sm:text-base"
      >
        Ceník
      </Link>
    </div>
  );
}
