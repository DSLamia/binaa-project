export interface TranslationDict {
  nav: {
    services: string;
    portfolio: string;
    pricing: string;
    whyUs: string;
    faq: string;
    contact: string;
    ctaWhatsapp: string;
  };
  hero: {
    badge: string;
    titleFirst: string;
    titleAccent: string;
    subtitle: string;
    ctaWhatsapp: string;
    ctaPortfolio: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: Array<{
      id: string;
      title: string;
      desc: string;
      bullets: string[];
    }>;
  };
  pricing: {
    title: string;
    subtitle: string;
    sar: string;
    popularBadge: string;
    selectPackage: string;
    starter: {
      title: string;
      price: string;
      desc: string;
      bullets: string[];
    };
    business: {
      title: string;
      price: string;
      desc: string;
      bullets: string[];
    };
    premium: {
      title: string;
      price: string;
      desc: string;
      bullets: string[];
    };
    calculatorTitle: string;
    calculatorSubtitle: string;
    selectedPackageLabel: string;
    aiAddonsLabel: string;
    chatbotAddon: string;
    searchAddon: string;
    automationAddon: string;
    otherServicesLabel: string;
    powerBiService: string;
    dataCleanService: string;
    logoService: string;
    academicService: string;
    totalEstimate: string;
    orderViaWhatsapp: string;
    helpText: string;
  };
  portfolio: {
    title: string;
    subtitle: string;
    filterAll: string;
    filterWeb: string;
    filterDashboards: string;
    filterAI: string;
    techStack: string;
    livePreview: string;
    projects: Array<{
      id: string;
      title: string;
      desc: string;
      category: 'web' | 'dashboards' | 'ai';
      image: string;
      tech: string[];
      stats?: string;
    }>;
  };
  whyUs: {
    title: string;
    subtitle: string;
    features: Array<{
      title: string;
      desc: string;
    }>;
  };
  workflow: {
    title: string;
    subtitle: string;
    steps: Array<{
      num: string;
      title: string;
      desc: string;
    }>;
  };
  faq: {
    title: string;
    subtitle: string;
    items: Array<{
      q: string;
      a: string;
    }>;
  };
  contact: {
    title: string;
    subtitle: string;
    whatsappNumber: string;
    tiktokHandle: string;
  };
  footer: {
    desc: string;
    quickLinks: string;
    socials: string;
    rights: string;
  };
}

