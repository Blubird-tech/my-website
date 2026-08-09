/* ============================================================
   Umar Farooq Electrical Equipments — site script
   - EN / AR translation switch (with RTL layout)
   - Scroll reveal animations
   - Product image gallery (thumbnails swap main image)
   - Mobile nav toggle
   - Contact form handling
   ============================================================ */

const translations = {
  en: {
    "brand.name1": "UMAR FAROOQ",
    "brand.name2": "ELECTRICAL EQUIPMENTS",
    "brand.name2short": "ELECTRICAL EQUIPMENTS",

    "nav.home": "Home",
    "nav.gallery": "Gallery",
    "nav.services": "Services",
    "nav.products": "Products",
    "nav.team": "Team",
    "nav.contact": "Contact",

    "hero.eyebrow": "CERTIFIED INDUSTRIAL ELECTRICAL SYSTEMS",
    "hero.title": "Powering your industry <i>with excellence.</i>",
    "hero.desc": "Reliable electrical products, automation, high-voltage systems and project contracting across the UAE.",
    "hero.cta": "Explore our products",
    "hero.stat1": "Years serving UAE",
    "hero.stat2": "Emergency service",
    "hero.stat3": "Certified team",

    "gallery.eyebrow": "OUR CAPABILITIES",
    "gallery.title": "Electrical solutions gallery",
    "gallery.lead": "A closer look at our engineering and execution capabilities across diverse projects.",
    "gallery.item1": "Industrial Automation",
    "gallery.item2": "High Voltage Systems",
    "gallery.item3": "Project Contracting",
    "gallery.item4": "Maintenance & Repair",
    "gallery.item5": "Energy Solutions",
    "gallery.item6": "Design & Consulting",

    "services.eyebrow": "WHAT WE DO",
    "services.title": "Complete electrical solutions",
    "services.s1.title": "Industrial Automation",
    "services.s1.desc": "PLC programming, SCADA systems, custom control panels and process automation.",
    "services.s2.title": "High Voltage Systems",
    "services.s2.desc": "Substations, transformers, circuit breakers, power distribution and safety testing.",
    "services.s3.title": "Project Contracting",
    "services.s3.desc": "Project management, material procurement, licensed teams and post-project support.",
    "services.s4.title": "Maintenance & Repair",
    "services.s4.desc": "Preventive maintenance, emergency repairs and equipment inspections.",
    "services.s5.title": "Energy Solutions",
    "services.s5.desc": "Energy audits, LED upgrades, solar integration and energy management.",
    "services.s6.title": "Design & Consulting",
    "services.s6.desc": "System design, load calculations, compliance consulting and safety audits.",

    "products.eyebrow": "OUR PRODUCTS",
    "products.title": "Genuine electrical equipment",
    "products.lead": "We supply original products from the world's leading brands to meet every project requirement.",
    "products.eyebrowOption": "Electrical Products Supply",
    "products.p1.name": "MCB Circuit Breaker",
    "products.p1.desc": "A dependable electrical protection device providing safe and reliable protection against overloads and short circuits for residential, commercial, and industrial applications.",
    "products.p2.name": "MCCB Circuit Breaker",
    "products.p2.desc": "A high-performance electrical protection solution designed to safeguard commercial and industrial power systems against overloads and short circuits while providing reliable circuit control and isolation.",
    "products.p3.name": "ABB MCB",
    "products.p3.desc": "A reliable miniature circuit breaker providing efficient overload and short-circuit protection, with a durable multi-pole design suitable for safe and dependable electrical distribution systems.",
    "products.p4.name": "ABB MCCB",
    "products.p4.desc": "A robust and reliable molded case circuit breaker designed to provide high-level overload and short-circuit protection for commercial and industrial electrical distribution systems.",
    "products.p5.name": "AC Contactor",
    "products.p5.desc": "A reliable electrical switching device designed for controlling motors and high-power AC loads, providing safe, efficient, and dependable operation in industrial and commercial control systems.",
    "products.p6.name": "Overload Relay",
    "products.p6.desc": "A reliable motor-protection device designed to detect excessive current and overload conditions, helping prevent overheating and extending motor service life in industrial and commercial applications.",
    "products.p7.name": "ANDeli Inverter",
    "products.p7.desc": "A reliable variable frequency drive designed for efficient motor speed control, smooth operation, and improved energy performance in industrial and commercial electrical systems.",
    "products.p8.name": "Delta VFD",
    "products.p8.desc": "A reliable variable frequency drive designed for precise motor control, smooth operation, and improved energy efficiency across industrial automation and electrical applications.",

    "team.eyebrow": "PEOPLE BEHIND THE POWER",
    "team.title": "Experienced technical team",
    "team.lead": "Meet the technical team behind every successful project.",
    "team.t1": "CEO · 20+ years experience",
    "team.t2": "Director · 30+ years experience",
    "team.t3": "Senior Electrician · 12+ years",
    "team.t4": "Junior Electrician · 10+ years",
    "team.t5": "Junior Electrician · 6+ years",

    "contact.eyebrow": "START YOUR PROJECT",
    "contact.title": "Let's connect your next idea to power.",
    "contact.call": "Call <b>+971 56 935 3129</b>",
    "contact.email": "Email <b>omarfarooqpp@gmail.com</b>",
    "contact.address": "New Industrial Area, Ajman, UAE",
    "contact.formTitle": "Request a free quote",
    "contact.form.name": "Your name",
    "contact.form.contact": "Phone or email",
    "contact.form.message": "Tell us about your requirement",
    "contact.form.send": "Send request",
    "contact.form.thanks": "Thank you. Our team will contact you within 2 hours.",

    "brands.title": "TRUSTED BRANDS WE SUPPLY",
    "footer.copy": "© 2026 Umar Farooq Electrical Equipments. All Rights Reserved."
  },

  ar: {
    "brand.name1": "عمر فاروق",
    "brand.name2": "للمعدات الكهربائية",
    "brand.name2short": "للمعدات الكهربائية",

    "nav.home": "الرئيسية",
    "nav.gallery": "المعرض",
    "nav.services": "الخدمات",
    "nav.products": "المنتجات",
    "nav.team": "الفريق",
    "nav.contact": "اتصل بنا",

    "hero.eyebrow": "أنظمة كهربائية صناعية معتمدة",
    "hero.title": "نمدّ صناعتك <i>بالتميز.</i>",
    "hero.desc": "منتجات كهربائية موثوقة، أنظمة أتمتة، حلول جهد عالٍ وتنفيذ مشاريع في جميع أنحاء دولة الإمارات.",
    "hero.cta": "استكشف منتجاتنا",
    "hero.stat1": "سنة خدمة في الإمارات",
    "hero.stat2": "خدمة طوارئ",
    "hero.stat3": "فريق معتمد",

    "gallery.eyebrow": "قدراتنا",
    "gallery.title": "معرض الحلول الكهربائية",
    "gallery.lead": "لمحة عن قدراتنا الهندسية والتنفيذية عبر مشاريع متنوعة.",
    "gallery.item1": "الأتمتة الصناعية",
    "gallery.item2": "أنظمة الجهد العالي",
    "gallery.item3": "تنفيذ المشاريع",
    "gallery.item4": "الصيانة والإصلاح",
    "gallery.item5": "حلول الطاقة",
    "gallery.item6": "التصميم والاستشارات",

    "services.eyebrow": "ماذا نقدم",
    "services.title": "حلول كهربائية متكاملة",
    "services.s1.title": "الأتمتة الصناعية",
    "services.s1.desc": "برمجة PLC، أنظمة SCADA، لوحات تحكم مخصصة وأتمتة العمليات.",
    "services.s2.title": "أنظمة الجهد العالي",
    "services.s2.desc": "محطات فرعية، محولات، قواطع دائرة، توزيع الطاقة واختبارات السلامة.",
    "services.s3.title": "تنفيذ المشاريع",
    "services.s3.desc": "إدارة المشاريع، توريد المواد، فرق مرخصة ودعم ما بعد التنفيذ.",
    "services.s4.title": "الصيانة والإصلاح",
    "services.s4.desc": "صيانة وقائية، إصلاحات طارئة وفحص المعدات.",
    "services.s5.title": "حلول الطاقة",
    "services.s5.desc": "تدقيق الطاقة، ترقيات LED، دمج الطاقة الشمسية وإدارة الطاقة.",
    "services.s6.title": "التصميم والاستشارات",
    "services.s6.desc": "تصميم الأنظمة، حسابات الأحمال، استشارات الامتثال وتدقيق السلامة.",

    "products.eyebrow": "منتجاتنا",
    "products.title": "معدات كهربائية أصلية",
    "products.lead": "نوفر منتجات أصلية من أفضل العلامات التجارية العالمية لتلبية احتياجات كل مشروع.",
    "products.eyebrowOption": "توريد منتجات كهربائية",
    "products.p1.name": "قاطع دائرة MCB",
    "products.p1.desc": "جهاز حماية كهربائي موثوق يوفر حماية آمنة وفعالة ضد التحميل الزائد وقصر الدائرة للتطبيقات السكنية والتجارية والصناعية.",
    "products.p2.name": "قاطع دائرة MCCB",
    "products.p2.desc": "حل حماية كهربائي عالي الأداء مصمم لحماية أنظمة الطاقة التجارية والصناعية من التحميل الزائد وقصر الدائرة مع توفير تحكم وعزل موثوق للدائرة.",
    "products.p3.name": "قاطع MCB من ABB",
    "products.p3.desc": "قاطع دائرة مصغر موثوق يوفر حماية فعالة ضد التحميل الزائد وقصر الدائرة، بتصميم متعدد الأقطاب متين مناسب لأنظمة التوزيع الكهربائي الآمنة والموثوقة.",
    "products.p4.name": "قاطع MCCB من ABB",
    "products.p4.desc": "قاطع دائرة مصبوب متين وموثوق مصمم لتوفير حماية عالية المستوى ضد التحميل الزائد وقصر الدائرة لأنظمة التوزيع الكهربائي التجارية والصناعية.",
    "products.p5.name": "كونتاكتور AC",
    "products.p5.desc": "جهاز تحويل كهربائي موثوق مصمم للتحكم في المحركات والأحمال الكهربائية عالية الطاقة، يوفر تشغيلاً آمناً وفعالاً وموثوقاً في أنظمة التحكم الصناعية والتجارية.",
    "products.p6.name": "مرحل الحمل الزائد",
    "products.p6.desc": "جهاز حماية للمحركات موثوق مصمم لاكتشاف التيار الزائد وحالات التحميل الزائد، مما يساعد على منع ارتفاع الحرارة وإطالة عمر خدمة المحرك في التطبيقات الصناعية والتجارية.",
    "products.p7.name": "عاكس ANDeli",
    "products.p7.desc": "محرك متغير التردد موثوق مصمم للتحكم الفعال في سرعة المحرك، وتشغيل سلس، وأداء طاقة محسّن في الأنظمة الكهربائية الصناعية والتجارية.",
    "products.p8.name": "محرك Delta VFD",
    "products.p8.desc": "محرك متغير التردد موثوق مصمم للتحكم الدقيق في المحرك، وتشغيل سلس، وكفاءة طاقة محسّنة عبر تطبيقات الأتمتة الصناعية والكهربائية.",

    "team.eyebrow": "العقول خلف الطاقة",
    "team.title": "فريق فني ذو خبرة",
    "team.lead": "تعرّف على الفريق الفني الذي يقف خلف كل مشروع ناجح.",
    "team.t1": "الرئيس التنفيذي · خبرة 20+ سنة",
    "team.t2": "مدير · خبرة 30+ سنة",
    "team.t3": "كهربائي أول · خبرة 12+ سنة",
    "team.t4": "كهربائي · خبرة 10+ سنوات",
    "team.t5": "كهربائي · خبرة 6+ سنوات",

    "contact.eyebrow": "ابدأ مشروعك",
    "contact.title": "لنربط فكرتك القادمة بالطاقة.",
    "contact.call": "اتصل <b>+971 56 935 3129</b>",
    "contact.email": "البريد الإلكتروني <b>omarfarooqpp@gmail.com</b>",
    "contact.address": "المنطقة الصناعية الجديدة، عجمان، الإمارات العربية المتحدة",
    "contact.formTitle": "اطلب عرض سعر مجاني",
    "contact.form.name": "الاسم الكامل",
    "contact.form.contact": "رقم الهاتف أو البريد الإلكتروني",
    "contact.form.message": "أخبرنا عن متطلبات مشروعك",
    "contact.form.send": "إرسال الطلب",
    "contact.form.thanks": "شكراً لك. سيتواصل معك فريقنا خلال ساعتين.",

    "brands.title": "علامات تجارية موثوقة نوفرها",
    "footer.copy": "© 2026 عمر فاروق للمعدات الكهربائية. جميع الحقوق محفوظة."
  }
};

