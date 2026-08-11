import { motion } from "motion/react";
import { MessageSquare, ExternalLink, ArrowLeft, ArrowRight } from "lucide-react";
import { TranslationDict } from "../translations";

interface ContactFormProps {
  lang: "ar" | "en";
  t: TranslationDict;
  dir: "rtl" | "ltr";
}

export default function ContactForm({ lang, t, dir }: ContactFormProps) {
  const isRtl = dir === "rtl";

  const whatsappNumber = "0536945897";
  const whatsappUrl = `https://wa.me/966536945897?text=${encodeURIComponent(
    lang === "ar"
      ? "السلام عليكم منصة بناء للحلول الرقمية، أود الاستفسار عن خدماتكم الرقمية"
      : "Hello BINAA Digital Solutions, I would like to inquire about your services"
  )}`;

  const tiktokHandle = "binaa.digital";
  const tiktokUrl = "https://www.tiktok.com/@binaa.digital";

  return (
    <section id="contact" className="py-20 bg-[#000000] relative border-b border-[#14213d]">
      {/* Ambient backgrounds */}
      <div className="absolute right-1/4 bottom-10 w-[400px] h-[400px] bg-[#14213d] rounded-full blur-[140px] pointer-events-none opacity-50" />
      <div className="absolute left-10 top-10 w-[300px] h-[300px] bg-[#7df56e]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto mb-14 text-center flex flex-col items-center">
          <div className="text-xs uppercase tracking-widest font-extrabold text-[#7df56e] mb-2">
            {lang === "ar" ? "تواصل مباشر وفوري" : "Direct Contact"}
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white mb-3">
            {lang === "ar" ? "تواصل معنا مباشرة" : "Get In Touch Directly"}
          </h2>
          <div className="w-14 h-1 bg-[#7df56e] rounded-full mb-3" />
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-2xl">
            {lang === "ar"
              ? "يسعدنا الإجابة على جميع استفساراتك وتلبية متطلبات مشروعك الرقمي عبر قنواتنا المباشرة فوراً."
              : "We are delighted to answer your inquiries and discuss your digital project directly."}
          </p>
        </div>

        {/* Direct Contact Cards ONLY (WhatsApp & TikTok) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          
          {/* 1. Direct WhatsApp Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group rounded-3xl p-8 bg-[#14213d] border border-white/10 hover:border-[#7df56e]/50 transition-all duration-300 flex flex-col justify-between shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#7df56e]/5 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#7df56e] text-[#000000] flex items-center justify-center mb-6 shadow-lg shadow-[#7df56e]/20 group-hover:scale-105 transition-transform">
                <MessageSquare className="w-7 h-7 stroke-[2.5]" />
              </div>

              <span className="text-xs font-bold text-[#7df56e] uppercase tracking-widest mb-1 block">
                {lang === "ar" ? "الواتساب المباشر" : "Direct WhatsApp"}
              </span>

              <h3 className="text-2xl font-display font-black text-white mb-2">
                {whatsappNumber}
              </h3>

              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-8">
                {lang === "ar"
                  ? "تحدث معنا مباشرة لمناقشة التفاصيل وتأكيد خطتك البرمجية فوراً."
                  : "Chat directly with our team to finalize your project requirements."}
              </p>
            </div>

            <a
              id="direct-contact-whatsapp-btn"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 bg-[#7df56e] hover:bg-[#6be05c] text-[#000000] font-black rounded-2xl shadow-xl shadow-[#7df56e]/20 transition-all cursor-pointer text-xs sm:text-sm"
            >
              <MessageSquare className="w-4.5 h-4.5 text-[#000000]" />
              <span>{lang === "ar" ? "تحدث عبر الواتساب" : "Chat on WhatsApp"}</span>
              {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </a>
          </motion.div>

          {/* 2. Direct TikTok Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group rounded-3xl p-8 bg-[#14213d] border border-white/10 hover:border-[#7df56e]/50 transition-all duration-300 flex flex-col justify-between shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#7df56e]/5 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#7df56e] text-[#000000] flex items-center justify-center mb-6 shadow-lg shadow-[#7df56e]/20 group-hover:scale-105 transition-transform">
                <ExternalLink className="w-7 h-7 stroke-[2.5]" />
              </div>

              <span className="text-xs font-bold text-[#7df56e] uppercase tracking-widest mb-1 block">
                {lang === "ar" ? "حساب تيك توك" : "TikTok Account"}
              </span>

              <h3 className="text-2xl font-display font-black text-white mb-2">
                {tiktokHandle}
              </h3>

              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-8">
                {lang === "ar"
                  ? "تابع أحدث أعمالنا وشروحاتنا التقنية والحلول الرقمية على حسابنا الرسمي."
                  : "Follow our official TikTok account for technical showcases and digital updates."}
              </p>
            </div>

            <a
              id="direct-contact-tiktok-btn"
              href={tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 bg-[#7df56e] hover:bg-[#6be05c] text-[#000000] font-black rounded-2xl shadow-xl shadow-[#7df56e]/20 transition-all cursor-pointer text-xs sm:text-sm"
            >
              <ExternalLink className="w-4.5 h-4.5 text-[#000000]" />
              <span>{lang === "ar" ? "زيارة حساب تيك توك" : "Visit TikTok Profile"}</span>
              {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
