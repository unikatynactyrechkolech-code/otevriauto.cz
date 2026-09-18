import type { FaqItem } from "../locations/faq";
import { priceFaqAnswer } from "../pricing";
import { formatList } from "../text";
import type { BrandPage } from "./types";

export function buildBrandFaq(brand: BrandPage, arrival: string): FaqItem[] {
  return [
    ...brand.faq,
    {
      question: `Otevřete i starší vůz značky ${brand.name}?`,
      answer: `Ano, otevíráme vozy ${brand.name} všech ročníků – ${formatList(brand.models.slice(0, 4))} i další modely. Poradíme si se starším autem s klasickým klíčem stejně jako s novým vozem s bezklíčovým přístupem.`,
    },
    {
      question: "Za jak dlouho jste u auta?",
      answer: `Kdekoli v Praze bývá Andrej nebo Artur u auta zpravidla za ${arrival}, do okolních měst a obcí podle vzdálenosti. Jezdíme nonstop – v noci, o víkendech i o svátcích.`,
    },
    {
      question: "Kolik otevření auta stojí?",
      answer: priceFaqAnswer,
    },
  ];
}
