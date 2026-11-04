"use client";

import { FormEvent, useEffect, useState, useRef } from "react";
import Image from "next/image";

const services = [
  {
    no: "01",
    name: "Melt Casting",
    text: "Controlled melting and casting support for robust components and dependable production runs.",
    tag: "THERMAL",
    image: {
      src: "/assets/industrial/melt-casting-foundry.jpg",
      alt: "Molten metal pouring in an industrial foundry casting process",
      width: 1600,
      height: 1118,
      label: "REPRESENTATIVE CASTING IMAGE",
    },
  },
  {
    no: "02",
    name: "Induction Hardening",
    text: "Targeted surface hardening engineered for strength, wear resistance and working life.",
    tag: "PRECISION",
    image: {
      src: "/assets/industrial/precision-gears-pexels.jpg",
      alt: "Interlocking metal gears representing wear-resistant engineering components",
      width: 1600,
      height: 1067,
      label: "REPRESENTATIVE COMPONENT DETAIL",
    },
  },
  {
    no: "03",
    name: "Fettling Works",
    text: "Clean, consistent finishing that prepares every casting for its next critical operation.",
    tag: "FINISHING",
    image: {
      src: "/assets/industrial/fettling-sparks-pexels.jpg",
      alt: "Metal finishing work with sparks in an industrial workshop",
      width: 1600,
      height: 1067,
      label: "REPRESENTATIVE FINISHING IMAGE",
    },
  },
  {
    no: "04",
    name: "Light Machining",
    text: "Accurate machining support for the details that turn cast material into a ready part.",
    tag: "ACCURACY",
    image: {
      src: "/assets/industrial/light-machining-pexels.jpg",
      alt: "Close-up of precision machining on a metal component",
      width: 1600,
      height: 1417,
      label: "REPRESENTATIVE MACHINING IMAGE",
    },
  },
];

const facilities = [
  { code: "01", city: "Shinoli BK", region: "Maharashtra", note: "Manufacturing facility" },
  { code: "02", city: "Kolhapur MIDC", region: "Maharashtra", note: "Industrial operations" },
  { code: "03", city: "Udyambag", region: "Belagavi, Karnataka", note: "Regional facility" },
];

const shinoliImages = [
  { src: "/assets/branches/shinoli-bk/WhatsApp Image 2026-10-31 at 1.03.58 PM.jpeg", alt: "R.P Engineering team working with molten metal at Shinoli BK", width: 1600, height: 900 },
  { src: "/assets/branches/shinoli-bk/WhatsApp Image 2026-10-31 at 1.03.58 PM (1).jpeg", alt: "Molten metal handling at R.P Engineering Shinoli BK", width: 720, height: 1280 },
  { src: "/assets/branches/shinoli-bk/WhatsApp Image 2026-10-31 at 1.03.57 PM.jpeg", alt: "Exterior of the R.P Engineering Shinoli BK facility", width: 1600, height: 1200 },
];

