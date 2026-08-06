import { motion } from "motion/react";
import { MessageSquare, Video, ShieldCheck, Zap, Clock } from "lucide-react";
import { TranslationDict } from "../translations";

interface HeroProps {
  lang: "ar" | "en";
  t: TranslationDict;
  dir: "rtl" | "ltr";
}

export default function Hero({ lang, t, dir }: HeroProps) {
  const isRtl = dir === "rtl";

  const tickerItems = lang === "ar" ? [
    "متاجر سلة",
    "تطوير مواقع",
    "لوحات تحكم",
    "ذكاء اصطناعي",
    "شات بوت",
    "تحليل بيانات",
    "هوية رقمية",
    "تصميم متاجر"
  ] : [
    "Salla Stores",
    "Web Development",
    "Dashboards",
    "Artificial Intelligence",
    "AI Chatbots",
    "Data Analytics",
    "Digital Identity",
    "Custom Web Apps"
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] pt-32 pb-16 overflow-hidden flex flex-col items-center justify-center bg-[#000000]"
    >
      {/* Sleek Ambient Green & Navy Lighting Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-[#14213d] rounded-full blur-[120px] sm:blur-[160px] pointer-events-none opacity-60" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-[#7df56e]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 w-full relative z-10 flex flex-col items-center text-center">
        
        {/* Eyebrow Pill Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-[#14213d] border border-white/10 rounded-full px-5 py-2 text-xs font-mono font-bold text-[#7df56e] mb-6 shadow-md"
        >
          <span className="w-2 h-2 rounded-full bg-[#7df56e] animate-pulse" />
          <span>BINAA • DIGITAL SOLUTIONS</span>
        </motion.div>

        {/* Big Display Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tight text-white mb-6 leading-[1.15] max-w-4xl"
        >
          {lang === "ar" ? (
            <>
              نبني حضورك <span className="text-[#7df56e]">الرقمي بلا حدود</span>
            </>
          ) : (
            <>
              Building Your <span className="text-[#7df56e]">Digital Presence</span> Without Limits
            </>
          )}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mb-8 font-medium"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* Dual Primary Action CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14"
        >
          {/* Primary Green WhatsApp Button */}
          <a
            id="hero-whatsapp-cta"
            href="https://wa.me/966536945897?text=السلام%20عليكم%20منصة%20بناء%2C%20أود%20الاستفسار%20عن%20خدماتكم%20الرقمية"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 bg-[#7df56e] hover:bg-[#6be05c] text-[#000000] font-black text-sm rounded-full shadow-xl shadow-[#7df56e]/20 transition-all hover:scale-105 cursor-pointer"
          >
            <MessageSquare className="w-5 h-5 text-[#000000] fill-[#000000]" />
            <span>{t.hero.ctaWhatsapp}</span>
          </a>

          {/* Secondary Dark TikTok Link Button */}
          <a
            id="hero-tiktok-cta"
            href="https://www.tiktok.com/@binaa.digital"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 bg-[#14213d] hover:bg-[#1c2c50] border border-white/15 hover:border-[#7df56e]/40 text-white font-bold text-sm rounded-full transition-all cursor-pointer"
          >
            <Video className="w-5 h-5 text-[#7df56e]" />
            <span>{lang === "ar" ? "شاهد أعمالنا على تيك توك" : "Watch Us on TikTok"}</span>
          </a>
        </motion.div>

        {/* 3 Highlight Feature Pill Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl"
        >
          <div className="p-4 rounded-2xl bg-[#14213d]/80 border border-white/10 flex flex-col items-center justify-center text-center backdrop-blur-md">
            <Clock className="w-5 h-5 text-[#7df56e] mb-1.5" />
            <span className="text-sm font-black text-white">{lang === "ar" ? "تسليم سريع" : "Fast Delivery"}</span>
            <span className="text-xs text-zinc-400 mt-0.5">{lang === "ar" ? "أسبوع - 3 أسابيع" : "1 - 3 Weeks"}</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#14213d]/80 border border-white/10 flex flex-col items-center justify-center text-center backdrop-blur-md">
            <Zap className="w-5 h-5 text-[#7df56e] mb-1.5" />
            <span className="text-sm font-black text-white">{lang === "ar" ? "أداء عالي" : "High Performance"}</span>
            <span className="text-xs text-zinc-400 mt-0.5">{lang === "ar" ? "سرعة وSEO ممتاز" : "Speed & SEO Optimized"}</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#14213d]/80 border border-white/10 flex flex-col items-center justify-center text-center backdrop-blur-md">
            <ShieldCheck className="w-5 h-5 text-[#7df56e] mb-1.5" />
            <span className="text-sm font-black text-white">{lang === "ar" ? "دعم مستمر" : "Ongoing Support"}</span>
            <span className="text-xs text-zinc-400 mt-0.5">{lang === "ar" ? "بعد التسليم" : "Post Launch Support"}</span>
          </div>
        </motion.div>

      </div>

      {/* Running Marquee Ticker Bar */}
      <div className="w-full mt-16 border-y border-white/10 bg-[#14213d]/50 py-3.5 overflow-hidden backdrop-blur-md">
        <div className="flex whitespace-nowrap animate-marquee items-center gap-8 text-xs font-bold text-zinc-300">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-8 shrink-0">
              <span className="text-zinc-200">{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#7df56e]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

