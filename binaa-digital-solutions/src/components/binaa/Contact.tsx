import { MessageCircle, Music2 } from "lucide-react";
import { TIKTOK_HANDLE, TIKTOK_URL, WHATSAPP_NUMBER, WHATSAPP_URL } from "./links";
import logoImg from "../../../logo.png";
import { useLanguage } from "../../context/LanguageContext";

export function Contact() {
  const { lang, t } = useLanguage();

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-5 pb-24 pt-8 text-white sm:px-6 sm:pb-32">
      <div className="rounded-3xl bg-[#14213d]/80 backdrop-blur-2xl border border-white/10 p-8 sm:p-14 shadow-2xl">
        <h2 className="text-4xl font-black leading-tight sm:text-6xl font-display">
          {t.contact.title}<span className="text-[#7df56e]">؟</span>
        </h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-300">
          {t.contact.subtitle}
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-3xl bg-[#7df56e] p-6 text-black transition-all hover:scale-[1.02] hover:bg-[#7df56e]/90 shadow-lg shadow-[#7df56e]/20"
          >
            <MessageCircle className="h-8 w-8 shrink-0 stroke-[2.5]" />
            <div>
              <span className="block text-xl font-extrabold font-display">
                {lang === "ar" ? "واتساب" : "WhatsApp"}
              </span>
              <span className="block text-sm font-bold opacity-90" dir="ltr">{WHATSAPP_NUMBER}</span>
            </div>
          </a>
          <a
            href={TIKTOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-3xl bg-white/5 border border-white/10 p-6 transition-all hover:scale-[1.02] hover:bg-white/10 hover:border-[#7df56e]/40"
          >
            <Music2 className="h-8 w-8 shrink-0 text-[#7df56e]" />
            <div>
              <span className="block text-xl font-bold font-display">
                {lang === "ar" ? "تيك توك" : "TikTok"}
              </span>
              <span className="block text-sm text-zinc-300" dir="ltr">@{TIKTOK_HANDLE}</span>
            </div>
          </a>
        </div>
      </div>

      <footer className="mt-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-400">
        <div className="flex items-center gap-2.5">
          <img
            src={logoImg}
            alt="بناء للحلول الرقمية"
            className="h-12 sm:h-14 w-auto shrink-0 object-contain mix-blend-screen transition-transform hover:scale-105"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = "/logo.png";
            }}
          />
          <span className="font-black text-xl sm:text-2xl text-white tracking-tight font-display select-none">
            بناء
          </span>
          <span className="text-[10px] font-mono text-[#7df56e] tracking-widest uppercase border-s border-white/20 ps-2.5 ms-1">
            BINAA
          </span>
        </div>
        <span>
          © {new Date().getFullYear()} BINAA — {t.footer.rights}
        </span>
      </footer>
    </section>
  );
}
