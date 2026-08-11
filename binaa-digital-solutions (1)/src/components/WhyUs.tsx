import { motion } from "motion/react";
import { Sparkles, Zap, Brain, Sliders, Shield, HeartHandshake } from "lucide-react";
import { TranslationDict } from "../translations";

interface WhyUsProps {
  lang: "ar" | "en";
  t: TranslationDict;
  dir: "rtl" | "ltr";
}

export default function WhyUs({ lang, t, dir }: WhyUsProps) {
  const isRtl = dir === "rtl";

  const icons = [Sparkles, Zap, Brain, Sliders, Shield, HeartHandshake];

  return (
    <section id="why-us" className="py-20 bg-[#000000] relative border-b border-[#14213d]">
      {/* Background Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#14213d] rounded-full blur-[140px] pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className={`max-w-3xl mb-14 flex flex-col ${isRtl ? "text-right" : "text-left"}`}>
          <div className="text-xs uppercase tracking-widest font-extrabold text-[#7df56e] mb-2">
            {lang === "ar" ? "معايير التميز الهندسي" : "Why BINAA?"}
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white mb-3">
            {t.whyUs.title}
          </h2>
          <div className="w-14 h-1 bg-[#7df56e] rounded-full mb-3" />
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            {t.whyUs.subtitle}
          </p>
        </div>

        {/* Features list cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {t.whyUs.features.map((feat, idx) => {
            const IconComponent = icons[idx % icons.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-7 rounded-3xl border border-white/10 bg-[#14213d]/80 hover:bg-[#14213d] hover:border-[#7df56e]/50 transition-all duration-300 relative group shadow-xl"
              >
                {/* Styled Icon */}
                <div className="mb-5 flex">
                  <div className="p-3.5 rounded-2xl bg-[#7df56e] text-[#000000] font-bold shadow-md shadow-[#7df56e]/20 group-hover:scale-105 transition-all duration-300">
                    <IconComponent className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </div>

                {/* Card details */}
                <h3 className="text-lg sm:text-xl font-display font-black text-white mb-2">
                  {feat.title}
                </h3>
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                  {feat.desc}
                </p>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
