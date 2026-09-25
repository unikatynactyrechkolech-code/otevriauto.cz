"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { flushSync } from "react-dom";
import type { ShowcaseVideo } from "@/lib/showcase";

type VideoPlayerProps = {
  video: ShowcaseVideo;
  /** Widths the poster is rendered at, for the responsive image. */
  sizes?: string;
  className?: string;
};

// Shows the first frame of the clip as a plain image; the video file is downloaded only after
// the visitor hits play.
export default function VideoPlayer({ video, sizes = "(min-width: 640px) 24rem, 100vw", className }: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);

  // Safari only allows unmuted playback from the click itself, so the element has to exist
  // before this handler returns – hence flushSync instead of the autoPlay attribute.
  const play = () => {
    flushSync(() => setPlaying(true));
    const element = frameRef.current?.querySelector("video");
    element?.play().catch(() => {
      if (!element.muted) {
        element.muted = true;
        void element.play();
      }
    });
  };

  return (
    <div
      ref={frameRef}
      className={`relative overflow-hidden bg-ink ${className ?? ""}`}
      style={{ aspectRatio: `${video.width} / ${video.height}` }}
    >
      {playing ? (
        <video
          src={video.src}
          poster={video.poster}
          className="h-full w-full object-cover"
          controls
          muted={!video.hasAudio}
          playsInline
          preload="auto"
        />
      ) : (
        <button
          type="button"
          onClick={play}
          aria-label={`Přehrát video: ${video.title}`}
          className="group absolute inset-0 cursor-pointer"
        >
          <Image src={video.poster} alt={video.title} fill sizes={sizes} className="object-cover" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand transition group-hover:bg-brand-dark">
              <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-black" aria-hidden="true">
                <path d="M6 4.5v15l13-7.5-13-7.5Z" />
              </svg>
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
