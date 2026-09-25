// Videos and photos from our own jobs. They live in /public for now; once the R2 token is
// renewed it is enough to point `media` at the bucket folder.
const media = "/ukazky";

export type ShowcaseVideo = {
  src: string;
  /** First frame of the clip, shown before the video itself is downloaded. */
  poster: string;
  width: number;
  height: number;
  title: string;
  description: string;
};

export const mainVideo: ShowcaseVideo = {
  src: `${media}/otevirani-auta-alfa-romeo-garaz.mp4`,
  poster: `${media}/otevirani-auta-alfa-romeo-garaz-poster.webp`,
  width: 464,
  height: 832,
  title: "Otevření Alfy Romeo v podzemní garáži",
  description:
    "Vzduchový klín rozevře dveře jen o pár milimetrů, tažná tyč pak zevnitř odemkne zámek. Lak ani těsnění se nedotkne nic tvrdého.",
};

export const showcaseVideos: ShowcaseVideo[] = [
  {
    src: `${media}/otevirani-lexusu-rx-na-ulici.mp4`,
    poster: `${media}/otevirani-lexusu-rx-na-ulici-poster.webp`,
    width: 480,
    height: 848,
    title: "Lexus RX odemčený přímo na ulici",
    description:
      "Klíče zůstaly uvnitř zamčeného vozu. Majitelka počkala u auta a za pár minut sedala zpátky za volant.",
  },
  {
    src: `${media}/otevirani-zamku-dveri-auta.mp4`,
    poster: `${media}/otevirani-zamku-dveri-auta-poster.webp`,
    width: 464,
    height: 832,
    title: "Práce přímo se zámkem dveří",
    description:
      "Když se do vozu nedá dostat přes okno, jdeme na zámek. Vložka zůstane funkční a původní klíč po zásahu dál odemyká.",
  },
];

/** Published when the clips were first put on the site. */
export const showcaseUploadDate = "2026-09-25";

export type ShowcasePhoto = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
};

export const showcasePhotos: ShowcasePhoto[] = [
  {
    src: `${media}/otevirani-zamku-dveri-auta-planzetou.webp`,
    width: 900,
    height: 1599,
    alt: "Otevírání zámku dveří auta planžetou",
    caption: "Planžeta v zámku dveří – klasika u starších vozů s mechanickým zamykáním.",
  },
  {
    src: `${media}/otevirani-zamku-dveri-skody.webp`,
    width: 900,
    height: 1599,
    alt: "Otevírání zámku dveří Škody",
    caption: "Škodovky řešíme skoro denně, u téhle stačilo pár minut.",
  },
  {
    src: `${media}/otevirani-zamku-kufru-corvette.webp`,
    width: 1200,
    height: 1600,
    alt: "Otevírání zámku kufru Chevroletu Corvette",
    caption: "Zamčený kufr Corvette. I u veteránů a sportovních vozů jedeme bez poškození.",
  },
  {
    src: `${media}/otevreni-sportovniho-auta-na-odtahovce.webp`,
    width: 1200,
    height: 1600,
    alt: "Otevření sportovního auta na odtahovce",
    caption: "Vůz už stál na odtahovce – otevřeli jsme ho ještě před naložením.",
  },
];
