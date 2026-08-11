import { ArrowUpLeft, ArrowUpRight } from "lucide-react";
import { TIKTOK_URL, WHATSAPP_URL } from "./links";
import { useLanguage } from "../../context/LanguageContext";

export function Hero() {
  const { lang, t } = useLanguage();

  const MARQUEE_ITEMS = lang === "ar" 
    ? ["تطوير مواقع", "متاجر سلة", "لوحات تحكم", "ذكاء اصطناعي", "شات بوت", "تحليل بيانات"]
    : ["Web Development", "Salla Stores", "Dashboards", "AI Solutions", "AI Chatbots", "Data Analytics"];

  const HIGHLIGHTS = lang === "ar" ? [
    ["تسليم سريع", "أسبوع - 3 أسابيع"],
    ["أداء عالي", "سرعة وثبات"],
    ["دعم مستمر", "بعد التسليم"],
  ] : [
    ["Fast Delivery", "1 - 3 Weeks"],
    ["High Performance", "Speed & Reliability"],
    ["Ongoing Support", "Post-Delivery Support"],
  ];

  return (
    <section id="top" className="relative overflow-hidden pt-36 sm:pt-44 bg-[#000000] text-white">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mx-auto w-fit rounded-full bg-[#14213d]/80 backdrop-blur-md border border-[#7df56e]/30 px-4 py-1.5 text-[0.7rem] font-semibold tracking-[0.25em] text-[#7df56e]">
          {t.hero.badge}
        </div>

        <div className="relative mt-8">
          <h1 className="text-center font-black text-4xl sm:text-7xl lg:text-8xl tracking-tight leading-tight font-display">
            {lang === "ar" ? (
              <>
                <span className="block">نبني حضورك</span>
                <span className="block mt-2">
                  <span className="text-[#7df56e]">الرقمي</span>{" "}
                  <span className="text-zinc-500">بلا حدود</span>
                </span>
              </>
            ) : (
              <>
                <span className="block">{t.hero.titleFirst}</span>
                <span className="block mt-2 text-[#7df56e]">{t.hero.titleAccent}</span>
              </>
            )}
          </h1>

          <div className="relative z-10 mx-auto mt-8 max-w-xl rounded-3xl bg-[#14213d]/60 backdrop-blur-xl border border-white/10 p-6 text-center sm:mt-10 sm:p-8 shadow-2xl">
            <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
              {t.hero.subtitle}
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#7df56e] px-6 py-3.5 font-extrabold text-black transition-all hover:bg-[#7df56e]/90 hover:scale-105 sm:w-auto shadow-lg shadow-[#7df56e]/20"
              >
                <span>{t.hero.ctaWhatsapp}</span>
                {lang === "ar" ? (
                  <ArrowUpLeft className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:-translate-x-0.5" />
                ) : (
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                )}
              </a>
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-zinc-200 transition-all hover:bg-white/10 hover:border-[#7df56e]/40 sm:w-auto"
              >
                {t.hero.ctaPortfolio}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-center sm:mt-16">
          {HIGHLIGHTS.map(([tTitle, sSub]) => (
            <div key={tTitle}>
              <div className="text-xl font-bold text-white">{tTitle}</div>
              <div className="mt-1 text-xs text-zinc-400">{sSub}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 border-y border-white/10 bg-[#14213d]/40 py-4 overflow-hidden whitespace-nowrap">
        <div className="flex flex-nowrap w-max animate-marquee">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-6 shrink-0 mx-3">
              {MARQUEE_ITEMS.map((item) => (
                <span key={item} className="flex items-center gap-6 text-sm sm:text-base font-semibold text-zinc-300">
                  <span>{item}</span>
                  <span className="text-[#7df56e] font-bold">/</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
