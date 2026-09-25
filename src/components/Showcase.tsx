import Image from "next/image";
import JsonLd from "./JsonLd";
import SectionHeading from "./SectionHeading";
import VideoPlayer from "./VideoPlayer";
import { siteConfig } from "@/lib/site-config";
import { mainVideo, showcasePhotos, showcaseUploadDate, showcaseVideos } from "@/lib/showcase";

// Video rich results need absolute URLs.
const videoSchema = [mainVideo, ...showcaseVideos].map((video) => ({
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: video.title,
  description: video.description,
  thumbnailUrl: `${siteConfig.url}${video.poster}`,
  contentUrl: `${siteConfig.url}${video.src}`,
  uploadDate: showcaseUploadDate,
}));

// Our own videos and photos from real jobs.
export default function Showcase() {
  return (
    <section id="ukazky" className="scroll-mt-20 bg-neutral-100 py-16 sm:py-24">
      {videoSchema.map((schema) => (
        <JsonLd key={schema.contentUrl} data={schema} />
      ))}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          title="Naše ukázky z výjezdů"
          description="Žádné fotky z banky obrázků. Všechna videa i fotky jsou z aut, která jsme otevírali v Praze a okolí."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {showcaseVideos.map((video) => (
            <article
              key={video.src}
              className="flex flex-col gap-4 border border-black/10 bg-white p-4 sm:flex-row sm:items-center sm:gap-6 sm:p-6"
            >
              <VideoPlayer
                video={video}
                sizes="(min-width: 640px) 11rem, 100vw"
                className="mx-auto w-full max-w-[13rem] shrink-0 sm:mx-0 sm:w-44 sm:max-w-none"
              />
              <div>
                <h3 className="font-heading text-xl font-bold text-ink">{video.title}</h3>
                <p className="mt-2 text-sm text-ink sm:text-base">{video.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {showcasePhotos.map((photo) => (
            <figure key={photo.src} className="border border-black/10 bg-white">
              <div className="relative aspect-[3/4] bg-neutral-200">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 18rem, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="p-4 text-sm text-ink">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
