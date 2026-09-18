type SectionHeadingProps = {
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionHeading({
  title,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={`flex flex-col gap-3 ${isCenter ? "items-center text-center" : "items-start text-left"}`}>
      <span aria-hidden="true" className="hazard h-1.5 w-16" />
      <h2
        className={`font-heading text-3xl font-black leading-[1.05] tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-black"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`max-w-2xl text-sm sm:text-base ${light ? "text-white" : "text-black"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
