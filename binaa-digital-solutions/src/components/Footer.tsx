import { MessageSquare, ArrowUp, ExternalLink } from "lucide-react";
import { TranslationDict } from "../translations";

interface FooterProps {
  lang: "ar" | "en";
  t: TranslationDict;
  dir: "rtl" | "ltr";
}

export default function Footer({ lang, t, dir }: FooterProps) {
  const isRtl = dir === "rtl";

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer id="main-footer" className="bg-[#000000] border-t border-[#14213d] pt-16 pb-8 relative overflow-hidden">
      
      {/* Background blur */}
      <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-96 h-96 bg-[#14213d] rounded-full blur-[120px] pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Grid content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12 border-b border-white/10 pb-12">
          
          {/* Col 1: Brand details (5 columns) */}
          <div className={`md:col-span-5 space-y-4 ${isRtl ? "text-right" : "text-left"}`}>
            
            {/* Logo Slot */}
            <div className={`flex items-center gap-3 group relative cursor-pointer select-none ${isRtl ? "flex-row-reverse" : "flex-row"}`}>
              <img 
                src="/logo.png" 
                alt="BINAA Logo" 
                className="h-12 sm:h-16 min-h-[50px] sm:min-h-[60px] w-auto object-contain p-1 bg-[#14213d] border border-white/10 rounded-xl"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="flex flex-col">
                <span className="font-display font-black text-[#ffffff] text-lg sm:text-xl leading-none">
                  {lang === "ar" ? "بِنَاء" : "BINAA"}
                </span>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#7df56e] font-bold leading-none mt-1">
                  {lang === "ar" ? "منصة للحلول الرقمية" : "Digital Solutions Platform"}
                </span>
              </div>
            </div>

            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              {t.footer.desc}
            </p>
          </div>

          {/* Col 2: Quick Links (3 columns) */}
          <div className={`md:col-span-3 space-y-4 ${isRtl ? "text-right" : "text-left"}`}>
            <h4 className="text-xs uppercase font-extrabold text-[#7df56e] tracking-wider">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-zinc-300 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => handleScrollTo("services")}
                  className="hover:text-[#7df56e] transition-colors cursor-pointer"
                >
                  {t.nav.services}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("portfolio")}
                  className="hover:text-[#7df56e] transition-colors cursor-pointer"
                >
                  {t.nav.portfolio}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("pricing")}
                  className="hover:text-[#7df56e] transition-colors cursor-pointer"
                >
                  {t.nav.pricing}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("why-us")}
                  className="hover:text-[#7df56e] transition-colors cursor-pointer"
                >
                  {t.nav.whyUs}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("faq")}
                  className="hover:text-[#7df56e] transition-colors cursor-pointer"
                >
                  {t.faq.title}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("contact")}
                  className="hover:text-[#7df56e] transition-colors cursor-pointer"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Social follow (4 columns) */}
          <div className={`md:col-span-4 space-y-4 ${isRtl ? "text-right" : "text-left"}`}>
            <h4 className="text-xs uppercase font-extrabold text-[#7df56e] tracking-wider">
              {t.footer.socials}
            </h4>
            
            <div className="flex flex-col gap-3">
              {/* WhatsApp Link */}
              <a
                id="footer-social-whatsapp"
                href="https://wa.me/966536945897?text=السلام%20عليكم%20منصة%20بناء%2C%20أود%20الاستفسار%20عن%20خدماتكم%20الرقمية"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-xs text-zinc-300 hover:text-[#7df56e] transition-colors font-bold"
              >
                <div className="w-8 h-8 rounded-lg bg-[#7df56e] text-[#000000] flex items-center justify-center shadow-md">
                  <MessageSquare className="w-4 h-4 stroke-[2.5]" />
                </div>
                <span>الواتساب: 0536945897</span>
              </a>

              {/* TikTok Link */}
              <a
                id="footer-social-tiktok"
                href="https://www.tiktok.com/@binaa.digital"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-xs text-zinc-300 hover:text-[#7df56e] transition-colors font-bold"
              >
                <div className="w-8 h-8 rounded-lg bg-[#7df56e] text-[#000000] flex items-center justify-center shadow-md">
                  <ExternalLink className="w-4 h-4 stroke-[2.5]" />
                </div>
                <span>تيك توك: binaa.digital</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom row copyrights and back-to-top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-zinc-400 text-[11px] sm:text-xs text-center sm:text-right w-full sm:w-auto">
            {t.footer.rights}
          </p>

          <button
            id="back-to-top-button"
            onClick={handleScrollToTop}
            className="flex items-center gap-2 text-xs font-bold text-zinc-300 hover:text-white bg-[#14213d] hover:bg-[#14213d]/80 border border-white/10 rounded-full px-4 py-2 transition-all cursor-pointer shrink-0"
          >
            <span>{lang === "ar" ? "الرجوع للأعلى" : "Back to top"}</span>
            <ArrowUp className="w-4 h-4 text-[#7df56e]" />
          </button>
        </div>

      </div>
    </footer>
  );
}
