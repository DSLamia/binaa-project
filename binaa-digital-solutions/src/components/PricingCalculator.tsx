import { useState } from "react";
import { motion } from "motion/react";
import { Check, Info, Calculator, MessageSquare, AlertCircle } from "lucide-react";
import { TranslationDict } from "../translations";

interface PricingCalculatorProps {
  lang: "ar" | "en";
  t: TranslationDict;
  dir: "rtl" | "ltr";
}

type PackageKey = "none" | "starter" | "business" | "premium";

export default function PricingCalculator({ lang, t, dir }: PricingCalculatorProps) {
  const isRtl = dir === "rtl";

  // State for Interactive Calculator - allows selecting "none" as base package
  const [selectedPackage, setSelectedPackage] = useState<PackageKey>("business");
  const [addonChatbot, setAddonChatbot] = useState(false);
  const [addonSearch, setAddonSearch] = useState(false);
  const [addonAutomation, setAddonAutomation] = useState(false);
  const [srvPowerBi, setSrvPowerBi] = useState(false);
  const [srvDataClean, setSrvDataClean] = useState(false);
  const [srvLogo, setSrvLogo] = useState(false);
  const [srvAcademic, setSrvAcademic] = useState(false);

  // Core base starting prices as requested
  const basePrices: Record<PackageKey, number> = {
    none: 0,
    starter: 699,
    business: 1899,
    premium: 3999,
  };

  // Upgrades prices
  const chatbotPrice = 1000;
  const searchPrice = 1000;
  const automationPrice = 1500;
  const powerBiPrice = 1200;
  const dataCleanPrice = 800;
  const logoPrice = 800;
  const academicPrice = 700;

  // Compute total
  const calculateTotal = () => {
    let total = basePrices[selectedPackage];
    if (addonChatbot) total += chatbotPrice;
    if (addonSearch) total += searchPrice;
    if (addonAutomation) total += automationPrice;
    if (srvPowerBi) total += powerBiPrice;
    if (srvDataClean) total += dataCleanPrice;
    if (srvLogo) total += logoPrice;
    if (srvAcademic) total += academicPrice;
    return total;
  };

  const handleSendWhatsAppOrder = () => {
    const total = calculateTotal();
    const packageName = selectedPackage === "none"
      ? (lang === "ar" ? "بدون باقة أساسية (خدمات منفردة)" : "No Base Package (Individual Services)")
      : selectedPackage === "starter" 
        ? t.pricing.starter.title 
        : selectedPackage === "business" 
          ? t.pricing.business.title 
          : t.pricing.premium.title;

    let items = [];
    if (addonChatbot) items.push(lang === "ar" ? "• شات بوت ذكي (+1,000 ر.س)" : "• AI Chatbot (+1,000 SAR)");
    if (addonSearch) items.push(lang === "ar" ? "• نظام بحث ذكي (+1,000 ر.س)" : "• Smart Search (+1,000 SAR)");
    if (addonAutomation) items.push(lang === "ar" ? "• أتمتة العمليات بالذكاء الاصطناعي (+1,500 ر.س)" : "• AI Workflow Automation (+1,500 SAR)");
    if (srvPowerBi) items.push(lang === "ar" ? "• لوحة تحكم Power BI تفاعلية (+1,200 ر.س)" : "• Interactive Power BI Dashboard (+1,200 SAR)");
    if (srvDataClean) items.push(lang === "ar" ? "• تنظيف وهيكلة البيانات (+800 ر.س)" : "• Data Cleaning & Modeling (+800 SAR)");
    if (srvLogo) items.push(lang === "ar" ? "• تصميم متجر سلة احترافي (+800 ر.س)" : "• Salla Store Setup (+800 SAR)");
    if (srvAcademic) items.push(lang === "ar" ? "• باقة مخصصة لمشاريع التخرج الطلابية (+700 ر.س)" : "• Student Graduation Package (+700 SAR)");

    const packagePriceStr = basePrices[selectedPackage].toLocaleString();

    const arabicMsg = `السلام عليكم منصة بناء للحلول الرقمية،

أود الاستفسار وحجز موعد استشارة لمشروعي بالتفاصيل المخصصة التالية:

📌 الباقة الأساسية:
- ${packageName} (${packagePriceStr} ر.س)

${items.length > 0 ? `⚙️ الإضافات والخدمات المخصصة:\n${items.join("\n")}` : ""}

---------------------------------------
💰 التكلفة التقديرية الإجمالية للمشروع:
~ ${total.toLocaleString()} ر.س

أرغب في ترتيب مكالمة استشارة عبر الواتساب لمناقشة المتطلبات وتأكيد نطاق العمل والجدول الزمني. شكراً لكم.`;

    const englishMsg = `Hello BINAA Digital Solutions,

I'd like to consult on a project with the following custom requirements:

📌 Selected Base Package:
- ${packageName} (${packagePriceStr} SAR)

${items.length > 0 ? `⚙️ Selected Upgrades & Add-ons:\n${items.join("\n")}` : ""}

---------------------------------------
💰 Total Estimated Project Cost:
~ ${total.toLocaleString()} SAR

I'd like to schedule a consultation on WhatsApp to confirm scope and timeline. Thank you!`;

    const msg = encodeURIComponent(lang === "ar" ? arabicMsg : englishMsg);
    window.open(`https://wa.me/966536945897?text=${msg}`, "_blank");
  };

  const handleSelectPackageCard = (pkg: PackageKey) => {
    setSelectedPackage(pkg);
    const element = document.getElementById("cost-calculator");
    if (element) {
      const offset = 100;
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
    <section id="pricing" className="py-20 bg-[#000000] relative border-b border-[#14213d]">
      {/* Dynamic ambient background glows */}
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-[#14213d] rounded-full blur-[140px] pointer-events-none opacity-50" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-[#7df56e]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header matching video frame 00:17 */}
        <div className={`max-w-3xl mb-12 flex flex-col ${isRtl ? "text-right" : "text-left"}`}>
          <div className="text-xs font-mono font-bold text-[#7df56e] mb-2 tracking-wider">
            {lang === "ar" 
              ? "لا نفرض عليك باقات جاهزة — اختر ما تحتاجه فقط واحصل على تقدير فوري." 
              : "No Rigid Packages — Pick What You Need & Get an Instant Estimate."}
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-black text-white">
            {lang === "ar" ? "الأسعار تبدأ من" : "Pricing Starts From"}
          </h2>
        </div>

        {/* Clear Disclaimer Note */}
        <div className="mb-10 p-4 rounded-2xl bg-[#14213d] border border-[#7df56e]/40 flex items-start sm:items-center gap-3 text-xs sm:text-sm text-zinc-100 shadow-md">
          <Info className="w-5 h-5 text-[#7df56e] shrink-0 mt-0.5 sm:mt-0" />
          <p className="leading-relaxed font-medium">
            {t.pricing.helpText}
          </p>
        </div>

        {/* 3 Main Tier Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-20 items-stretch">
          
          {/* Starter Package Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`rounded-3xl p-7 bg-[#14213d]/60 border transition-all duration-300 flex flex-col justify-between ${
              selectedPackage === "starter" 
                ? "border-[#7df56e] shadow-xl shadow-[#7df56e]/10" 
                : "border-white/10 hover:border-[#7df56e]/40"
            }`}
          >
            <div>
              <span className="text-[11px] font-bold text-zinc-300 uppercase tracking-widest mb-2 block">
                {lang === "ar" ? "للأفراد والمشاريع المصغرة" : "Micro Projects"}
              </span>
              <h3 className="text-2xl font-display font-black text-white mb-4">
                {t.pricing.starter.title}
              </h3>
              <div className="flex items-baseline gap-2 mb-5">
                <span className="text-3xl sm:text-4xl font-display font-black text-[#7df56e]">{t.pricing.starter.price}</span>
                <span className="text-xs font-bold text-zinc-300">{t.pricing.sar}</span>
              </div>
              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6 border-b border-white/10 pb-5">
                {t.pricing.starter.desc}
              </p>
              <ul className="space-y-3 mb-6">
                {t.pricing.starter.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-200">
                    <Check className="w-4 h-4 text-[#7df56e] shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button
              id="select-package-starter"
              onClick={() => handleSelectPackageCard("starter")}
              className="w-full py-3.5 rounded-xl font-bold text-xs bg-[#14213d] hover:bg-[#14213d]/80 text-[#7df56e] border border-[#7df56e]/40 transition-all cursor-pointer mt-auto"
            >
              {t.pricing.selectPackage}
            </button>
          </motion.div>

          {/* Business Package Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`rounded-3xl p-7 bg-[#14213d] border-2 relative flex flex-col justify-between shadow-2xl transition-all duration-300 ${
              selectedPackage === "business"
                ? "border-[#7df56e] shadow-[#7df56e]/20"
                : "border-[#7df56e]/40 hover:border-[#7df56e]"
            }`}
          >
            {/* Popular Badge */}
            <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-[#7df56e] text-[#000000] text-[10px] font-black uppercase px-4 py-1 rounded-full tracking-wider shadow-md">
              {t.pricing.popularBadge}
            </div>

            <div>
              <span className="text-[11px] font-bold text-[#7df56e] uppercase tracking-widest mb-2 block pt-1">
                {lang === "ar" ? "الخيار الأكثر طلباً" : "Most Popular"}
              </span>
              <h3 className="text-2xl font-display font-black text-white mb-4">
                {t.pricing.business.title}
              </h3>
              <div className="flex items-baseline gap-2 mb-5">
                <span className="text-3xl sm:text-4xl font-display font-black text-[#7df56e] text-glow">{t.pricing.business.price}</span>
                <span className="text-xs font-bold text-zinc-300">{t.pricing.sar}</span>
              </div>
              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6 border-b border-white/10 pb-5">
                {t.pricing.business.desc}
              </p>
              <ul className="space-y-3 mb-6">
                {t.pricing.business.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-100">
                    <Check className="w-4 h-4 text-[#7df56e] shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button
              id="select-package-business"
              onClick={() => handleSelectPackageCard("business")}
              className="w-full py-3.5 rounded-xl font-black text-xs bg-[#7df56e] hover:bg-[#6be05c] text-[#000000] shadow-xl transition-all cursor-pointer mt-auto"
            >
              {t.pricing.selectPackage}
            </button>
          </motion.div>

          {/* Premium Package Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`rounded-3xl p-7 bg-[#14213d]/60 border transition-all duration-300 flex flex-col justify-between ${
              selectedPackage === "premium"
                ? "border-[#7df56e] shadow-xl shadow-[#7df56e]/10"
                : "border-white/10 hover:border-[#7df56e]/40"
            }`}
          >
            <div>
              <span className="text-[11px] font-bold text-zinc-300 uppercase tracking-widest mb-2 block">
                {lang === "ar" ? "للأنظمة والمؤسسات الكبرى" : "Enterprise Solutions"}
              </span>
              <h3 className="text-2xl font-display font-black text-white mb-4">
                {t.pricing.premium.title}
              </h3>
              <div className="flex items-baseline gap-2 mb-5">
                <span className="text-3xl sm:text-4xl font-display font-black text-[#7df56e]">{t.pricing.premium.price}</span>
                <span className="text-xs font-bold text-zinc-300">{t.pricing.sar}</span>
              </div>
              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6 border-b border-white/10 pb-5">
                {t.pricing.premium.desc}
              </p>
              <ul className="space-y-3 mb-6">
                {t.pricing.premium.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-200">
                    <Check className="w-4 h-4 text-[#7df56e] shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button
              id="select-package-premium"
              onClick={() => handleSelectPackageCard("premium")}
              className="w-full py-3.5 rounded-xl font-bold text-xs bg-[#14213d] hover:bg-[#14213d]/80 text-[#7df56e] border border-[#7df56e]/40 transition-all cursor-pointer mt-auto"
            >
              {t.pricing.selectPackage}
            </button>
          </motion.div>

        </div>

        {/* INTERACTIVE COST CALCULATOR */}
        <div id="cost-calculator" className="rounded-3xl border border-[#7df56e]/30 bg-[#14213d]/90 backdrop-blur-md p-6 sm:p-9 relative overflow-hidden">
          
          {/* Header Title for calculator */}
          <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-5">
            <div className="p-3 rounded-2xl bg-[#7df56e] text-[#000000]">
              <Calculator className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <h3 className="text-xl font-display font-black text-white">
                {t.pricing.calculatorTitle}
              </h3>
              <p className="text-zinc-300 text-xs mt-0.5">
                {t.pricing.calculatorSubtitle}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Options Selector panel (8 columns) */}
            <div className="lg:col-span-8 space-y-7">
              
              {/* Option 1: Base Package Selection (Allows None) */}
              <div>
                <label className="text-xs font-bold text-white block mb-3">
                  {t.pricing.selectedPackageLabel}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  <button
                    id="calc-pkg-none"
                    onClick={() => setSelectedPackage("none")}
                    className={`p-3 rounded-2xl border text-right transition-all cursor-pointer ${
                      selectedPackage === "none"
                        ? "bg-[#7df56e] text-[#000000] border-[#7df56e] font-bold"
                        : "bg-[#000000]/60 border-white/10 text-zinc-300 hover:border-[#7df56e]/40"
                    }`}
                  >
                    <div className={`text-[10px] ${selectedPackage === "none" ? "text-black/80 font-bold" : "text-zinc-400"}`}>
                      {lang === "ar" ? "بدون باقة" : "No Package"}
                    </div>
                    <div className="font-black text-xs">
                      {lang === "ar" ? "خدمات منفردة" : "Standalone Only"}
                    </div>
                    <div className={`text-xs font-bold mt-1 ${selectedPackage === "none" ? "text-black" : "text-[#7df56e]"}`}>
                      0 {t.pricing.sar}
                    </div>
                  </button>

                  <button
                    id="calc-pkg-starter"
                    onClick={() => setSelectedPackage("starter")}
                    className={`p-3 rounded-2xl border text-right transition-all cursor-pointer ${
                      selectedPackage === "starter"
                        ? "bg-[#7df56e] text-[#000000] border-[#7df56e] font-bold"
                        : "bg-[#000000]/60 border-white/10 text-zinc-300 hover:border-[#7df56e]/40"
                    }`}
                  >
                    <div className={`text-[10px] ${selectedPackage === "starter" ? "text-black/80 font-bold" : "text-zinc-400"}`}>
                      {lang === "ar" ? "الباقة الأولى" : "Starter"}
                    </div>
                    <div className="font-black text-xs">Starter</div>
                    <div className={`text-xs font-bold mt-1 ${selectedPackage === "starter" ? "text-black" : "text-[#7df56e]"}`}>
                      699 {t.pricing.sar}
                    </div>
                  </button>

                  <button
                    id="calc-pkg-business"
                    onClick={() => setSelectedPackage("business")}
                    className={`p-3 rounded-2xl border text-right transition-all cursor-pointer ${
                      selectedPackage === "business"
                        ? "bg-[#7df56e] text-[#000000] border-[#7df56e] font-bold"
                        : "bg-[#000000]/60 border-white/10 text-zinc-300 hover:border-[#7df56e]/40"
                    }`}
                  >
                    <div className={`text-[10px] ${selectedPackage === "business" ? "text-black/80 font-bold" : "text-zinc-400"}`}>
                      {lang === "ar" ? "الباقة الثانية" : "Business"}
                    </div>
                    <div className="font-black text-xs">Business</div>
                    <div className={`text-xs font-bold mt-1 ${selectedPackage === "business" ? "text-black" : "text-[#7df56e]"}`}>
                      1,899 {t.pricing.sar}
                    </div>
                  </button>

                  <button
                    id="calc-pkg-premium"
                    onClick={() => setSelectedPackage("premium")}
                    className={`p-3 rounded-2xl border text-right transition-all cursor-pointer ${
                      selectedPackage === "premium"
                        ? "bg-[#7df56e] text-[#000000] border-[#7df56e] font-bold"
                        : "bg-[#000000]/60 border-white/10 text-zinc-300 hover:border-[#7df56e]/40"
                    }`}
                  >
                    <div className={`text-[10px] ${selectedPackage === "premium" ? "text-black/80 font-bold" : "text-zinc-400"}`}>
                      {lang === "ar" ? "الباقة الثالثة" : "Premium"}
                    </div>
                    <div className="font-black text-xs">Premium</div>
                    <div className={`text-xs font-bold mt-1 ${selectedPackage === "premium" ? "text-black" : "text-[#7df56e]"}`}>
                      3,999 {t.pricing.sar}
                    </div>
                  </button>
                </div>
              </div>

              {/* Option 2: AI Upgrades Checkbox */}
              <div>
                <label className="text-xs font-bold text-white block mb-3">
                  {t.pricing.aiAddonsLabel}
                </label>
                <div className="space-y-2.5">
                  <label className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#000000]/60 hover:bg-[#000000]/80 transition-all border border-white/10 cursor-pointer">
                    <input
                      id="calc-addon-chatbot"
                      type="checkbox"
                      checked={addonChatbot}
                      onChange={(e) => setAddonChatbot(e.target.checked)}
                      className="w-4 h-4 rounded border-zinc-700 bg-zinc-800 text-[#7df56e] focus:ring-[#7df56e] cursor-pointer"
                    />
                    <span className="text-xs text-zinc-200 font-semibold">
                      {t.pricing.chatbotAddon}
                    </span>
                  </label>

                  <label className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#000000]/60 hover:bg-[#000000]/80 transition-all border border-white/10 cursor-pointer">
                    <input
                      id="calc-addon-search"
                      type="checkbox"
                      checked={addonSearch}
                      onChange={(e) => setAddonSearch(e.target.checked)}
                      className="w-4 h-4 rounded border-zinc-700 bg-zinc-800 text-[#7df56e] focus:ring-[#7df56e] cursor-pointer"
                    />
                    <span className="text-xs text-zinc-200 font-semibold">
                      {t.pricing.searchAddon}
                    </span>
                  </label>

                  <label className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#000000]/60 hover:bg-[#000000]/80 transition-all border border-white/10 cursor-pointer">
                    <input
                      id="calc-addon-automation"
                      type="checkbox"
                      checked={addonAutomation}
                      onChange={(e) => setAddonAutomation(e.target.checked)}
                      className="w-4 h-4 rounded border-zinc-700 bg-zinc-800 text-[#7df56e] focus:ring-[#7df56e] cursor-pointer"
                    />
                    <span className="text-xs text-zinc-200 font-semibold">
                      {t.pricing.automationAddon}
                    </span>
                  </label>
                </div>
              </div>

              {/* Option 3: Individual Services Upgrades */}
              <div>
                <label className="text-xs font-bold text-white block mb-3">
                  {t.pricing.otherServicesLabel}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#000000]/60 hover:bg-[#000000]/80 transition-all border border-white/10 cursor-pointer">
                    <input
                      id="calc-srv-powerbi"
                      type="checkbox"
                      checked={srvPowerBi}
                      onChange={(e) => setSrvPowerBi(e.target.checked)}
                      className="w-4 h-4 rounded border-zinc-700 bg-zinc-800 text-[#7df56e] focus:ring-[#7df56e] cursor-pointer"
                    />
                    <span className="text-xs text-zinc-200 font-semibold">
                      {t.pricing.powerBiService}
                    </span>
                  </label>

                  <label className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#000000]/60 hover:bg-[#000000]/80 transition-all border border-white/10 cursor-pointer">
                    <input
                      id="calc-srv-dataclean"
                      type="checkbox"
                      checked={srvDataClean}
                      onChange={(e) => setSrvDataClean(e.target.checked)}
                      className="w-4 h-4 rounded border-zinc-700 bg-zinc-800 text-[#7df56e] focus:ring-[#7df56e] cursor-pointer"
                    />
                    <span className="text-xs text-zinc-200 font-semibold">
                      {t.pricing.dataCleanService}
                    </span>
                  </label>

                  <label className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#000000]/60 hover:bg-[#000000]/80 transition-all border border-white/10 cursor-pointer">
                    <input
                      id="calc-srv-logo"
                      type="checkbox"
                      checked={srvLogo}
                      onChange={(e) => setSrvLogo(e.target.checked)}
                      className="w-4 h-4 rounded border-zinc-700 bg-zinc-800 text-[#7df56e] focus:ring-[#7df56e] cursor-pointer"
                    />
                    <span className="text-xs text-zinc-200 font-semibold">
                      {t.pricing.logoService}
                    </span>
                  </label>

                  <label className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#000000]/60 hover:bg-[#000000]/80 transition-all border border-white/10 cursor-pointer">
                    <input
                      id="calc-srv-academic"
                      type="checkbox"
                      checked={srvAcademic}
                      onChange={(e) => setSrvAcademic(e.target.checked)}
                      className="w-4 h-4 rounded border-zinc-700 bg-zinc-800 text-[#7df56e] focus:ring-[#7df56e] cursor-pointer"
                    />
                    <span className="text-xs text-zinc-200 font-semibold">
                      {t.pricing.academicService}
                    </span>
                  </label>
                </div>
              </div>

            </div>

            {/* Total Cost Display Panel (4 columns) */}
            <div className="lg:col-span-4 flex flex-col justify-between bg-[#000000]/85 rounded-3xl p-6 border border-[#7df56e]/30 relative">
              
              <div>
                <span className="text-zinc-400 text-xs font-semibold uppercase tracking-wider block mb-2">
                  {t.pricing.totalEstimate}
                </span>
                
                {/* Total Cost */}
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl sm:text-5xl font-display font-black text-white text-glow">
                    {calculateTotal().toLocaleString()}
                  </span>
                  <span className="text-base font-bold text-[#7df56e]">
                    {t.pricing.sar}
                  </span>
                </div>

                {/* Scope breakdown receipt */}
                <div className="border-t border-white/10 pt-4 space-y-2.5 mb-6">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-zinc-300 font-medium">
                      {selectedPackage === "none"
                        ? (lang === "ar" ? "خدمات منفردة" : "Standalone Services")
                        : selectedPackage === "starter" 
                          ? t.pricing.starter.title 
                          : selectedPackage === "business" 
                            ? t.pricing.business.title 
                            : t.pricing.premium.title}
                    </span>
                    <span className="text-white font-bold">{basePrices[selectedPackage].toLocaleString()} {t.pricing.sar}</span>
                  </div>

                  {addonChatbot && (
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-zinc-300">{lang === "ar" ? "• شات بوت ذكي" : "• AI Chatbot"}</span>
                      <span className="text-[#7df56e]">+{chatbotPrice} {t.pricing.sar}</span>
                    </div>
                  )}
                  {addonSearch && (
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-zinc-300">{lang === "ar" ? "• بحث ذكي" : "• AI Search & Summary"}</span>
                      <span className="text-[#7df56e]">+{searchPrice} {t.pricing.sar}</span>
                    </div>
                  )}
                  {addonAutomation && (
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-zinc-300">{lang === "ar" ? "• أتمتة عمليات" : "• AI Automation"}</span>
                      <span className="text-[#7df56e]">+{automationPrice} {t.pricing.sar}</span>
                    </div>
                  )}
                  {srvPowerBi && (
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-zinc-300">{lang === "ar" ? "• لوحة Power BI" : "• Power BI Dashboard"}</span>
                      <span className="text-[#7df56e]">+{powerBiPrice} {t.pricing.sar}</span>
                    </div>
                  )}
                  {srvDataClean && (
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-zinc-300">{lang === "ar" ? "• تنظيف البيانات" : "• Data Cleaning"}</span>
                      <span className="text-[#7df56e]">+{dataCleanPrice} {t.pricing.sar}</span>
                    </div>
                  )}
                  {srvLogo && (
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-zinc-300">{lang === "ar" ? "• متجر سلة احترافي" : "• Salla Setup"}</span>
                      <span className="text-[#7df56e]">+{logoPrice} {t.pricing.sar}</span>
                    </div>
                  )}
                  {srvAcademic && (
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-zinc-300">{lang === "ar" ? "• باقة الطالب" : "• Student Pack"}</span>
                      <span className="text-[#7df56e]">+{academicPrice} {t.pricing.sar}</span>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <button
                  id="whatsapp-calculator-submit"
                  onClick={handleSendWhatsAppOrder}
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#7df56e] hover:bg-[#6be05c] text-[#000000] font-black rounded-xl shadow-xl shadow-[#7df56e]/20 cursor-pointer text-xs sm:text-sm"
                >
                  <MessageSquare className="w-4 h-4 shrink-0 text-[#000000]" />
                  <span>{t.pricing.orderViaWhatsapp}</span>
                </button>

                <div className="flex gap-2 items-start mt-3 text-[10px] text-zinc-400 leading-normal">
                  <AlertCircle className="w-3.5 h-3.5 text-[#7df56e] shrink-0 mt-0.5" />
                  <span>{t.pricing.helpText}</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