let currentLang = localStorage.getItem("ufee_lang") || "en";

function applyTranslations(lang){
  const dict = translations[lang];
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-html]").forEach(el=>{
    const key = el.getAttribute("data-i18n-html");
    if(dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{
    const key = el.getAttribute("data-i18n-placeholder");
    if(dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
  });

  document.documentElement.setAttribute("lang", lang === "ar" ? "ar" : "en");
  document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

  const langLabel = document.getElementById("langLabel");
  if(langLabel) langLabel.textContent = lang === "ar" ? "English" : "العربية";

  localStorage.setItem("ufee_lang", lang);
  currentLang = lang;
}

document.addEventListener("DOMContentLoaded", () => {
  applyTranslations(currentLang);

  // ---- Language toggle ----
  const langToggle = document.getElementById("langToggle");
  if(langToggle){
    langToggle.addEventListener("click", () => {
      applyTranslations(currentLang === "en" ? "ar" : "en");
    });
  }

  // ---- Mobile nav toggle ----
  const navToggle = document.getElementById("navToggle");
  const siteNav = document.getElementById("siteNav");
  if(navToggle && siteNav){
    navToggle.addEventListener("click", () => {
      const open = siteNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    siteNav.querySelectorAll("a").forEach(a=>{
      a.addEventListener("click", () => siteNav.classList.remove("open"));
    });
  }

  // ---- Scroll reveal animations ----
  const revealEls = document.querySelectorAll(".reveal");
  revealEls.forEach((el,i)=> el.style.setProperty("--d", i % 8));
  if("IntersectionObserver" in window){
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add("in-view");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add("in-view"));
  }

  // ---- Product image galleries ----
  document.querySelectorAll(".product-gallery").forEach(gallery=>{
    const mainImg = gallery.querySelector(".product-main");
    const thumbs = gallery.querySelectorAll(".product-thumbs img");
    thumbs.forEach(thumb=>{
      thumb.addEventListener("click", () => {
        if(thumb.classList.contains("active")) return;
        mainImg.style.opacity = "0";
        setTimeout(()=>{
          mainImg.src = thumb.src;
          mainImg.style.opacity = "1";
        }, 150);
        thumbs.forEach(t => t.classList.remove("active"));
        thumb.classList.add("active");
      });
    });
  });

  // ---- Duplicate marquee content for seamless infinite loop ----
  const track = document.getElementById("marqueeTrack");
  if(track){
    track.innerHTML += track.innerHTML;
  }

  // ---- Contact form ----
  const form = document.querySelector("form");
  if(form){
    form.addEventListener("submit", (e)=>{
      e.preventDefault();
      alert(translations[currentLang]["contact.form.thanks"]);
      e.target.reset();
    });
  }
});
