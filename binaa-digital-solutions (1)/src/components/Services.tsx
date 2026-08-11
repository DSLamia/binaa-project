import { motion } from "motion/react";
import { Code, Store, Bot, BarChart3, ArrowLeft, ArrowRight } from "lucide-react";
import { TranslationDict } from "../translations";

interface ServicesProps {
  lang: "ar" | "en";
  t: TranslationDict;
  dir: "rtl" | "ltr";
}

export default function Services({ lang, t, dir }: ServicesProps) {
  const isRtl = dir === "rtl";

  const handleInquireService = (title: string) => {
    const text = encodeURIComponent(
      lang === "ar"
        ? `السلام عليكم منصة بناء، أود الاستفسار عن خدمة: ${title}`
        : `Hello BINAA, I'd like to inquire about: ${title}`
    );
    window.open(`https://wa.me/966536945897?text=${text}`, "_blank");
  };

  return (
    <section id="services" className="py-20 bg-[#000000] relative border-b border-[#14213d]">
      {/* Ambient background blur */}
      <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-[#14213d] rounded-full blur-[150px] pointer-events-none opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className={`max-w-4xl mb-14 flex flex-col ${isRtl ? "text-right" : "text-left"}`}>
          <div className="text-xs font-mono font-bold text-[#7df56e] mb-2 tracking-wider">
            {lang === "ar" 
              ? "أربعة محاور نراهن عليها لاستثمارك — من الواجهة حتى الذكاء الذي يحركها"
              : "Four Pillars For Your Investment — From Interface to Driving Intelligence"}
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-black text-white">
            {lang === "ar" ? "خدماتنا." : "Our Services."}
          </h2>
        </div>

        {/* Asymmetrical Bento Grid matching video */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: تطوير مواقع (Spans 2 Columns on Desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 p-8 rounded-3xl bg-[#14213d]/80 border border-white/10 hover:border-[#7df56e]/50 transition-all flex flex-col justify-between group shadow-xl relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-2xl bg-[#000000] border border-white/10 text-[#7df56e]">
                  <Code className="w-6 h-6 stroke-[2.5]" />
                </div>
              </div>
              <h3 className="text-2xl font-display font-black text-white mb-3">
                {t.services.items[0]?.title || (lang === "ar" ? "تطوير مواقع" : "Web Development")}
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed mb-6 max-w-xl">
                {t.services.items[0]?.desc}
              </p>
            </div>

            <div className="space-y-5 pt-4 border-t border-white/10">
              {/* Tech Pills */}
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-[#000000]/80 border border-white/10 text-[11px] font-bold text-zinc-300">React</span>
                <span className="px-3 py-1 rounded-full bg-[#000000]/80 border border-white/10 text-[11px] font-bold text-zinc-300">Next.js</span>
                <span className="px-3 py-1 rounded-full bg-[#7df56e]/10 border border-[#7df56e]/30 text-[11px] font-bold text-[#7df56e]">{lang === "ar" ? "مطلوب" : "Popular"}</span>
                <span className="px-3 py-1 rounded-full bg-[#000000]/80 border border-white/10 text-[11px] font-bold text-zinc-300">SEO</span>
                <span className="px-3 py-1 rounded-full bg-[#000000]/80 border border-white/10 text-[11px] font-bold text-zinc-300">Flask</span>
              </div>

              <button
                onClick={() => handleInquireService(t.services.items[0]?.title || "تطوير مواقع")}
                className="inline-flex items-center gap-2 text-xs font-black text-[#7df56e] group-hover:text-white transition-colors cursor-pointer"
              >
                <span>{lang === "ar" ? "تواصل حول تطوير الموقع" : "Inquire Web Development"}</span>
                {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </button>
            </div>
          </motion.div>

          {/* Card 2: تصميم متاجر سلة (Spans 1 Column) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-1 p-8 rounded-3xl bg-[#14213d]/80 border border-white/10 hover:border-[#7df56e]/50 transition-all flex flex-col justify-between group shadow-xl relative overflow-hidden"
          >
            <div>
              <div className="p-3 rounded-2xl bg-[#000000] border border-white/10 text-[#7df56e] w-fit mb-6">
                <Store className="w-6 h-6 stroke-[2.5]" />
              </div>
              <h3 className="text-xl font-display font-black text-white mb-3">
                {t.services.items[1]?.title || (lang === "ar" ? "تصميم متاجر سلة" : "Salla Store Design")}
              </h3>
              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6">
                {t.services.items[1]?.desc}
              </p>
            </div>

            <button
              onClick={() => handleInquireService(t.services.items[1]?.title || "تصميم متاجر سلة")}
              className="inline-flex items-center gap-2 text-xs font-black text-[#7df56e] group-hover:text-white transition-colors cursor-pointer pt-4 border-t border-white/10"
            >
              <span>{lang === "ar" ? "تواصل حول متجر سلة" : "Inquire Salla Store"}</span>
              {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </button>
          </motion.div>

          {/* Card 3: حلول الذكاء الاصطناعي والشات بوت (Spans 1 Column) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1 p-8 rounded-3xl bg-[#14213d]/80 border border-white/10 hover:border-[#7df56e]/50 transition-all flex flex-col justify-between group shadow-xl relative overflow-hidden"
          >
            <div>
              <div className="p-3 rounded-2xl bg-[#000000] border border-white/10 text-[#7df56e] w-fit mb-6">
                <Bot className="w-6 h-6 stroke-[2.5]" />
              </div>
              <h3 className="text-xl font-display font-black text-white mb-3">
                {t.services.items[3]?.title || (lang === "ar" ? "حلول الذكاء الاصطناعي والشات بوت" : "AI & Chatbot Solutions")}
              </h3>
              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6">
                {t.services.items[3]?.desc}
              </p>
            </div>

            <button
              onClick={() => handleInquireService(t.services.items[3]?.title || "حلول الذكاء الاصطناعي")}
              className="inline-flex items-center gap-2 text-xs font-black text-[#7df56e] group-hover:text-white transition-colors cursor-pointer pt-4 border-t border-white/10"
            >
              <span>{lang === "ar" ? "استفسر عن الشات بوت" : "Inquire AI Chatbot"}</span>
              {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </button>
          </motion.div>

          {/* Card 4: لوحات التحكم وتحليل البيانات (Spans 2 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 p-8 rounded-3xl bg-[#14213d]/80 border border-white/10 hover:border-[#7df56e]/50 transition-all flex flex-col justify-between group shadow-xl relative overflow-hidden"
          >
            <div>
              <div className="p-3 rounded-2xl bg-[#000000] border border-white/10 text-[#7df56e] w-fit mb-6">
                <BarChart3 className="w-6 h-6 stroke-[2.5]" />
              </div>
              <h3 className="text-2xl font-display font-black text-white mb-3">
                {t.services.items[2]?.title || (lang === "ar" ? "لوحات التحكم وتحليل البيانات" : "Dashboards & Analytics")}
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed mb-6 max-w-xl">
                {t.services.items[2]?.desc}
              </p>
            </div>

            {/* Visual Graphic Bar Chart matching video */}
            <div className="mt-4 pt-6 border-t border-white/10 space-y-4">
              <div className="flex items-end gap-2 h-16 w-full max-w-md bg-[#000000]/60 p-3 rounded-2xl border border-white/10">
                <div className="w-1/6 bg-[#7df56e]/30 h-[40%] rounded-t-md" />
                <div className="w-1/6 bg-[#7df56e]/60 h-[70%] rounded-t-md" />
                <div className="w-1/6 bg-[#7df56e] h-[90%] rounded-t-md shadow-sm shadow-[#7df56e]" />
                <div className="w-1/6 bg-[#7df56e]/40 h-[50%] rounded-t-md" />
                <div className="w-1/6 bg-[#7df56e]/80 h-[80%] rounded-t-md" />
                <div className="w-1/6 bg-[#7df56e] h-[100%] rounded-t-md shadow-sm shadow-[#7df56e]" />
              </div>

              <button
                onClick={() => handleInquireService(t.services.items[2]?.title || "لوحات التحكم وتحليل البيانات")}
                className="inline-flex items-center gap-2 text-xs font-black text-[#7df56e] group-hover:text-white transition-colors cursor-pointer"
              >
                <span>{lang === "ar" ? "تواصل حول لوحات التحكم" : "Inquire Dashboards"}</span>
                {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