export const arTranslations: TranslationDict = {
  nav: {
    services: "الخدمات",
    portfolio: "الأعمال",
    pricing: "الأسعار",
    whyUs: "لماذا نحن",
    faq: "الأسئلة الشائعة",
    contact: "اتصل بنا",
    ctaWhatsapp: "تواصل عبر واتساب",
  },
  hero: {
    badge: "⚡ بناء للحلول الرقمية",
    titleFirst: "نبني الحلول الرقمية",
    titleAccent: "المستقبلية",
    subtitle: "تطوير برمجيات حديثة ومواقع احترافية، تصميم متاجر سلة، لوحات تحكم تفاعلية، وحلول الذكاء الاصطناعي بأعلى معايير الدقة والسرعة.",
    ctaWhatsapp: "تواصل عبر واتساب مباشر",
    ctaPortfolio: "تصفح أعمالنا",
  },
  services: {
    title: "خدماتنا الرقمية",
    subtitle: "حلول برمجية متكاملة مصممة بأحدث التقنيات لدعم نمو مشروعك",
    items: [
      {
        id: "web",
        title: "تطوير مواقع",
        desc: "مواقع وتطبيقات ويب سريعة جداً ومصممة بأحدث الأطر البرمجية لضمان تجربة مستخدم استثنائية.",
        bullets: [
          "واجهات عصرية متجاوبة كلياً مع الجوال",
          "أداء وسرعة تحميل فائقة",
          "لوحة تحكم مرنة لإدارة المحتوى",
          "ربط قواعد البيانات والأمان السحابي"
        ]
      },
      {
        id: "ai",
        title: "حلول الذكاء الاصطناعي والشات بوت",
        desc: "دمج نماذج الذكاء الاصطناعي المتطورة لبناء مساعدين ذكيين وروبوتات محادثة أوتوماتيكية للعملاء.",
        bullets: [
          "روبوتات محادثة تفاعلية (Chatbots)",
          "أتمتة العمليات والردود الذكية",
          "تحليل وتلخيص البيانات والمستندات",
          "ربط الأنظمة بنماذج الذكاء الاصطناعي"
        ]
      },
      {
        id: "dashboards",
        title: "لوحات التحكم وتحليل البيانات",
        desc: "بناء لوحات تحكم تفاعلية متطورة لعرض البيانات وتتبع مؤشرات الأداء الرئيسية واتخاذ القرارات.",
        bullets: [
          "تمثيل مرئي تفاعلي للبيانات (Data Viz)",
          "تتبع مؤشرات الأداء (KPIs) مباشرة",
          "ربط مباشر بمصادر البيانات المتعددة",
          "تقارير دورية مؤتمتة وتصدير البيانات"
        ]
      },
      {
        id: "salla",
        title: "تصميم متاجر سلة",
        desc: "تجهيز وتصميم واجهات متاجر سلة الاحترافية وتخصيص تجربة الشراء بما يرفع من نسب المبيعات وثقة العملاء.",
        bullets: [
          "تصميم واجهات متجر سلة فريدة",
          "تهيئة خيارات الدفع الإلكتروني والتوصيل",
          "تحسين تجربة وسرعة الشراء",
          "تجهيز المنتجات وتنسيق الأقسام"
        ]
      }
    ]
  },
  pricing: {
    title: "أسعار واضحة وباقات مرنة",
    subtitle: "اختر الباقة المناسبة لمشروعك، أو استخدم حاسبة الأسعار التفاعلية بالأسفل لتخصيص الخدمة فورياً",
    sar: "ر.س",
    popularBadge: "الأكثر طلباً ⭐",
    selectPackage: "تعديل وتفصيل الباقة ⚙️",
    starter: {
      title: "الباقة الأولى (Starter)",
      price: "تبدأ من 699",
      desc: "مثالية للأفراد والمشاريع الرقمية المصغرة لبدء التواجد الفعلي.",
      bullets: [
        "صفحة هبوط احترافية متجاوبة (Landing Page)",
        "تصميم متجاوب كلياً مع الجوال والأجهزة الذكية",
        "ربط الواتساب وسوشيال ميديا ولوكيشن جوجل",
        "دعم فني وتعديلات مجانية بعد التسليم"
      ],
    },
    business: {
      title: "الباقة الثانية (Business)",
      price: "تبدأ من 1899",
      desc: "الباقة المثالية للشركات الناشئة والمشاريع المتوسطة ومتاجر سلة.",
      bullets: [
        "موقع متكامل أو متجر سلة احترافي",
        "لوحة تحكم مخصصة وسهلة لإدارة المحتوى",
        "ربط قاعدة بيانات سحابية متقدمة",
        "سرعة تصفح فائقة وتجاوب كامل",
        "المساعدة في تهيئة الاستضافة والدومين",
        "دعم فني وتدريب كامل لفريقك"
      ],
    },
    premium: {
      title: "الباقة الثالثة (Premium)",
      price: "تبدأ من 3999",
      desc: "أنظمة برمجية سحابية متكاملة ولوحات تحكم متطورة للمؤسسات.",
      bullets: [
        "تطبيق ويب متكامل بنظام صلاحيات متعدد",
        "لوحة تحكم تفاعلية شاملة لمؤشرات الأداء",
        "ربط بوابات الدفع الإلكتروني والرسائل",
        "أتمتة العمليات بالذكاء الاصطناعي",
        "تقارير فورية وتصدير الملفات",
        "دعم فني فائق وممتد"
      ],
    },
    calculatorTitle: "🧮 حاسبة الأسعار التفاعلية",
    calculatorSubtitle: "اختر خدماتك المستقلة أو أضف ميزات الذكاء الاصطناعي للحصول على تقدير فوري لمشروعك!",
    selectedPackageLabel: "1. الباقة الأساسية (اختياري):",
    aiAddonsLabel: "2. ميزات الذكاء الاصطناعي (اختياري):",
    chatbotAddon: "شات بوت ذكي متكامل (Gemini Chatbot) [+1,000 ر.س]",
    searchAddon: "نظام بحث ذكي وتلخيص محتوى بالذكاء الاصطناعي [+1,000 ر.س]",
    automationAddon: "أتمتة عمليات الذكاء الاصطناعي الإشعارية [+1,500 ر.س]",
    otherServicesLabel: "3. خدمات إضافية منفصلة (اختياري):",
    powerBiService: "لوحة تحكم تفاعلية Power BI مع مؤشرات أداء [+1,200 ر.س]",
    dataCleanService: "تنظيف وهيكلة البيانات وتحليل البيانات البصرية [+800 ر.س]",
    logoService: "تطوير واجهات متجر سلة احترافي [+800 ر.س]",
    academicService: "باقة مخصصة لمشاريع التخرج والطلاب [+700 ر.س]",
    totalEstimate: "التكلفة التقديرية الإجمالية للمشروع:",
    orderViaWhatsapp: "إرسال تفاصيل الطلب وحجز موعد عبر واتساب",
    helpText: "* الأسعار الموضحة هي أسعار تقديرية وتعتمد على المتطلبات التفصيلية ونطاق العمل والجدول الزمني المحدد للمشروع.",
  },
  portfolio: {
    title: "معرض الأعمال المتميزة",
    subtitle: "نماذج حقيقية لمشاريع قمنا بتطويرها لعملائنا بلمسة إبداعية وتقنيات حديثة",
    filterAll: "الكل",
    filterWeb: "مواقع ومتاجر",
    filterDashboards: "لوحات تحكم",
    filterAI: "شات بوت وذكاء اصطناعي",
    techStack: "التقنيات المستخدمة:",
    livePreview: "تفاصيل المشروع عبر واتساب",
    projects: [
      {
        id: "proj1",
        title: "متجر ليليز للورود",
        desc: "متجر ورود فاخر بلمسة براند عالمية، تجربة شراء سلسة، وسلة شراء تفاعلية مع لوحة إدارة كاملة.",
        category: "web",
        image: "/rose-site.png",
        tech: ["Next.js", "Salla API", "Tailwind CSS"],
        stats: "متجر إلكتروني"
      },
      {
        id: "proj2",
        title: "مساعد الهدايا الذكي",
        desc: "شات بوت ذكي يفهم المناسبة ويقترح الهدايا المناسبة، ويُرشح المنتجات فوراً للعملاء.",
        category: "ai",
        image: "/chatbot.png",
        tech: ["Python", "Gemini API", "FastAPI"],
        stats: "شات بوت ذكي"
      },
      {
        id: "proj3",
        title: "لوحة تحليل البيانات",
        desc: "لوحة تحكم تفاعلية متطورة لتمثيل البيانات ، وتتبع مؤشرات الأداء الرئيسية (KPIs) وتحليل ألاداء بصرياً ومباشرة.",
        category: "dashboards",
        image: "/dashboard.png",
        tech: ["Power BI", "PostgreSQL", "Dashboard & BI"],
        stats: "Dashboard & BI"
      }
    ]
  },
  whyUs: {
    title: "لماذا تختار بناء للحلول الرقمية؟",
    subtitle: "نحن نركز على تقديم منتجات رقمية عالية الجودة تحقق نتائج ملموسة وتدعم نجاح مشروعك.",
    features: [
      {
        title: "✨ تصميم عصير وفخم",
        desc: "واجهات مريحة بصرياً ومصممة بأحدث معايير تجربة المستخدم لضمان سهولة التصفح والجاذبية."
      },
      {
        title: "🚀 سرعة فائقة وأداء عالي",
        desc: "كود برمجي خفيف ومنسق يضمن سرعة الاستجابة والتحميل الفوري على مختلف الأجهزة."
      },
      {
        title: "🧠 جاهزية للذكاء الاصطناعي",
        desc: "دمج متقدم لنماذج الذكاء الاصطناعي لتوفير ميزات التلخيص والشات بوت والأتمتة."
      },
      {
        title: "⚙️ بنية قابلة للتوسع",
        desc: "معمارية برمجية مبنية بأسلوب حديث يتيح لك إضافة ميزات جديدة مستقبلاً بكل سهولة."
      },
      {
        title: "🇸🇦 توافق مع السوق السعودي",
        desc: "فهم تكتيكي لمتطلبات الأعمال والمستهلك المحلي وإعدادات الدفع الإلكتروني."
      },
      {
        title: "📞 دعم فني ومتابعة مستمرة",
        desc: "مرافقة دائمًا بعد التسليم لضمان استقرار مشروعك وتدريب فريقك."
      }
    ]
  },
  workflow: {
    title: "خطوات تنفيذ مشروعك",
    subtitle: "آلية عمل واضحة ومنظمة تحول فكرتك إلى منتج رقمي يعمل بكفاءة",
    steps: [
      {
        num: "01",
        title: "تحديد المتطلبات والتخطيط",
        desc: "جلسة عصف ذهني لفهم أهدافك ورسم المخطط الأولي ونطاق العمل بدقة."
      },
      {
        num: "02",
        title: "التصميم وتجربة المستخدم",
        desc: "تصميم واجهات عصرية تتناسب مع هوية مشروعك وسريعة الاستخدام."
      },
      {
        num: "03",
        title: "التطوير والبرمجة",
        desc: "كتابة كود برمجي نظيف وسريع وربط قواعد البيانات والخدمات المضافة."
      },
      {
        num: "04",
        title: "الاختبار والإطلاق",
        desc: "فحص الأداء على مختلف الشاشات ورفع الموقع أو المتجر والتشغيل المباشر."
      }
    ]
  },
  faq: {
    title: "الأسئلة الشائعة",
    subtitle: "إجابات شائعة حول مدة التنفيذ وطريقة العمل والأسعار",
    items: [
      {
        q: "كم تستغرق مدة تنفيذ وتطوير الموقع؟",
        a: "تستغرق المشاريع المصغرة وصفحات الهبوط من 3 إلى 7 أيام عمل، بينما المواقع والمتاجر المتوسطة من 10 إلى 15 يوم عمل مع إطلاعك المباشر على التقدم."
      },
      {
        q: "كيف يتم دمج الذكاء الاصطناعي والشات بوت؟",
        a: "نقوم بربط النظام بنماذج Gemini لتقديم شات بوت تفاعلي يجيب على استفسارات العملاء ويعالج البيانات تلقائياً."
      },
      {
        q: "هل تصممون متاجر سلة وتخصيص واجهاتها؟",
        a: "نعم، نقدم خدمة تصميم متاجر سلة الاحترافية وتخصيص الألوان والواجهات وإعداد الأقسام لتكون جاهزة للبيع مباشرة."
      },
      {
        q: "ما هي طرق التواصل المتاحة لطلب الخدمات؟",
        a: "يمكنك التواصل المباشر والسريع معنا عبر حساب الواتساب الرسمي (0530792383) أو زيارة صفحتنا على تيك توك (binaa.digital)."
      }
    ]
  },
  contact: {
    title: "تواصل معنا مباشرة",
    subtitle: "نحن هنا لمساعدتك في بناء وتطوير مشروعك الرقمي القادم.",
    whatsappNumber: "0530792383",
    tiktokHandle: "binaa.digital"
  },
  footer: {
    desc: "منصة بناء للحلول الرقمية — تطوير مواقع، تصميم متاجر سلة، لوحات تحكم، وحلول الذكاء الاصطناعي.",
    quickLinks: "روابط سريعة",
    socials: "قنوات التواصل المباشر",
    rights: "جميع الحقوق محفوظة لمنصة بناء للحلول الرقمية © 2026."
  }
};

