import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, PhoneCall, Globe } from "lucide-react";
import { TranslationDict } from "../translations";

interface HeaderProps {
  lang: "ar" | "en";
  setLang: (lang: "ar" | "en") => void;
  t: TranslationDict;
  dir: "rtl" | "ltr";
}

export default function Header({ lang, setLang, t, dir }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: t.nav.services, id: "services" },
    { label: t.nav.pricing, id: "pricing" },
    { label: t.nav.portfolio, id: "portfolio" },
    { label: t.nav.whyUs, id: "why-us" },
    { label: t.nav.faq, id: "faq" },
    { label: t.nav.contact, id: "contact" },
  ];

  const handleToggleLang = () => {
    setLang(lang === "ar" ? "en" : "ar");
  };

  const scrollToSection = (id: string) => {
    setIsOpen(false);
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
    <header
      id="main-header"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-4 px-4 sm:px-8"
    >
      <div className="max-w-6xl mx-auto bg-[#14213d]/80 backdrop-blur-xl border border-white/10 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between shadow-2xl">
        
        {/* Logo and Brand Header */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 group cursor-pointer select-none"
        >
          <img 
            src="/logo.png" 
            alt="BINAA Logo" 
            className="h-10 sm:h-12 w-auto object-contain p-0.5 bg-[#14213d] border border-white/10 rounded-xl transition-transform group-hover:scale-105"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <div className="flex flex-col">
            <span className="font-display font-black text-base sm:text-lg text-white leading-none tracking-tight">
              {lang === "ar" ? "بِنَاء" : "BINAA"}
            </span>
            <span className="text-[9px] sm:text-[10px] text-[#7df56e] font-bold tracking-wider mt-0.5">
              {lang === "ar" ? "للحلول الرقمية" : "Digital Solutions"}
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-xs font-bold px-4 py-2 text-zinc-300 hover:text-[#7df56e] rounded-full transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Language Switcher */}
          <button
            id="lang-switcher-desktop"
            onClick={handleToggleLang}
            className="flex items-center gap-1.5 text-xs font-bold text-zinc-200 hover:text-white bg-[#000000]/50 border border-white/15 hover:border-[#7df56e]/40 rounded-full px-3.5 py-2 transition-all cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5 text-[#7df56e]" />
            <span>{lang === "ar" ? "English" : "العربية"}</span>
          </button>

          {/* Green CTA Button - Start Project */}
          <a
            id="whatsapp-header-button"
            href="https://wa.me/966536945897?text=السلام%20عليكم%20منصة%20بناء%2C%20أود%20الاستفسار%20عن%20خدماتكم%20الرقمية"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-black text-[#000000] bg-[#7df56e] hover:bg-[#6be05c] rounded-full px-5 py-2 shadow-lg shadow-[#7df56e]/20 transition-all hover:scale-105"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#000000]" />
            <span>{lang === "ar" ? "ابدأ مشروعك" : "Start Project"}</span>
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2.5 lg:hidden">
          <button
            id="lang-switcher-mobile"
            onClick={handleToggleLang}
            className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#14213d] border border-white/10 text-zinc-200 transition-all cursor-pointer"
            title={lang === "ar" ? "English" : "العربية"}
          >
            <Globe className="w-4 h-4 text-[#7df56e]" />
          </button>

          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#14213d] text-white border border-white/10 transition-colors cursor-pointer"
          >
            {isOpen ? <X className="w-5 h-5 text-[#7df56e]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-[#000000]/98 border-b border-[#14213d] backdrop-blur-xl py-5 px-6 shadow-2xl flex flex-col gap-4 lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-semibold py-3 border-b border-white/5 text-zinc-300 hover:text-[#7df56e] transition-colors cursor-pointer ${
                    dir === "rtl" ? "text-right" : "text-left"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="pt-2">
              <a
                id="whatsapp-header-button-mobile"
                href="https://wa.me/966536945897?text=السلام%20عليكم%20منصة%20بناء%2C%20أود%20الاستفسار%20عن%20خدماتكم%20الرقمية"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 text-xs font-black text-[#000000] bg-[#7df56e] rounded-xl shadow-lg shadow-[#7df56e]/20"
              >
                <PhoneCall className="w-4 h-4 text-[#000000]" />
                <span>{t.nav.ctaWhatsapp}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
