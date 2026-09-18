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
      <h2
        className={`font-heading text-3xl font-bold leading-tight sm:text-4xl ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`max-w-2xl text-sm sm:text-base ${light ? "text-white" : "text-ink"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
