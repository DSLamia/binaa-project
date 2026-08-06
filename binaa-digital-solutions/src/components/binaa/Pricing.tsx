import { useState } from "react";
import { Check, Plus, ArrowUpLeft, ArrowUpRight, Calculator, Sparkles, Layers } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

interface Addon {
  id: string;
  nameAr: string;
  nameEn: string;
  price: number;
}

export function Pricing() {
  const { lang, t } = useLanguage();
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>("business");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const AI_ADDONS: Addon[] = [
    { id: "chatbot_gemini", nameAr: "شات بوت ذكي Gemini", nameEn: "Gemini AI Chatbot", price: 1000 },
    { id: "search_summarize", nameAr: "نظام بحث وتلخيص محتوى", nameEn: "AI Search & Summarization", price: 1000 },
    { id: "notifications_auto", nameAr: "أتمتة إشعارية", nameEn: "Notification Automations", price: 1500 },
  ];

  const EXTRA_SERVICES: Addon[] = [
    { id: "power_bi", nameAr: "لوحة Power BI", nameEn: "Power BI Dashboard", price: 1200 },
    { id: "data_clean", nameAr: "تنظيف وهيكلة بيانات", nameEn: "Data Cleaning & Structuring", price: 800 },
    { id: "salla_dev", nameAr: "تطوير واجهات سلة", nameEn: "Salla Custom Theme", price: 800 },
    { id: "student_grad", nameAr: "باقة مخصصة لمشاريع التخرج والطلاب", nameEn: "Student Project Package", price: 700 },
  ];

  const PLANS = [
    {
      id: "starter",
      name: t.pricing.starter.title,
      badge: "STARTER",
      price: 699,
      desc: t.pricing.starter.desc,
      features: t.pricing.starter.bullets,
    },
    {
      id: "business",
      name: t.pricing.business.title,
      badge: "BUSINESS",
      price: 1899,
      desc: t.pricing.business.desc,
      popular: true,
      features: t.pricing.business.bullets,
    },
    {
      id: "premium",
      name: t.pricing.premium.title,
      badge: "PREMIUM",
      price: 3999,
      desc: t.pricing.premium.desc,
      features: t.pricing.premium.bullets,
    },
  ];

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const getSelectedPlan = () => PLANS.find((p) => p.id === selectedPlanId);

  const calculatePlanPrice = () => {
    const plan = getSelectedPlan();
    return plan ? plan.price : 0;
  };

  const calculateAddonsTotal = () => {
    const allAddons = [...AI_ADDONS, ...EXTRA_SERVICES];
    return selectedAddons.reduce((sum, id) => {
      const addon = allAddons.find((a) => a.id === id);
      return sum + (addon ? addon.price : 0);
    }, 0);
  };

  const totalCalculated = calculatePlanPrice() + calculateAddonsTotal();

  const handleCustomQuoteWhatsApp = () => {
    let msg = lang === "ar" ? "مرحباً بناء، أود طلب عرض سعر للمشروع:" : "Hello BINAA, I would like to request a quote:";
    const plan = getSelectedPlan();
    const currStr = lang === "ar" ? "ر.س" : "SAR";

    if (plan) {
      msg += `\n- ${lang === "ar" ? "الباقة الأساسية" : "Base Package"}: ${plan.name} (${plan.price} ${currStr})`;
    } else {
      msg += `\n- ${lang === "ar" ? "الباقة الأساسية: لم يتم اختيار باقة" : "Base Package: None selected"}`;
    }

    const allAddons = [...AI_ADDONS, ...EXTRA_SERVICES];
    if (selectedAddons.length > 0) {
      msg += `\n- ${lang === "ar" ? "الإضافات المختارة" : "Selected Add-ons"}:`;
      selectedAddons.forEach((id) => {
        const addon = allAddons.find((a) => a.id === id);
        if (addon) {
          const addonName = lang === "ar" ? addon.nameAr : addon.nameEn;
          msg += `\n  * ${addonName} (+${addon.price} ${currStr})`;
        }
      });
    }
    msg += `\n- ${lang === "ar" ? "إجمالي التكلفة التقديرية" : "Estimated Total Cost"}: ${totalCalculated} ${currStr}`;

    window.open(`https://wa.me/966536945897?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const currencySymbol = lang === "ar" ? "ريال سعودي" : "SAR";
  const currencyShort = lang === "ar" ? "ر.س" : "SAR";

  return (
    <section id="pricing" className="relative mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20 text-white">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="text-xs font-mono font-bold text-[#7df56e] tracking-wider">
            {lang === "ar" ? "شفافية كاملة" : "Full Transparency"}
          </span>
          <h2 className="mt-1 text-4xl font-black leading-tight sm:text-6xl font-display">
            {lang === "ar" ? "الأسعار تبدأ من" : "Pricing Starts From"}<span className="text-[#7df56e]">.</span>
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-zinc-300">
          {t.pricing.subtitle}
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {PLANS.map((plan) => {
          const isSelected = selectedPlanId === plan.id;
          return (
            <div
              key={plan.id}
              onClick={() => {
                setSelectedPlanId(plan.id);
                const el = document.getElementById("interactive-calculator");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`relative flex flex-col justify-between rounded-3xl p-7 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#7df56e]/10 active:scale-[0.98] cursor-pointer ${
                isSelected
                  ? "bg-[#14213d]/90 border-2 border-[#7df56e] shadow-[0_0_35px_rgba(125,245,110,0.2)]"
                  : plan.popular
                  ? "bg-[#14213d]/80 border-2 border-[#7df56e]/60 shadow-[0_0_20px_rgba(125,245,110,0.1)] hover:border-[#7df56e]"
                  : "bg-[#14213d]/60 backdrop-blur-xl border border-white/10 hover:border-[#7df56e]/50"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3.5 left-6 rounded-full bg-[#7df56e] px-3.5 py-1 text-[11px] font-black text-black shadow-md">
                  {t.pricing.popularBadge}
                </span>
              )}

              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-400 tracking-widest">{plan.badge}</span>
                  <span className="text-2xl font-black text-white font-display">{plan.name}</span>
                </div>

                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-white font-display">{plan.price}</span>
                  <span className="text-sm font-bold text-[#7df56e]">{currencySymbol}</span>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-zinc-300">{plan.desc}</p>

                <ul className="mt-6 space-y-3 border-t border-white/10 pt-5 text-xs text-zinc-200">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-[#7df56e] shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPlanId(plan.id);
                  const el = document.getElementById("interactive-calculator");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`mt-8 flex w-full items-center justify-center gap-2 rounded-2xl py-3 text-xs font-bold transition-all duration-200 active:scale-[0.98] cursor-pointer ${
                  isSelected
                    ? "bg-[#7df56e] text-black shadow-lg shadow-[#7df56e]/25 font-extrabold"
                    : "bg-white/10 text-white hover:bg-white/20 hover:border-[#7df56e]/40"
                }`}
              >
                <span>
                  {isSelected
                    ? (lang === "ar" ? "الباقة المختارة حالياً" : "Currently Selected")
                    : (lang === "ar" ? "اختر هذه الباقة" : "Select Package")}
                </span>
                {lang === "ar" ? <ArrowUpLeft className="h-4 w-4" /> : <ArrowUpRight className="h-4 w-4" />}
              </button>
            </div>
          );
        })}
      </div>

      {/* Interactive Calculator Section */}
      <div id="interactive-calculator" className="mt-14 rounded-3xl bg-[#14213d]/80 backdrop-blur-2xl border border-white/10 p-6 sm:p-10 shadow-2xl">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8 pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-[#7df56e]/10 text-[#7df56e] border border-[#7df56e]/20">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white font-display">{t.pricing.calculatorTitle}</h3>
              <p className="text-xs text-zinc-300 mt-0.5">{t.pricing.calculatorSubtitle}</p>
            </div>
          </div>
        </div>

        {/* Base Package Selection */}
        <div className="mb-8">
          <label className="block text-xs font-bold text-[#7df56e] uppercase tracking-wider mb-3">
            {t.pricing.selectedPackageLabel}
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <button
              type="button"
              onClick={() => setSelectedPlanId(null)}
              className={`p-4 rounded-2xl border text-center transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-[#7df56e]/10 active:scale-[0.97] cursor-pointer relative ${
                selectedPlanId === null
                  ? "bg-[#7df56e]/15 border-[#7df56e] text-white font-bold shadow-[0_0_20px_rgba(125,245,110,0.15)] ring-1 ring-[#7df56e]/30"
                  : "bg-black/40 border-white/10 text-zinc-300 hover:border-[#7df56e]/40 hover:bg-white/5"
              }`}
            >
              <span className="block text-xs font-bold">{lang === "ar" ? "بدون باقة أساسية" : "No Base Package"}</span>
              <span className="text-[11px] text-zinc-400 mt-0.5 block">0 {currencyShort}</span>
              {selectedPlanId === null && (
                <div className="absolute top-2 left-2 w-4 h-4 rounded-full bg-[#7df56e] text-black flex items-center justify-center">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
              )}
            </button>
            {PLANS.map((plan) => {
              const active = selectedPlanId === plan.id;
              return (
                <button
                  key={plan.id}
                  type="button"
                  onClick={() => setSelectedPlanId(plan.id)}
                  className={`p-4 rounded-2xl border text-center transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-[#7df56e]/10 active:scale-[0.97] cursor-pointer relative ${
                    active
                      ? "bg-[#7df56e]/15 border-[#7df56e] text-white font-bold shadow-[0_0_20px_rgba(125,245,110,0.15)] ring-1 ring-[#7df56e]/30"
                      : "bg-black/40 border-white/10 text-zinc-300 hover:border-[#7df56e]/40 hover:bg-white/5"
                  }`}
                >
                  <span className="block text-xs font-bold">{plan.name} ({plan.badge})</span>
                  <span className="text-[11px] text-[#7df56e] font-bold mt-0.5 block">{plan.price} {currencyShort}</span>
                  {active && (
                    <div className="absolute top-2 left-2 w-4 h-4 rounded-full bg-[#7df56e] text-black flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* AI Addons Group */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-[#7df56e]" />
            <span className="text-xs font-bold text-white uppercase tracking-wider">
              {t.pricing.aiAddonsLabel}
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {AI_ADDONS.map((addon) => {
              const active = selectedAddons.includes(addon.id);
              const addonName = lang === "ar" ? addon.nameAr : addon.nameEn;
              return (
                <button
                  key={addon.id}
                  type="button"
                  onClick={() => toggleAddon(addon.id)}
                  className={`flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-[#7df56e]/10 active:scale-[0.98] cursor-pointer ${
                    lang === "ar" ? "text-right" : "text-left"
                  } ${
                    active
                      ? "bg-[#7df56e]/15 border-[#7df56e] text-white shadow-[0_0_20px_rgba(125,245,110,0.15)] ring-1 ring-[#7df56e]/30"
                      : "bg-black/40 border-white/10 text-zinc-300 hover:border-[#7df56e]/40 hover:bg-white/5"
                  }`}
                >
                  <div>
                    <span className="block text-xs font-bold">{addonName}</span>
                    <span className="text-[11px] text-[#7df56e] font-semibold">+{addon.price} {currencyShort}</span>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-all ${
                      active ? "bg-[#7df56e] text-black scale-105 shadow-sm shadow-[#7df56e]/50" : "border border-white/20 text-zinc-500"
                    }`}
                  >
                    {active ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Extra Services Group */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <Layers className="w-4 h-4 text-[#7df56e]" />
            <span className="text-xs font-bold text-white uppercase tracking-wider">
              {t.pricing.otherServicesLabel}
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {EXTRA_SERVICES.map((addon) => {
              const active = selectedAddons.includes(addon.id);
              const addonName = lang === "ar" ? addon.nameAr : addon.nameEn;
              return (
                <button
                  key={addon.id}
                  type="button"
                  onClick={() => toggleAddon(addon.id)}
                  className={`flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-[#7df56e]/10 active:scale-[0.98] cursor-pointer ${
                    lang === "ar" ? "text-right" : "text-left"
                  } ${
                    active
                      ? "bg-[#7df56e]/15 border-[#7df56e] text-white shadow-[0_0_20px_rgba(125,245,110,0.15)] ring-1 ring-[#7df56e]/30"
                      : "bg-black/40 border-white/10 text-zinc-300 hover:border-[#7df56e]/40 hover:bg-white/5"
                  }`}
                >
                  <div>
                    <span className="block text-xs font-bold">{addonName}</span>
                    <span className="text-[11px] text-[#7df56e] font-semibold">+{addon.price} {currencyShort}</span>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-all ${
                      active ? "bg-[#7df56e] text-black scale-105 shadow-sm shadow-[#7df56e]/50" : "border border-white/20 text-zinc-500"
                    }`}
                  >
                    {active ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Calculation Result Footer */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs text-zinc-400 block">{t.pricing.totalEstimate}</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-4xl font-black text-[#7df56e] font-display">{totalCalculated}</span>
              <span className="text-sm font-bold text-zinc-200">{currencySymbol}</span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleCustomQuoteWhatsApp}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#7df56e] text-black font-extrabold text-sm hover:bg-[#7df56e]/90 transition-all duration-200 shadow-xl shadow-[#7df56e]/20 flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>{t.pricing.orderViaWhatsapp}</span>
            {lang === "ar" ? <ArrowUpLeft className="w-4 h-4 stroke-[2.5]" /> : <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />}
          </button>
        </div>
      </div>
    </section>
  );
}
