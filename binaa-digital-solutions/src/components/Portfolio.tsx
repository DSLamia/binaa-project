import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, Sparkles, Image as ImageIcon, Upload } from "lucide-react";
import { TranslationDict } from "../translations";

interface PortfolioProps {
  lang: "ar" | "en";
  t: TranslationDict;
  dir: "rtl" | "ltr";
}

type FilterCategory = "all" | "web" | "dashboards" | "ai";

export default function Portfolio({ lang, t, dir }: PortfolioProps) {
  const isRtl = dir === "rtl";
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  const filterCategories = [
    { label: t.portfolio.filterAll, id: "all" as const },
    { label: t.portfolio.filterWeb, id: "web" as const },
    { label: t.portfolio.filterAI, id: "ai" as const },
    { label: t.portfolio.filterDashboards, id: "dashboards" as const },
  ];

  const filteredProjects = activeFilter === "all"
    ? t.portfolio.projects
    : t.portfolio.projects.filter(p => p.category === activeFilter);

  const handleProjectInquiry = (projectTitle: string) => {
    const arabicText = `السلام عليكم منصة بناء للحلول الرقمية،

أود الاستفسار ومناقشة مشروع مماثل لمشروعكم المميز:
" ${projectTitle} "

هل يمكننا مناقشة التفاصيل عبر الواتساب؟ شكراً لكم.`;

    const englishText = `Hello BINAA Digital Solutions,

I'd like to consult on a project similar to your work:
" ${projectTitle} "

Could we discuss details on WhatsApp? Thank you!`;

    const msg = encodeURIComponent(lang === "ar" ? arabicText : englishText);
    window.open(`https://wa.me/966536945897?text=${msg}`, "_blank");
  };

  return (
    <section id="portfolio" className="py-20 bg-[#000000] relative border-b border-[#14213d]">
      {/* Ambient background blur */}
      <div className="absolute right-10 top-10 w-[300px] h-[300px] bg-[#14213d] rounded-full blur-[100px] pointer-events-none opacity-50" />
      <div className="absolute left-10 bottom-10 w-[300px] h-[300px] bg-[#7df56e]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading matching video frame 00:11 */}
        <div className={`max-w-3xl mb-12 flex flex-col ${isRtl ? "text-right" : "text-left"}`}>
          <div className="text-xs font-mono font-bold text-[#7df56e] mb-2 tracking-wider">
            {lang === "ar" ? "نماذج حقيقية من شغفنا — واجهة، وذكاء، وسلاسة" : "Real Showcase — Interface, Intelligence, Smoothness"}
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-black text-white">
            {lang === "ar" ? "أعمال مختارة" : "Featured Works"}
          </h2>
        </div>

        {/* Categories Filters Buttons */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 mb-10 pb-2 items-center">
          <div className="p-1.5 rounded-full bg-[#14213d]/80 border border-white/10 flex items-center gap-1.5 backdrop-blur-sm shrink-0">
            {filterCategories.map((cat) => (
              <button
                key={cat.id}
                id={`portfolio-filter-${cat.id}`}
                onClick={() => setActiveFilter(cat.id)}
                className={`text-xs sm:text-sm font-bold px-4 sm:px-6 py-2 rounded-full transition-all cursor-pointer whitespace-nowrap ${
                  activeFilter === cat.id
                    ? "bg-[#7df56e] text-[#000000] shadow-md shadow-[#7df56e]/20"
                    : "text-zinc-300 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Project Bento Grid matching video layout */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              // Third project (Dashboard) spans full width (2 columns) on desktop in 'all' view
              const isFullWidth = activeFilter === "all" && idx === 2;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  key={project.id}
                  className={`group rounded-3xl border border-white/10 hover:border-[#7df56e]/50 bg-[#14213d]/80 hover:bg-[#14213d] flex flex-col justify-between overflow-hidden transition-all duration-300 relative shadow-xl ${
                    isFullWidth ? "md:col-span-2" : "md:col-span-1"
                  }`}
                >
                  {/* High Res Showcase Image Box on Top */}
                  <div className={`relative ${isFullWidth ? "h-64 sm:h-80 lg:h-96" : "h-60 sm:h-72"} w-full bg-[#000000] border-b border-white/10 overflow-hidden group/img flex items-center justify-center p-3 sm:p-4`}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-contain object-center group-hover/img:scale-102 transition-transform duration-500 rounded-2xl"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#14213d]/80 via-transparent to-transparent pointer-events-none" />

                    {/* Tag badge on top right */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-[#7df56e] text-[#000000] text-xs font-black px-3 py-1 rounded-full shadow-lg">
                        {project.stats}
                      </span>
                    </div>
                  </div>

                  {/* Details below Image */}
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-display font-black text-white mb-3 group-hover:text-[#7df56e] transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                        {project.desc}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-white/10 mt-auto">
                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((techItem, tidx) => (
                          <span
                            key={tidx}
                            className="px-2.5 py-1 bg-[#000000]/60 rounded-lg text-[10px] font-semibold text-zinc-300 border border-white/10"
                          >
                            {techItem}
                          </span>
                        ))}
                      </div>

                      {/* WhatsApp Inquiry Button */}
                      <button
                        id={`portfolio-inquire-${project.id}`}
                        onClick={() => handleProjectInquiry(project.title)}
                        className="flex items-center justify-center gap-2 px-5 py-2.5 bg-[#7df56e] hover:bg-[#6be05c] text-[#000000] rounded-xl text-xs font-black transition-all cursor-pointer shadow-md shrink-0"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-[#000000] fill-[#000000]" />
                        <span>{t.portfolio.livePreview}</span>
                      </button>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
