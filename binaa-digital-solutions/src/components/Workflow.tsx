import { motion } from "motion/react";
import { TranslationDict } from "../translations";

interface WorkflowProps {
  lang: "ar" | "en";
  t: TranslationDict;
  dir: "rtl" | "ltr";
}

export default function Workflow({ lang, t, dir }: WorkflowProps) {
  const isRtl = dir === "rtl";

  return (
    <section id="workflow" className="py-20 bg-[#000000] relative border-b border-[#14213d] overflow-hidden">
      
      {/* Decorative gradient blur */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-[#14213d] rounded-full blur-[150px] pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className={`max-w-3xl mb-16 flex flex-col ${isRtl ? "text-right" : "text-left"}`}>
          <div className="text-xs uppercase tracking-widest font-extrabold text-[#7df56e] mb-2">
            {lang === "ar" ? "منهجية العمل المتكاملة" : "How We Deliver"}
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white mb-3">
            {t.workflow.title}
          </h2>
          <div className="w-14 h-1 bg-[#7df56e] rounded-full mb-3" />
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            {t.workflow.subtitle}
          </p>
        </div>

        {/* Timeline Path Grid Layout */}
        <div className="relative">
          
          {/* Centered Line for desktop timeline */}
          <div className="absolute left-[29px] lg:left-1/2 top-4 bottom-4 w-0.5 bg-[#7df56e] -translate-x-1/2 hidden md:block" />

          <div className="space-y-10 md:space-y-14">
            {t.workflow.steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row items-stretch md:items-center relative w-full ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  
                  {/* Step Number Pill Centered on desktop */}
                  <div className="absolute left-[29px] lg:left-1/2 top-0 md:top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 hidden md:flex items-center justify-center">
                    <motion.div
                      whileInView={{ scale: [0.8, 1.1, 1] }}
                      viewport={{ once: true }}
                      className="w-12 h-12 rounded-full bg-[#14213d] border-2 border-[#7df56e] text-[#7df56e] font-display font-black text-base flex items-center justify-center shadow-lg shadow-[#7df56e]/20"
                    >
                      {step.num}
                    </motion.div>
                  </div>

                  {/* Left / Right Card placeholder for alignment */}
                  <div className="w-full md:w-1/2" />

                  {/* Actual Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className={`w-full md:w-[44%] relative p-7 rounded-3xl border border-white/10 bg-[#14213d]/80 backdrop-blur-sm hover:border-[#7df56e]/50 transition-all shadow-xl ${
                      isEven ? "md:mr-auto" : "md:ml-auto"
                    }`}
                  >
                    {/* Mobile Step Indicator */}
                    <div className="flex items-center gap-3.5 mb-3 md:hidden">
                      <div className="w-9 h-9 rounded-full bg-[#7df56e] text-[#000000] font-display font-black text-xs flex items-center justify-center shadow-md">
                        {step.num}
                      </div>
                      <div className="h-px bg-white/10 flex-grow" />
                    </div>

                    <h3 className="text-lg sm:text-xl font-display font-black text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
