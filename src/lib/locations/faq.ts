import { priceFaqAnswer } from "../pricing";
import type { Location } from "./types";

export type FaqItem = { question: string; answer: string };

export function buildLocationFaq(location: Location, arrival: string): FaqItem[] {
  const otherParts = location.parts.filter((part) => part !== location.name);
  const partsSentence =
    otherParts.length > 0 ? ` Vyjíždíme i do těchto částí: ${otherParts.join(", ")}.` : "";

  return [
    {
      question: `Jak rychle dorazíte ${location.locative}?`,
      answer: `Autozámečník vyráží hned po vašem zavolání a ${location.locative} bývá zpravidla za ${arrival}. Jezdíme nonstop – v noci, o víkendech i o svátcích.${partsSentence}`,
    },
    location.faq,
    {
      question: `Otevřete ${location.locative} auto jakékoli značky?`,
      answer:
        "Ano. Otevíráme osobní auta, SUV i dodávky všech značek – od Škody, Volkswagenu a Toyoty přes BMW, Mercedes-Benz a Audi až po Teslu, Volvo nebo Hyundai – včetně vozů s bezklíčovým vstupem.",
    },
    {
      question: "Kolik otevření auta stojí?",
      answer: priceFaqAnswer,
    },
    {
      question: "Nepoškodíte při otevírání dveře nebo elektroniku?",
      answer:
        "Nepoškodíme. Používáme speciální nástroje určené přímo pro automobilové zámky, takže vůz otevřeme bez poškození dveří, těsnění, skel i elektroniky. Pokusy o otevření svépomocí naopak často končí ohnutými rámy nebo prasklým sklem.",
    },
  ];
}
