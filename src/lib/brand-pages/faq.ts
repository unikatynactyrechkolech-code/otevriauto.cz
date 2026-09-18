import type { FaqItem } from "../locations/faq";
import { priceFaqAnswer } from "../pricing";
import type { BrandPage } from "./types";

export function buildBrandFaq(brand: BrandPage, arrival: string): FaqItem[] {
  return [
    ...brand.faq,
    {
      question: `Otevřete i starší model ${brand.name}, nebo jen nové vozy?`,
      answer: `Otevíráme vozy ${brand.name} všech ročníků – ${brand.models.slice(0, 4).join(", ")} i další modely, starší auta s klasickým klíčem stejně jako nové vozy s bezklíčovým přístupem.`,
    },
    {
      question: "Jak rychle přijedete?",
      answer: `V Praze bývá technik na místě zpravidla do ${arrival}, do okolních obcí podle vzdálenosti. Jezdíme nonstop – v noci, o víkendech i o svátcích.`,
    },
    {
      question: "Kolik otevření auta stojí?",
      answer: priceFaqAnswer,
    },
  ];
}
