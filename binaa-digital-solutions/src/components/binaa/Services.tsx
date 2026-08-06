import { Bot, LayoutDashboard, ShoppingBag, Code2, Sparkles } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function Services() {
  const { lang, t } = useLanguage();

  const webTags = lang === "ar"
    ? ["React / Next.js", "أداء 90+", "متجاوب", "آمن"]
    : ["React / Next.js", "Performance 90+", "Responsive", "Secure"];

  return (
    <section id="services" className="relative mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20 text-white">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="text-4xl font-black leading-tight sm:text-6xl font-display">
          {t.services.title}<span className="text-[#7df56e]">.</span>
        </h2>
        <p className="max-w-sm text-sm leading-relaxed text-zinc-300">
          {t.services.subtitle}
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-6 lg:h-[34rem]">
        <article className="group relative overflow-hidden rounded-3xl bg-[#14213d]/60 backdrop-blur-xl border border-white/10 p-7 hover:border-[#7df56e]/50 transition-all duration-500 sm:col-span-4 flex flex-col justify-between shadow-xl">
          <div>
            <Code2 className="h-7 w-7 text-[#7df56e]" />
            <h3 className="mt-5 text-3xl font-bold sm:text-4xl font-display">
              {t.services.items[0]?.title || (lang === "ar" ? "تطوير مواقع" : "Web Development")}
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-300">
              {t.services.items[0]?.desc || (lang === "ar" ? "مواقع سريعة ومتجاوبة بكود نظيف، مع تجربة استخدام مصممة لتحويل الزائر إلى عميل." : "Ultra-fast responsive websites and web apps engineered with modern tech stacks.")}
            </p>
          </div>
          <div className="mt-5 flex flex-wrap gap-2 text-[0.7rem] text-zinc-300">
            {webTags.map((tag) => (
              <span key={tag} className="rounded-full border border-[#7df56e]/30 bg-[#7df56e]/10 px-3 py-1 font-semibold text-[#7df56e]">
                {tag}
              </span>
            ))}
          </div>
        </article>

        <article className="relative overflow-hidden rounded-3xl bg-[#14213d]/60 backdrop-blur-xl border border-white/10 p-7 hover:border-[#7df56e]/50 transition-all duration-500 sm:col-span-2 flex flex-col justify-between shadow-xl">
          <div>
            <ShoppingBag className="h-7 w-7 text-[#7df56e]" />
            <h3 className="mt-5 text-2xl font-bold font-display">
              {t.services.items[1]?.title || (lang === "ar" ? "تصميم متاجر سلة" : "Salla Stores Design")}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-300">
              {t.services.items[1]?.desc || (lang === "ar" ? "ثيمات وتخصيصات لمتجرك على منصة سلة برفع واضح لمعدل الشراء." : "Custom designing professional Salla store interfaces to boost conversions.")}
            </p>
          </div>
        </article>

        <article className="relative overflow-hidden rounded-3xl bg-[#14213d]/60 backdrop-blur-xl border border-white/10 p-7 hover:border-[#7df56e]/50 transition-all duration-500 sm:col-span-3 flex flex-col justify-between shadow-xl">
          <div>
            <LayoutDashboard className="h-7 w-7 text-[#7df56e]" />
            <h3 className="mt-5 text-2xl font-bold sm:text-3xl font-display">
              {t.services.items[2]?.title || (lang === "ar" ? "لوحات التحكم وتحليل البيانات" : "Dashboards & Analytics")}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-300">
              {t.services.items[2]?.desc || (lang === "ar" ? "تمثيل بصري لمؤشرات الأداء مع فلاتر تفاعلية وتقارير لحظية تدعم القرار." : "Interactive visual dashboards tracking key metrics (KPIs) and operational performance.")}
            </p>
          </div>
        </article>

        <article className="relative overflow-hidden rounded-3xl bg-[#14213d]/80 backdrop-blur-xl border border-[#7df56e]/30 p-7 hover:border-[#7df56e]/70 transition-all duration-500 sm:col-span-3 flex flex-col justify-between shadow-2xl">
          <div>
            <div className="flex items-center gap-2">
              <Bot className="h-7 w-7 text-[#7df56e]" />
              <Sparkles className="h-4 w-4 text-[#7df56e]/80" />
            </div>
            <h3 className="mt-5 text-2xl font-bold sm:text-3xl font-display">
              {t.services.items[3]?.title || (lang === "ar" ? "حلول الذكاء الاصطناعي والشات بوت" : "AI Solutions & Chatbots")}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-300">
              {t.services.items[3]?.desc || (lang === "ar" ? "مساعدين أذكياء يردّون على عملائك، يرشّحون المنتجات، ويعملون ٢٤ ساعة دون توقف." : "Integrating generative AI models for smart conversational bots and automated workflows.")}
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
