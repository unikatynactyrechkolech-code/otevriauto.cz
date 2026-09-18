"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { images } from "@/lib/images";

const services = [
  "Vybrat službu",
  "Zabouchnuté klíče ve voze",
  "Ztracené klíče",
  "Vybitá baterie",
  "Zamrzlý zámek",
  "Porucha centrálního zamykání",
  "Jiné",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="kontakt" className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-3xl lg:grid-cols-5">
          <div className="relative flex flex-col justify-between gap-8 overflow-hidden bg-ink p-8 text-white sm:p-10 lg:col-span-2">
            <Image
              src={images.dashboard}
              alt="Interiér vozidla"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/90" />
            <div className="relative">
              <span className="text-xs font-bold uppercase tracking-widest text-brand">
                Kontaktujte nás
              </span>
              <h2 className="mt-3 font-heading text-2xl font-extrabold sm:text-3xl">
                Otevíráme vaše auto ještě dnes
              </h2>
              <p className="mt-3 text-sm text-white">
                Volejte přímo, nebo nám nechte poptávku – ozveme se obratem a
                řekneme orientační cenu ještě před výjezdem.
              </p>
            </div>

            <div className="relative space-y-5 border-t border-white/15 pt-6">
              <a href={siteConfig.phoneHref} className="block">
                <span className="block text-xs text-white">Zavolejte nám</span>
                <span className="block text-lg font-bold">{siteConfig.phone}</span>
              </a>
              <div>
                <span className="block text-xs text-white">Napište nám</span>
                <span className="block text-sm font-bold">{siteConfig.email}</span>
              </div>
              <div>
                <span className="block text-xs text-white">Provoz</span>
                <span className="block text-sm font-bold">{siteConfig.hours}</span>
              </div>
              <div>
                <span className="block text-xs text-white">Oblast</span>
                <span className="block text-sm font-bold">Praha a Středočeský kraj</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 sm:p-10 lg:col-span-3">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center gap-3 py-16 text-center">
                <span className="font-heading text-4xl font-extrabold text-brand-dark">✓</span>
                <h3 className="font-heading text-xl font-bold text-ink">Poptávka odeslána</h3>
                <p className="max-w-sm text-sm text-ink">
                  Děkujeme, ozveme se vám v nejbližší chvíli. V naléhavém případě
                  raději rovnou volejte {siteConfig.phone}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-bold text-ink">
                    Jméno
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    type="text"
                    placeholder="Vaše jméno"
                    className="rounded-xl border border-black/10 bg-gray-50/60 px-4 py-3 text-sm outline-none transition focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/30"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-xs font-bold text-ink">
                    Telefon
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    required
                    type="tel"
                    placeholder="+420 000 000 000"
                    className="rounded-xl border border-black/10 bg-gray-50/60 px-4 py-3 text-sm outline-none transition focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/30"
                  />
                </div>
                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label htmlFor="email" className="text-xs font-bold text-ink">
                    E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="vas@email.cz"
                    className="rounded-xl border border-black/10 bg-gray-50/60 px-4 py-3 text-sm outline-none transition focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/30"
                  />
                </div>
                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label htmlFor="service" className="text-xs font-bold text-ink">
                    Vyberte situaci
                  </label>
                  <select
                    id="service"
                    name="service"
                    defaultValue={services[0]}
                    className="rounded-xl border border-black/10 bg-gray-50/60 px-4 py-3 text-sm outline-none transition focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/30"
                  >
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label htmlFor="message" className="text-xs font-bold text-ink">
                    Zpráva
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Značka, model a místo, kde vůz stojí"
                    className="resize-none rounded-xl border border-black/10 bg-gray-50/60 px-4 py-3 text-sm outline-none transition focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/30"
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center rounded-xl bg-brand px-6 py-3.5 text-sm font-bold text-black transition hover:bg-brand-dark sm:col-span-2"
                >
                  Odeslat poptávku
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