export const enTranslations: TranslationDict = {
  nav: {
    services: "Services",
    portfolio: "Portfolio",
    pricing: "Pricing",
    whyUs: "Why Us",
    faq: "FAQ",
    contact: "Contact",
    ctaWhatsapp: "Chat on WhatsApp",
  },
  hero: {
    badge: "⚡ BINAA — Digital Solutions",
    titleFirst: "We Build Future",
    titleAccent: "Digital Solutions",
    subtitle: "Developing high-speed web apps, Salla stores, interactive analytics dashboards, and cutting-edge AI integrations.",
    ctaWhatsapp: "Chat on WhatsApp Direct",
    ctaPortfolio: "Browse Portfolio",
  },
  services: {
    title: "Our Digital Services",
    subtitle: "Complete software capabilities designed to scale your business.",
    items: [
      {
        id: "web",
        title: "Web Development",
        desc: "Ultra-fast responsive websites and web apps engineered with modern tech stacks.",
        bullets: [
          "Modern responsive UI/UX design",
          "Blazing fast page load speeds",
          "Flexible CMS content management",
          "Database integration & cloud security"
        ]
      },
      {
        id: "ai",
        title: "AI Solutions & Chatbots",
        desc: "Integrating generative AI models for smart conversational bots and automated workflows.",
        bullets: [
          "Interactive conversational chatbots",
          "Smart automated response flows",
          "Data & document summarization",
          "System AI model API integration"
        ]
      },
      {
        id: "dashboards",
        title: "Data Dashboards & Analytics",
        desc: "Interactive visual dashboards tracking key metrics (KPIs) and operational performance.",
        bullets: [
          "Interactive Data Visualization",
          "Real-time KPI tracking",
          "Multi-source database connection",
          "Automated periodic reporting"
        ]
      },
      {
        id: "salla",
        title: "Salla Stores Design",
        desc: "Custom designing professional Salla store interfaces to boost conversions and brand trust.",
        bullets: [
          "Unique custom Salla theme layouts",
          "Payment gateway & shipping setup",
          "Optimized checkout speed",
          "Product catalog formatting"
        ]
      }
    ]
  },
  pricing: {
    title: "Transparent & Flexible Pricing",
    subtitle: "Select your base package or use the interactive calculator to customize your project scope.",
    sar: "SAR",
    popularBadge: "Most Popular ⭐",
    selectPackage: "Configure Package ⚙️",
    starter: {
      title: "Starter Package",
      price: "Starts from 699",
      desc: "Ideal for individuals and small projects looking for an online presence.",
      bullets: [
        "1 High-converting responsive Landing Page",
        "Mobile & desktop full responsiveness",
        "WhatsApp & Social media location links",
        "Post-delivery technical support"
      ],
    },
    business: {
      title: "Business Package",
      price: "Starts from 1899",
      desc: "Perfect for growing startups, SMBs, and professional Salla stores.",
      bullets: [
        "Full custom website or Salla store",
        "Custom easy CMS admin dashboard",
        "Advanced cloud database integration",
        "Ultra-fast speed & high performance",
        "Hosting & domain setup assistance",
        "Free technical support & training"
      ],
    },
    premium: {
      title: "Premium Package",
      price: "Starts from 3999",
      desc: "Full cloud systems and enterprise-grade analytical dashboards.",
      bullets: [
        "Multi-tier user role application platform",
        "Interactive KPI performance dashboard",
        "Payment gateways & API triggers",
        "AI workflow automations",
        "Instant data reporting & export",
        "Dedicated ongoing support"
      ],
    },
    calculatorTitle: "🧮 Interactive Project Calculator",
    calculatorSubtitle: "Toggle individual services or AI add-ons for an instant project cost projection!",
    selectedPackageLabel: "1. Base Package (Optional):",
    aiAddonsLabel: "2. AI Capabilities (Optional):",
    chatbotAddon: "Custom Generative AI Chatbot (Gemini Chatbot) [+1,000 SAR]",
    searchAddon: "Intelligent AI Search & Summarization [+1,000 SAR]",
    automationAddon: "AI Notification & Workflow Automation [+1,500 SAR]",
    otherServicesLabel: "3. Standalone Add-ons (Optional):",
    powerBiService: "Interactive Power BI Dashboard with custom KPIs [+1,200 SAR]",
    dataCleanService: "Data Cleaning & Structured Visualization [+800 SAR]",
    logoService: "Professional Salla Theme Interface Setup [+800 SAR]",
    academicService: "Student Graduation Pack Upgrade [+700 SAR]",
    totalEstimate: "Total Estimated Project Cost:",
    orderViaWhatsapp: "Send Details & Book via WhatsApp",
    helpText: "* Pricing estimates are indicative and depend on specific project scope, requirements, and timeline.",
  },
  portfolio: {
    title: "Featured Works",
    subtitle: "Real digital products designed and engineered for our clients.",
    filterAll: "All",
    filterWeb: "Websites & Stores",
    filterDashboards: "Dashboards",
    filterAI: "AI & Chatbots",
    techStack: "Tech Stack:",
    livePreview: "Project Details via WhatsApp",
    projects: [
      {
        id: "proj1",
        title: "Rose Boutique Website (موقع ورد)",
        desc: "An e-commerce platform and luxury digital storefront for a premium floral brand, designed with modern speed and seamless purchasing.",
        category: "web",
        image: "/rose-site.png",
        tech: ["Next.js", "Salla API", "Tailwind CSS"],
        stats: "Digital Storefront"
      },
      {
        id: "proj2",
        title: "Rose AI Chatbot (شات بوت)",
        desc: "An intelligent conversational chatbot powered by generative AI to assist store customers and handle automated inquiries.",
        category: "ai",
        image: "/chatbot.png",
        tech: ["Python", "Gemini API", "FastAPI"],
        stats: "AI Automation"
      },
      {
        id: "proj3",
        title: "Interactive Analytics Dashboard (داشبورد)",
        desc: "لوحة تحكم تفاعلية متطورة لتمثيل البيانات ، وتتبع مؤشرات الأداء الرئيسية (KPIs) وتحليل ألاداء بصرياً ومباشرة.",
        category: "dashboards",
        image: "/dashboard.png",
        tech: ["Power BI", "PostgreSQL", "Data Viz"],
        stats: "Analytics Suite"
      }
    ]
  },
  whyUs: {
    title: "Why Partner with BINAA?",
    subtitle: "We engineer high-speed, reliable digital assets built to scale your business.",
    features: [
      {
        title: "✨ Modern Minimalist UI",
        desc: "Clean visual aesthetics focused on usability and conversion."
      },
      {
        title: "🚀 Blazing Fast Speed",
        desc: "Optimized lightweight code delivering instant loading across all devices."
      },
      {
        title: "🧠 AI-Powered Features",
        desc: "Seamlessly embedding AI chatbots, summarization, and automation into your platform."
      },
      {
        title: "⚙️ Scalable Architecture",
        desc: "Clean database schemas structured to accommodate future business expansion."
      },
      {
        title: "🇸🇦 Built for Saudi Market",
        desc: "Tailored to local user preferences, Saudi e-invoicing, and local checkout solutions."
      },
      {
        title: "📞 Continuous Engineering Support",
        desc: "End-to-end post-launch support and full team onboarding."
      }
    ]
  },
  workflow: {
    title: "Project Delivery Lifecycle",
    subtitle: "A structured timeline ensuring seamless project execution.",
    steps: [
      {
        num: "01",
        title: "Discovery & Scope",
        desc: "Defining project goals, core requirements, and technical specifications."
      },
      {
        num: "02",
        title: "UI/UX Architecture",
        desc: "Designing responsive, intuitive, and modern visual layouts."
      },
      {
        num: "03",
        title: "Development & Integration",
        desc: "Coding clean, fast software logic and connecting databases and AI models."
      },
      {
        num: "04",
        title: "Testing & Deployment",
        desc: "Performance verification, mobile QA testing, and live server deployment."
      }
    ]
  },
  faq: {
    title: "Frequently Asked Questions",
    subtitle: "Clear answers regarding project timelines, pricing, and workflow.",
    items: [
      {
        q: "How long does website or store development take?",
        a: "Micro projects and landing pages take 3-7 business days, while full websites and Salla store setups take 10-15 business days."
      },
      {
        q: "How are AI features and Chatbots integrated?",
        a: "We connect your app to Gemini AI models to provide real-time conversational assistance and automated responses."
      },
      {
        q: "Do you design custom Salla stores?",
        a: "Yes, we customize Salla store themes, configure payment methods, and organize products for immediate launch."
      },
      {
        q: "What are the official direct contact channels?",
        a: "You can reach us directly via WhatsApp at 0530792383 or on TikTok at binaa.digital."
      }
    ]
  },
  contact: {
    title: "Direct Channels",
    subtitle: "Reach out directly via WhatsApp or TikTok.",
    whatsappNumber: "0530792383",
    tiktokHandle: "binaa.digital"
  },
  footer: {
    desc: "BINAA Digital Solutions — Web Development, Salla Stores, Analytics Dashboards, and AI Solutions.",
    quickLinks: "Quick Links",
    socials: "Direct Channels",
    rights: "All rights reserved © BINAA Digital Solutions 2026."
  }
};
