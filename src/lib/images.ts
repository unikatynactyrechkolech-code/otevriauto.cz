// Own photos live in the "otevri auto" folder of the zamecnik-husak R2 bucket.
const r2 = "https://pub-1210b04a751146ca8c08bf867908398c.r2.dev/otevri%20auto";

// Curated automotive photography used as backgrounds across the site.
export const images = {
  hero: `${r2}/otevreni-zamku-auta.webp`,
  keys: `${r2}/autoklice-a-zamek-zapalovani.webp`,
  battery: `${r2}/vybita-autobaterie.webp`,
  frozenLock: `${r2}/zamrzly-zamek-auta.webp`,
  centralLocking: `${r2}/porucha-centralniho-zamykani.webp`,
  callNonstop: `${r2}/ridic-vola-nonstop-autozamecnika.webp`,
  ignition: "https://images.unsplash.com/photo-1615906655593-ad0386982a0f",
  wheel: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
  technician: "https://images.unsplash.com/photo-1580273916550-e323be2ae537",
  toolClose: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d",
  nightRoad: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d",
  dashboard: "https://images.unsplash.com/photo-1518987048-93e29699e79a",
} as const;
