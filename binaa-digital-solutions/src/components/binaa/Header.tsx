import { useEffect, useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { WHATSAPP_URL } from "./links";
import logoImg from "../../../logo.png";
import { useLanguage } from "../../context/LanguageContext";

export function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  const NAV = [
    { label: t.nav.services, href: "#services" },
    { label: t.nav.portfolio, href: "#works" },
    { label: t.nav.pricing, href: "#pricing" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div
        className={`pointer-events-auto mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full px-6 py-3 transition-all duration-500 ${
          solid
            ? "bg-[#14213d]/90 backdrop-blur-xl border border-[#7df56e]/20 shadow-2xl shadow-black/80"
            : "bg-[#000000]/60 backdrop-blur-md border border-white/10"
        }`}
      >
        <a href="#top" className="flex shrink-0 items-center gap-2.5 py-0.5" aria-label="بناء للحلول الرقمية - BINAA">
          <img
            src={logoImg}
            alt="شعار بناء للحلول الرقمية"
            className="h-12 sm:h-14 md:h-16 w-auto object-contain mix-blend-screen transition-transform hover:scale-105"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <span className="text-xl sm:text-2xl font-black text-white tracking-tight font-display select-none">
            بناء
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-zinc-300 transition-colors hover:bg-[#7df56e]/10 hover:text-[#7df56e]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <button
            type="button"
            onClick={toggleLang}
            aria-label="تغيير اللغة / Change Language"
            className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3.5 py-2 text-xs font-bold text-white transition-all hover:border-[#7df56e] hover:bg-[#7df56e]/10 hover:text-[#7df56e] cursor-pointer active:scale-95"
          >
            <Globe className="h-4 w-4 text-[#7df56e]" />
            <span>{lang === "ar" ? "English" : "العربية"}</span>
          </button>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-[#7df56e] px-5 py-2.5 text-xs font-extrabold text-black transition-all hover:bg-[#7df56e]/90 hover:scale-105 md:inline-flex shadow-md shadow-[#7df56e]/20"
          >
            {lang === "ar" ? "ابدأ مشروعك" : "Start Project"}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="القائمة"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 text-white md:hidden cursor-pointer hover:border-[#7df56e]"
          >
            {open ? <X className="h-5 w-5"/> : <Menu className="h-5 w-5"/>}
          </button>
        </div>
      </div>

      {open && (
        <div className="pointer-events-auto mx-auto mt-2 max-w-6xl rounded-3xl bg-[#14213d]/95 backdrop-blur-2xl border border-[#7df56e]/20 p-5 md:hidden shadow-2xl">
          <div className="flex flex-col gap-2">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-semibold text-zinc-200 hover:bg-[#7df56e]/10 hover:text-[#7df56e]"
              >
                {item.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-xl bg-[#7df56e] px-4 py-3 text-center font-extrabold text-black"
            >
              {lang === "ar" ? "ابدأ مشروعك" : "Start Project"}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