const heroSlides = [
  {
    id: "01",
    tabLabel: "Melt Casting",
    tag: "THERMAL ALLOY CASTING",
    badge: "FOUNDRY OPERATIONS",
    title: "Precision Melting.",
    titleEm: "Built for Endurance.",
    desc: "Controlled thermal processing and casting of high-integrity alloys for mission-critical industrial components.",
    image: {
      src: "/assets/branches/shinoli-bk/WhatsApp Image 2026-10-31 at 1.03.58 PM (1).jpeg",
      alt: "Molten metal handling at R.P Engineering Shinoli BK foundry",
      width: 720,
      height: 1280,
    },
    metrics: [
      { label: "Operating Temp", val: "1400°C+" },
      { label: "Active Plant", val: "Shinoli BK" },
      { label: "Core Metal", val: "Alloy & SG Iron" },
    ],
  },
  {
    id: "02",
    tabLabel: "Induction Hardening",
    tag: "SURFACE METALLURGY",
    badge: "WEAR RESISTANCE",
    title: "Targeted Toughness,",
    titleEm: "Zero Distortion.",
    desc: "Electromagnetic induction heat treatment tailored to increase surface wear resistance while preserving component core toughness.",
    image: {
      src: "/assets/industrial/precision-gears-pexels.jpg",
      alt: "Interlocking precision gears representing induction hardening and wear resistance",
      width: 1600,
      height: 1067,
    },
    metrics: [
      { label: "Case Hardness", val: "58-62 HRC" },
      { label: "Distortion Control", val: "Sub-Micron Spec" },
      { label: "Components", val: "Gears, Shafts & Pins" },
    ],
  },
  {
    id: "03",
    tabLabel: "Fettling Works",
    tag: "SURFACE DRESSING & FINISHING",
    badge: "WORKSHOP FINISH",
    title: "Rigorous Fettling,",
    titleEm: "Ready for Precision.",
    desc: "Systematic snag grinding, riser trimming, and deburring that delivers clean, defect-free casting surfaces ready for next-stage machining.",
    image: {
      src: "/assets/industrial/fettling-sparks-pexels.jpg",
      alt: "Metal finishing work with sparks in an industrial workshop",
      width: 1600,
      height: 1067,
    },
    metrics: [
      { label: "Surface Finish", val: "Grade A Clean" },
      { label: "Inspection", val: "100% Visual / Gauge" },
      { label: "Workflow", val: "Pre-Machining Ready" },
    ],
  },
  {
    id: "04",
    tabLabel: "Light Machining",
    tag: "SECONDARY TOLERANCES",
    badge: "PRECISION TURNING",
    title: "Cast to Final",
    titleEm: "Engineering Specs.",
    desc: "Dedicated light machining support that bridges rough castings directly into assembly-ready precision components.",
    image: {
      src: "/assets/industrial/light-machining-pexels.jpg",
      alt: "Close-up of precision light machining on a metal component",
      width: 1600,
      height: 1417,
    },
    metrics: [
      { label: "Tolerance Class", val: "High Precision" },
      { label: "Process", val: "Turning, Facing, Boring" },
      { label: "End State", val: "Assembly Ready" },
    ],
  },
];

