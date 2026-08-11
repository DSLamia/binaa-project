import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { TranslationDict } from "../translations";

interface FAQProps {
  lang: "ar" | "en";
  t: TranslationDict;
  dir: "rtl" | "ltr";
}

export default function FAQ({ lang, t, dir }: FAQProps) {
  const isRtl = dir === "rtl";
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#000000] relative border-b border-[#14213d]">
      {/* Decorative Glow */}
      <div className="absolute left-10 top-1/4 w-[350px] h-[350px] bg-[#14213d] rounded-full blur-[130px] pointer-events-none opacity-50" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className={`max-w-3xl mb-14 flex flex-col ${isRtl ? "text-right" : "text-left"} items-center text-center mx-auto`}>
          <div className="text-xs uppercase tracking-widest font-extrabold text-[#7df56e] mb-2">
            {lang === "ar" ? "إجابات لاستفساراتك" : "Got Questions?"}
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white mb-3">
            {t.faq.title}
          </h2>
          <div className="w-14 h-1 bg-[#7df56e] rounded-full mb-3" />
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            {t.faq.subtitle}
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {t.faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-[#14213d]/80 overflow-hidden transition-all duration-300 shadow-lg"
              >
                {/* Trigger Row */}
                <button
                  id={`faq-trigger-${idx}`}
                  onClick={() => handleToggle(idx)}
                  className={`w-full p-6 flex items-center justify-between gap-4 text-white hover:bg-white/5 transition-all cursor-pointer ${
                    isRtl ? "flex-row-reverse text-right" : "flex-row text-left"
                  }`}
                >
                  <div className={`flex items-center gap-3.5 ${isRtl ? "flex-row-reverse" : "flex-row"}`}>
                    <HelpCircle className="w-5 h-5 text-[#7df56e] shrink-0" />
                    <span className="font-display font-extrabold text-sm sm:text-base text-white">
                      {item.q}
                    </span>
                  </div>

                  {/* Icon toggler */}
                  <div className="p-1.5 rounded-lg bg-[#7df56e] text-[#000000] shrink-0">
                    {isOpen ? <Minus className="w-4 h-4 stroke-[3]" /> : <Plus className="w-4 h-4 stroke-[3]" />}
                  </div>
                </button>

                {/* Answer Content Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-content-${idx}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-white/10 text-xs sm:text-sm text-zinc-300 leading-relaxed whitespace-pre-line">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
