import roseImg from "../../../rose-site.png";
import chatbotImg from "../../../chatbot.png";
import dashboardImg from "../../../dashboard.png";
import { useLanguage } from "../../context/LanguageContext";

export function Works() {
  const { lang, t } = useLanguage();

  const WORKS = [
    {
      title: t.portfolio.projects[0]?.title || (lang === "ar" ? "متجر ليليز للورود" : "Lily's Rose Store"),
      tag: t.portfolio.projects[0]?.stats || (lang === "ar" ? "متجر إلكتروني" : "E-Commerce Store"),
      src: roseImg,
      fallbackSrc: "/rose-site.png",
      alt: "متجر ليليز للورود",
      desc: t.portfolio.projects[0]?.desc || (lang === "ar" ? "متجر ورود فاخر بواجهة عربية/إنجليزية، سلة شراء ولوحة إدارة كاملة." : "Luxury floral store with responsive checkout and admin panel."),
      span: "lg:col-span-7",
    },
    {
      title: t.portfolio.projects[1]?.title || (lang === "ar" ? "مساعد الهدايا الذكي" : "Smart Gift AI Assistant"),
      tag: t.portfolio.projects[1]?.stats || (lang === "ar" ? "شات بوت AI" : "AI Chatbot"),
      src: chatbotImg,
      fallbackSrc: "/chatbot.png",
      alt: "مساعد الهدايا الذكي",
      desc: t.portfolio.projects[1]?.desc || (lang === "ar" ? "شات بوت يفهم المناسبة ويقترح البوكيه المناسب ويضيفه للسلة مباشرة." : "Conversational AI chatbot assisting customers with tailored gift picks."),
      span: "lg:col-span-5",
    },
    {
      title: t.portfolio.projects[2]?.title || (lang === "ar" ? "لوحة تحليل البيانات" : "Interactive Analytics Dashboard"),
      tag: t.portfolio.projects[2]?.stats || "Dashboard & BI",
      src: dashboardImg,
      fallbackSrc: "/dashboard.png",
      alt: "لوحة تحكم تحليل بيانات",
      desc: t.portfolio.projects[2]?.desc || (lang === "ar" ? "لوحة تحكم تفاعلية متطورة لتمثيل البيانات، وتتبع مؤشرات الأداء الرئيسية (KPIs) وتحليل أداء العمل بوضوح." : "Interactive analytics dashboard tracking core business KPIs in real time."),
      span: "lg:col-span-12",
    },
  ];

  return (
    <section id="works" className="relative mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20 text-white">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="text-4xl font-black leading-tight sm:text-6xl font-display">
          {t.portfolio.title}<span className="text-[#7df56e]">.</span>
        </h2>
        <p className="max-w-sm text-sm leading-relaxed text-zinc-300">
          {t.portfolio.subtitle}
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-12">
        {WORKS.map((w) => (
          <article key={w.title} className={`rounded-3xl bg-[#14213d]/60 backdrop-blur-xl border border-white/10 hover:border-[#7df56e]/40 transition-all duration-300 overflow-hidden shadow-2xl flex flex-col justify-between ${w.span}`}>
            <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-black/50 flex items-center justify-center p-3">
              <img
                src={w.src}
                alt={w.alt}
                className="h-full w-full object-contain rounded-2xl transition-transform duration-500 hover:scale-[1.02]"
                onError={(e) => {
                  if (w.fallbackSrc) {
                    (e.currentTarget as HTMLImageElement).src = w.fallbackSrc;
                  }
                }}
              />
            </div>
            <div className="p-6 sm:p-8">
              <span className="rounded-full bg-[#7df56e] px-3.5 py-1 text-xs font-black text-black inline-block">
                {w.tag}
              </span>
              <h3 className="mt-4 text-2xl font-bold font-display">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">{w.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