const engineeringFaqs = [
  {
    q: "What metals, iron grades, and alloys does R.P Engineering melt and cast?",
    a: "We specialize in high-grade SG (Spheroidal Graphite) iron, ductile iron, grey cast iron, and custom alloy compositions. All melts are temperature-controlled at 1400°C+ with strict metallurgical verification for tensile strength, density, and microstructural integrity.",
  },
  {
    q: "What surface hardness and case depth can your induction hardening achieve?",
    a: "Our precision induction heat treatment delivers surface hardness between 58–62 HRC with calibrated case depth tailored to the component's working load. The core retains high impact ductility with sub-micron distortion control, ideal for gears, drive shafts, and pins.",
  },
  {
    q: "Do you deliver rough castings or finished, assembly-ready parts?",
    a: "We offer end-to-end processing: raw melt casting, thorough snag fettling and riser cutoff, heat treatment, and precision light machining (turning, boring, and facing). Clients can receive rough castings, dressed blanks, or finished parts ready for immediate assembly.",
  },
  {
    q: "Where are your manufacturing and dispatch facilities located?",
    a: "R.P Engineering operates across three strategically located facilities: Unit 01 foundry in Shinoli BK (Maharashtra), industrial operations in Kolhapur MIDC (Maharashtra), and our regional machining facility in Udyambag, Belagavi (Karnataka).",
  },
  {
    q: "How can I request a quote or submit technical part drawings?",
    a: "You can send component specifications, 2D drawings, or RFQ details directly through our contact form, email Sanjay Badaskar at sjbadaskar@reddifmail.com, or call our engineering desk directly at +91 94212 40625.",
  },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span className={diagonal ? "arrow diagonal" : "arrow"}>→</span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [darkMode, setDarkMode] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const heroMediaRef = useRef<HTMLDivElement>(null);

  function applyTheme(isDark: boolean) {
    document.documentElement.classList.toggle("dark", isDark);
    document.body.dataset.theme = isDark ? "dark" : "light";
    const themeSwitch = document.getElementById("theme-switch") as HTMLInputElement | null;
    if (themeSwitch) themeSwitch.checked = isDark;
    window.localStorage.setItem("rp-theme", isDark ? "dark" : "light");
  }

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("rp-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const timer = window.setTimeout(() => {
      const initialTheme = savedTheme ? savedTheme === "dark" : prefersDark;
      applyTheme(initialTheme);
      setDarkMode(initialTheme);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  /* Scroll: header transparency + progress bar + parallax */
  useEffect(() => {
    function handleScroll() {
      const y = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

      setScrolled(y > 20);
      setScrollProgress(maxScroll > 0 ? (y / maxScroll) * 100 : 0);

      if (heroMediaRef.current) {
        heroMediaRef.current.style.transform = `translateY(${y * 0.16}px)`;
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Autoplay hero slides */
  useEffect(() => {
    if (!isAutoplay) return;
    const timer = setTimeout(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearTimeout(timer);
  }, [isAutoplay, activeSlide]);

  /* Gallery keyboard handler */
  useEffect(() => {
    if (galleryIndex === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setGalleryIndex(null);
      if (event.key === "ArrowRight") setGalleryIndex((current) => current === null ? 0 : (current + 1) % shinoliImages.length);
      if (event.key === "ArrowLeft") setGalleryIndex((current) => current === null ? 0 : (current - 1 + shinoliImages.length) % shinoliImages.length);
    };
    window.addEventListener("keydown", handleKeydown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [galleryIndex]);

  /* Close menu on resize to desktop */
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 850) setMenuOpen(false);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function moveGallery(direction: 1 | -1) {
    setGalleryIndex((current) => current === null ? 0 : (current + direction + shinoliImages.length) % shinoliImages.length);
  }

  async function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const endpoint = process.env.NEXT_PUBLIC_CONTACT_API_URL;

    if (!endpoint) {
      setFormStatus("error");
      return;
    }

    setFormStatus("submitting");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          company: data.get("company"),
          email: data.get("email"),
          phone: data.get("phone"),
          message: data.get("message"),
          website: data.get("website"),
        }),
      });

      if (!response.ok) throw new Error("Enquiry request failed");

      form.reset();
      setFormStatus("success");
    } catch {
      setFormStatus("error");
    }
  }

  return (
    <main className={darkMode ? "dark" : ""}>
      <div className="grain" aria-hidden="true" />

      {/* ── HEADER ── */}
      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        <div className="site-header-inner">
          <a href="#top" className="brand" aria-label="R.P Engineering home">
            <span className="brand-mark">RP</span>
            <span className="brand-copy">
              <b>R.P ENGINEERING</b>
              <small>ENGINEERED FOR ENDURANCE</small>
            </span>
          </a>

          <nav className={menuOpen ? "nav open" : "nav"} aria-label="Main navigation">
            <a href="#capabilities" onClick={() => setMenuOpen(false)}>Capabilities</a>
            <a href="#facilities" onClick={() => setMenuOpen(false)}>Facilities</a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>
              Start a Project <Arrow />
            </a>
          </nav>

          <div className="header-right">
            <label className="theme-toggle" htmlFor="theme-switch" aria-label="Toggle dark mode">
              <input
                id="theme-switch"
                type="checkbox"
                onChange={(event) => {
                  const isDark = event.currentTarget.checked;
                  applyTheme(isDark);
                  setDarkMode(isDark);
                }}
              />
              <span className="theme-icon" aria-hidden="true">
                {darkMode ? "☀" : "☽"}
              </span>
            </label>

            <button
              className={`menu-button${menuOpen ? " open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-label="Toggle menu"
            >
              <i /><i /><i />
            </button>
          </div>
        </div>
      </header>

      {/* Scroll progress bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* ── HERO ── */}
      <section
        id="top"
        className="hero-cinematic"
        onMouseEnter={() => setIsAutoplay(false)}
        onMouseLeave={() => setIsAutoplay(true)}
      >
        {/* Multi-image background with smooth cross-fade */}
        <div ref={heroMediaRef} className="hero-media-wrapper" aria-hidden="true">
          {heroSlides.map((slide, idx) => (
            <div
              key={slide.id}
              className={`hero-slide-bg ${idx === activeSlide ? "active" : ""}`}
            >
              <Image
                className="hero-cinematic-image"
                src={slide.image.src}
                alt={slide.image.alt}
                width={slide.image.width}
                height={slide.image.height}
                sizes="100vw"
                priority={idx === 0}
              />
            </div>
          ))}
          <div className="hero-cinematic-wash" />
        </div>

        {/* Live Status Header Bar */}
        <div className="hero-live-bar section-shell">
          <div className="live-status-pill">
            <span className="live-pulse-dot" aria-hidden="true" />
            <span className="live-status-text">LIVE PRODUCTION FLOOR · SHINOLI BK, MAHARASHTRA</span>
          </div>
          <div className="hero-live-badge">
            <span>3 OPERATING UNITS · MH &amp; KA</span>
          </div>
        </div>

        {/* Main Content & Spec Telemetry Card */}
        <div className="hero-cinematic-content section-shell">
          <div className="hero-cinematic-copy reveal">
            <p className="hero-kicker">
              <span className="hero-kicker-line" aria-hidden="true" />
              <span>{heroSlides[activeSlide].tag}</span>
            </p>

            <h1 key={`hero-title-${activeSlide}`} className="hero-title-animated">
              {heroSlides[activeSlide].title}<br />
              <em>{heroSlides[activeSlide].titleEm}</em>
            </h1>

            <p key={`hero-desc-${activeSlide}`} className="hero-desc-animated">
              {heroSlides[activeSlide].desc}
            </p>

            {/* Mobile & Tablet Dedicated Capability Visual Frame */}
            <div className="hero-mobile-visual" key={`hero-mobile-visual-${activeSlide}`}>
              <div className="hero-mobile-visual-frame">
                <Image
                  src={heroSlides[activeSlide].image.src}
                  alt={heroSlides[activeSlide].image.alt}
                  width={heroSlides[activeSlide].image.width}
                  height={heroSlides[activeSlide].image.height}
                  className="hero-mobile-visual-img"
                  priority
                  sizes="(max-width: 850px) 92vw, 640px"
                />
                <div className="hero-mobile-visual-overlay" />
                <div className="hero-mobile-visual-badge">
                  <span className="live-pulse-dot" aria-hidden="true" />
                  <span>0{activeSlide + 1} / 04 · {heroSlides[activeSlide].badge}</span>
                </div>
                <div className="hero-mobile-visual-footer">
                  <span className="hero-mobile-visual-method">{heroSlides[activeSlide].tabLabel}</span>
                  <span className="hero-mobile-visual-metric">{heroSlides[activeSlide].metrics[0].val}</span>
                </div>
              </div>
            </div>

            <div className="hero-actions">
              <a href="#contact" className="button button-hot">
                Start a Conversation <Arrow diagonal />
              </a>
              <a href="tel:+919421240625" className="button button-hero-phone">
                <span className="phone-icon" aria-hidden="true">📞</span> +91 94212 40625
              </a>
            </div>

            {/* Quick process live metrics */}
            <div className="hero-live-metrics" key={`metrics-${activeSlide}`}>
              {heroSlides[activeSlide].metrics.map((metric, i) => (
                <div key={i} className="hero-live-metric-item">
                  <span className="metric-label">{metric.label}</span>
                  <strong className="metric-val">{metric.val}</strong>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Telemetry & Plant Card */}
          <aside className="hero-telemetry-panel reveal delay-2" aria-label="Process Specs & Footprint">
            <div className="telemetry-top">
              <span className="telemetry-cat">{heroSlides[activeSlide].badge}</span>
              <span className="telemetry-index">0{activeSlide + 1} / 04</span>
            </div>

            <div className="telemetry-body">
              <span className="telemetry-subhead">CAPABILITY PROFILE</span>
              <div className="telemetry-specs-list">
                <div className="spec-row">
                  <span>Method</span>
                  <b>{heroSlides[activeSlide].tabLabel}</b>
                </div>
                <div className="spec-row">
                  <span>Facility</span>
                  <b>{heroSlides[activeSlide].metrics[1].val}</b>
                </div>
                <div className="spec-row">
                  <span>Quality Standard</span>
                  <b>ISO Compliant / 100% Insp.</b>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Bottom Interactive Process Navigation Tabs */}
        <div className="hero-tabs-wrap section-shell" role="tablist" aria-label="Capabilities showcase tabs">
          <div className="hero-tabs-grid">
            {heroSlides.map((slide, idx) => (
              <button
                key={slide.id}
                role="tab"
                aria-selected={idx === activeSlide}
                className={`hero-tab-item ${idx === activeSlide ? "active" : ""}`}
                onClick={() => setActiveSlide(idx)}
              >
                <div className="hero-tab-progress-bg">
                  <div
                    className={`hero-tab-progress-bar ${idx === activeSlide && isAutoplay ? "animating" : ""}`}
                  />
                </div>
                <div className="hero-tab-content">
                  <span className="hero-tab-num">{slide.id}</span>
                  <span className="hero-tab-title">{slide.tabLabel}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Footer Bar */}
        <div className="hero-cinematic-footer section-shell">
          <span>OPERATIONAL FOOTPRINT: MAHARASHTRA &amp; KARNATAKA</span>
          <span className="scroll-cue">
            <span className="scroll-dot" aria-hidden="true" />
            SCROLL TO EXPLORE
          </span>
        </div>
      </section>

      {/* ── TICKER ── */}
      <div className="ticker" aria-label="Our services">
        <div className="ticker-track">
          MELT CASTING <b>✦</b> INDUCTION HARDENING <b>✦</b> FETTLING WORKS <b>✦</b> LIGHT MACHINING <b>✦</b> MELT CASTING <b>✦</b> INDUCTION HARDENING <b>✦</b> FETTLING WORKS <b>✦</b> LIGHT MACHINING <b>✦</b>
        </div>
      </div>

      {/* ── PROOF BAND ── */}
      <section className="proof-band section-shell" aria-label="R.P Engineering operating principles">
        <p className="proof-band-lead">Metalwork that earns its place in production.</p>
        <div className="proof-list">
          <div className="proof-item">
            <span className="proof-item-num">01</span>
            <p className="proof-item-title">Material-led</p>
            <p className="proof-item-desc">Process decisions grounded in the part and its application.</p>
          </div>
          <div className="proof-item">
            <span className="proof-item-num">02</span>
            <p className="proof-item-title">Production-minded</p>
            <p className="proof-item-desc">Practical capability for reliable, repeatable work.</p>
          </div>
          <div className="proof-item">
            <span className="proof-item-num">03</span>
            <p className="proof-item-title">Regionally ready</p>
            <p className="proof-item-desc">Three operating locations across Maharashtra and Karnataka.</p>
          </div>
        </div>
      </section>

      {/* ── ABOUT / STATEMENT ── */}
      <section id="about" className="statement section-shell">
        <p className="eyebrow reveal"><span />BUILT FOR THE REAL WORLD</p>
        <div className="statement-grid">
          <div>
            <p className="statement-est" aria-hidden="true">RP</p>
            <h2 className="reveal">
              A practical partner for <em>critical</em> manufacturing work.
            </h2>
          </div>
          <div className="statement-side reveal delay-1">
            <p>
              R.P Engineering brings essential metalworking capabilities together under one exacting approach.
              From thermal processing to final finishing, we focus on work that performs where it matters.
            </p>
            <a href="#contact" className="text-link">Talk to our team <Arrow /></a>
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ── */}
      <section id="capabilities" className="capabilities-wrap">
        <div className="section-shell">
          <div className="section-heading reveal">
            <p className="eyebrow"><span />WHAT WE DO</p>
            <h2>
              Proven processes.<br />
              <em>Purposeful output.</em>
            </h2>
          </div>
          <div className="services">
            {services.map((service, index) => (
              <article className={`service-card reveal delay-${index + 1}`} key={service.no}>
                <div className="service-top">
                  <span>{service.no}</span>
                  <span>{service.tag}</span>
                </div>
                <div className={`service-visual service-visual-${index + 1}`}>
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    width={service.image.width}
                    height={service.image.height}
                    sizes="(max-width: 520px) 90vw, (max-width: 850px) 44vw, 22vw"
                  />
                  <span>{service.image.label}</span>
                </div>
                <h3>{service.name}</h3>
                <p>{service.text}</p>
                <a href="#contact" aria-label={`Enquire about ${service.name}`} className="card-arrow">
                  <Arrow diagonal />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="process-wrap">
        <div className="section-shell process">
          <div className="process-intro reveal">
            <p className="eyebrow"><span />OUR APPROACH</p>
            <h2>
              Made to move<br />
              <em>with purpose.</em>
            </h2>
          </div>
          <div className="process-steps">
            {[
              ["01", "Understand", "The material, application and performance need."],
              ["02", "Engineer", "A disciplined route from heat treatment to finish."],
              ["03", "Deliver", "Reliable work that is ready for the next stage."],
            ].map((step, i) => (
              <div className={`process-step reveal delay-${i + 1}`} key={step[0]}>
                <b>{step[0]}</b>
                <div>
                  <h3>{step[1]}</h3>
                  <p>{step[2]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FACILITIES ── */}
      <section id="facilities" className="facilities section-shell">
        <div className="facility-head reveal">
          <p className="eyebrow"><span />OUR FOOTPRINT</p>
          <h2>
            Close to Industry.<br />
            <em>Ready for Work.</em>
          </h2>
          <p className="facility-desc">Three operational locations across Maharashtra and Karnataka.</p>
        </div>

        <div className="facility-content">
          <div className="facility-showcase reveal delay-1">
            <button
              className="facility-photo photo-main"
              onClick={() => setGalleryIndex(0)}
              aria-label="Open Shinoli BK photo gallery, image 1 of 3"
            >
              <Image
                src={shinoliImages[0].src}
                alt={shinoliImages[0].alt}
                width={shinoliImages[0].width}
                height={shinoliImages[0].height}
                sizes="(max-width: 850px) 65vw, 40vw"
              />
              <span className="facility-caption">
                <span>SHINOLI BK / MAHARASHTRA</span>
                <b>Live production</b>
              </span>
            </button>
            <button
              className="facility-photo photo-detail"
              onClick={() => setGalleryIndex(1)}
              aria-label="Open Shinoli BK photo gallery, image 2 of 3"
            >
              <Image
                src={shinoliImages[1].src}
                alt={shinoliImages[1].alt}
                width={shinoliImages[1].width}
                height={shinoliImages[1].height}
                sizes="(max-width: 850px) 30vw, 18vw"
              />
              <span className="gallery-count">03 PHOTOS ↗</span>
            </button>
          </div>

          <button className="gallery-link reveal delay-2" onClick={() => setGalleryIndex(0)}>
            View Shinoli BK gallery <span>03 photos</span> <Arrow />
          </button>

          <div className="facility-list">
            {facilities.map((facility, index) => (
              <article className={`facility reveal delay-${index + 1}`} key={facility.code}>
                <span className="facility-code">{facility.code}</span>
                <div>
                  <h3>{facility.city}</h3>
                  <p>{facility.region}</p>
                </div>
                <span className="facility-note">{facility.note}</span>
                <span className="location-pin" aria-hidden="true">+</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECHNICAL PROCUREMENT FAQ ── */}
      <section id="faq" className="faq-section section-shell" aria-labelledby="faq-heading">
        <div className="faq-intro reveal">
          <p className="eyebrow"><span /> TECHNICAL &amp; PROCUREMENT FAQ</p>
          <h2 id="faq-heading">
            Answers for <em>Engineers</em><br />&amp; Sourcing Teams.
          </h2>
          <p className="faq-intro-desc">
            Essential specifications on our metallurgical alloys, induction heat treatment tolerances, operating facilities, and technical CAD drawing submissions.
          </p>
        </div>

        <div className="faq-accordion reveal delay-1">
          {engineeringFaqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className={`faq-item ${isOpen ? "open" : ""}`}>
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-q-text">{faq.q}</span>
                  <span className="faq-icon" aria-hidden="true">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && (
                  <div className="faq-answer-panel">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="contact-wrap">
        <div className="section-shell">
          <div id="contact" className="contact">
            <div className="contact-panel reveal">
              <p className="eyebrow"><span />LET&apos;S BUILD</p>
              <h2>
                Bring us your next<br />
                <em>challenge.</em>
              </h2>
              <p className="contact-sub">
                Tell us about your component, requirement or process need. We&apos;ll take it from there.
              </p>
              <div className="direct-contact">
                <a href="tel:+919421240625">
                  +91 94212 40625 <Arrow />
                </a>
                <a href="mailto:sjbadaskar@reddifmail.com">
                  sjbadaskar@reddifmail.com <Arrow />
                </a>
                <small>Owner: Sanjay Badaskar</small>
              </div>
            </div>

            <form className="contact-form reveal delay-1" onSubmit={submitEnquiry}>
              <label>
                Your name
                <input required name="name" placeholder="Enter your name" />
              </label>
              <label>
                Company
                <input name="company" placeholder="Company name" />
              </label>
              <label>
                Email address
                <input name="email" type="email" placeholder="name@company.com" />
              </label>
              <label>
                Phone number
                <input required name="phone" type="tel" placeholder="Your contact number" />
              </label>
              <label>
                How can we help?
                <textarea required name="message" placeholder="Tell us about your requirement" rows={4} />
              </label>
              <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: "none" }} />
              <button className="button button-hot" type="submit" disabled={formStatus === "submitting"}>
                {formStatus === "submitting" ? "Sending…" : <><span>Send Enquiry</span> <Arrow diagonal /></>}
              </button>
              {formStatus === "success" && (
                <p className="form-note success" role="status">
                  Thank you. Your enquiry has been sent — we&apos;ll get back to you shortly.
                </p>
              )}
              {formStatus === "error" && (
                <p className="form-note error" role="alert">
                  We couldn&apos;t send the enquiry right now. Please call us at +91 94212 40625 or email us directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer section-shell">
        <a href="#top" className="brand" aria-label="Back to top">
          <span className="brand-mark">RP</span>
          <span className="brand-copy">
            <b>R.P ENGINEERING</b>
            <small>ENGINEERED FOR ENDURANCE</small>
          </span>
        </a>
        <p>© {new Date().getFullYear()} R.P Engineering. All rights reserved.</p>
        <a href="#top" className="back-top">Back to top ↑</a>
      </footer>

      {/* ── GALLERY LIGHTBOX ── */}
      {galleryIndex !== null && (
        <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label="Shinoli BK facility photo gallery">
          <button className="gallery-close" onClick={() => setGalleryIndex(null)} aria-label="Close gallery">×</button>
          <button className="gallery-nav gallery-prev" onClick={() => moveGallery(-1)} aria-label="Previous photo">←</button>
          <figure className="gallery-stage">
            <Image
              src={shinoliImages[galleryIndex].src}
              alt={shinoliImages[galleryIndex].alt}
              width={shinoliImages[galleryIndex].width}
              height={shinoliImages[galleryIndex].height}
              sizes="90vw"
              priority
            />
            <figcaption>
              <span>SHINOLI BK / MAHARASHTRA</span>
              <b>{String(galleryIndex + 1).padStart(2, "0")} / {String(shinoliImages.length).padStart(2, "0")}</b>
            </figcaption>
          </figure>
          <button className="gallery-nav gallery-next" onClick={() => moveGallery(1)} aria-label="Next photo">→</button>
          <p className="gallery-help">Use ← → arrow keys to browse · Esc to close</p>
        </div>
      )}
    </main>
  );
}
