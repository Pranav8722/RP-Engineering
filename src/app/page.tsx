"use client";

import { FormEvent, useEffect, useState } from "react";
import Image from "next/image";

const services = [
  {
    no: "01",
    name: "Melt Casting",
    text: "Controlled melting and casting support for robust components and dependable production runs.",
    tag: "THERMAL",
  },
  {
    no: "02",
    name: "Induction Hardening",
    text: "Targeted surface hardening engineered for strength, wear resistance and working life.",
    tag: "PRECISION",
  },
  {
    no: "03",
    name: "Fettling Works",
    text: "Clean, consistent finishing that prepares every casting for its next critical operation.",
    tag: "FINISHING",
  },
  {
    no: "04",
    name: "Light Machining",
    text: "Accurate machining support for the details that turn cast material into a ready part.",
    tag: "ACCURACY",
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

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span className={diagonal ? "arrow diagonal" : "arrow"}>→</span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);

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

  function moveGallery(direction: 1 | -1) {
    setGalleryIndex((current) => current === null ? 0 : (current + direction + shinoliImages.length) % shinoliImages.length);
  }

  function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name") || "";
    const company = data.get("company") || "";
    const phone = data.get("phone") || "";
    const message = data.get("message") || "";
    const subject = encodeURIComponent(`Website enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nCompany: ${company}\nPhone: ${phone}\n\nRequirement:\n${message}`);
    window.location.href = `mailto:sjbadaskar@reddifmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <main className={darkMode ? "dark" : ""}>
      <div className="grain" aria-hidden="true" />
      <header className="site-header">
        <a href="#top" className="brand" aria-label="R.P Engineering home">
          <span className="brand-mark">RP</span>
          <span className="brand-copy"><b>R.P</b> ENGINEERING<small>ENGINEERED FOR ENDURANCE</small></span>
        </a>
        <div className="header-actions">
          <label className="theme-toggle" htmlFor="theme-switch">
            <input id="theme-switch" type="checkbox" aria-label="Toggle dark mode" onChange={(event) => { const isDark = event.currentTarget.checked; applyTheme(isDark); setDarkMode(isDark); }} />
            <span aria-hidden="true">◐</span><b>Theme</b>
          </label>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle menu">
            <i /><i />
          </button>
        </div>
        <nav className={menuOpen ? "nav open" : "nav"}>
          <a href="#capabilities" onClick={() => setMenuOpen(false)}>Capabilities</a>
          <a href="#facilities" onClick={() => setMenuOpen(false)}>Facilities</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About us</a>
          <a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>Start a project <Arrow /></a>
        </nav>
      </header>

      <section id="top" className="hero section-shell">
        <div className="hero-copy reveal">
          <p className="eyebrow"><span /> CASTING · HARDENING · MACHINING</p>
          <h1>Where heat becomes <em>strength.</em></h1>
          <p className="hero-lead">Capability for the parts that keep industry moving—built with discipline, delivered with confidence.</p>
          <div className="hero-actions">
            <a href="#contact" className="button button-hot">Discuss your requirement <Arrow diagonal /></a>
            <a href="#capabilities" className="text-link">Explore capabilities <Arrow /></a>
          </div>
          <div className="hero-metrics">
            <div><strong>03</strong><span>Operating<br />locations</span></div>
            <div><strong>04</strong><span>Core<br />capabilities</span></div>
            <div><strong>01</strong><span>Commitment:<br />quality</span></div>
          </div>
        </div>
        <div className="hero-art reveal delay-1" aria-label="Abstract molten metal industrial artwork" role="img">
          <div className="art-label label-top">MATERIAL / 01</div>
          <div className="art-label label-right">PROCESS CONTROL</div>
          <div className="molten-core"><div className="core-ring" /><div className="core-glow" /></div>
          <div className="wire wire-a" /><div className="wire wire-b" /><div className="wire wire-c" />
          <div className="art-corner">RPE<br /><small>INDUSTRIAL<br />SYSTEMS</small></div>
          <div className="scanline" />
        </div>
      </section>

      <div className="ticker" aria-label="Our services"><div>CASTING <b>✦</b> INDUCTION HARDENING <b>✦</b> FETTLING WORKS <b>✦</b> LIGHT MACHINING <b>✦</b> CASTING <b>✦</b> INDUCTION HARDENING <b>✦</b> FETTLING WORKS <b>✦</b> LIGHT MACHINING <b>✦</b></div></div>

      <section id="about" className="statement section-shell">
        <p className="eyebrow reveal"><span /> BUILT FOR THE REAL WORLD</p>
        <div className="statement-grid">
          <h2 className="reveal">A practical partner for <em>critical</em> manufacturing work.</h2>
          <div className="statement-side reveal delay-1">
            <p>R.P Engineering brings essential metalworking capabilities together under one exacting approach. From thermal processing to final finishing, we focus on work that performs where it matters.</p>
            <a href="#contact" className="text-link">Talk to our team <Arrow /></a>
          </div>
        </div>
      </section>

      <section id="capabilities" className="capabilities section-shell">
        <div className="section-heading reveal"><p className="eyebrow"><span /> WHAT WE DO</p><h2>Proven processes.<br /><em>Purposeful output.</em></h2></div>
        <div className="services">
          {services.map((service, index) => <article className={`service-card reveal delay-${index + 1}`} key={service.no}>
            <div className="service-top"><span>{service.no}</span><span>{service.tag}</span></div>
            <div className={`service-glyph glyph-${index + 1}`} aria-hidden="true"><i /><i /><i /></div>
            <h3>{service.name}</h3><p>{service.text}</p><a href="#contact" aria-label={`Enquire about ${service.name}`} className="card-arrow"><Arrow diagonal /></a>
          </article>)}
        </div>
      </section>

      <section className="process-wrap">
        <div className="section-shell process">
          <div className="process-intro reveal"><p className="eyebrow"><span /> OUR APPROACH</p><h2>Made to move<br /><em>with purpose.</em></h2></div>
          <div className="process-steps">
            {[['01', 'Understand', 'The material, application and performance need.'], ['02', 'Engineer', 'A disciplined route from heat treatment to finish.'], ['03', 'Deliver', 'Reliable work that is ready for the next stage.']].map((step, i) => <div className={`process-step reveal delay-${i + 1}`} key={step[0]}><b>{step[0]}</b><div><h3>{step[1]}</h3><p>{step[2]}</p></div></div>)}
          </div>
        </div>
      </section>

      <section id="facilities" className="facilities section-shell">
        <div className="facility-head reveal"><p className="eyebrow"><span /> OUR FOOTPRINT</p><h2>Close to industry.<br /><em>Ready for work.</em></h2><p>Three operational locations across Maharashtra and Karnataka.</p></div>
        <div className="facility-content">
          <div className="facility-showcase reveal delay-1">
            <button className="facility-photo photo-main" onClick={() => setGalleryIndex(0)} aria-label="Open Shinoli BK photo gallery, image 1 of 3">
              <Image src={shinoliImages[0].src} alt={shinoliImages[0].alt} width={shinoliImages[0].width} height={shinoliImages[0].height} sizes="(max-width: 850px) 68vw, 42vw" />
              <span className="facility-caption"><span>SHINOLI BK / MAHARASHTRA</span><b>Live production</b></span>
            </button>
            <button className="facility-photo photo-detail" onClick={() => setGalleryIndex(1)} aria-label="Open Shinoli BK photo gallery, image 2 of 3">
              <Image src={shinoliImages[1].src} alt={shinoliImages[1].alt} width={shinoliImages[1].width} height={shinoliImages[1].height} sizes="(max-width: 850px) 32vw, 18vw" />
              <span className="gallery-count">03 PHOTOS ↗</span>
            </button>
          </div>
          <button className="gallery-link reveal delay-2" onClick={() => setGalleryIndex(0)}>View Shinoli BK gallery <span>03 photos</span><Arrow /></button>
          <div className="facility-list">
            {facilities.map((facility, index) => <article className={`facility reveal delay-${index + 1}`} key={facility.code}><span className="facility-code">{facility.code}</span><div><h3>{facility.city}</h3><p>{facility.region}</p></div><span className="facility-note">{facility.note}</span><span className="location-pin">+</span></article>)}
          </div>
        </div>
      </section>

      <section id="contact" className="contact section-shell">
        <div className="contact-panel reveal"><div><p className="eyebrow"><span /> LET&apos;S BUILD</p><h2>Bring us your next <em>challenge.</em></h2><p>Tell us about your component, requirement or process need. We&apos;ll take it from there.</p></div><div className="direct-contact"><a href="tel:+919421240625">+91 94212 40625 <Arrow /></a><a href="mailto:sjbadaskar@reddifmail.com">sjbadaskar@reddifmail.com <Arrow /></a><small>Owner: Sanjay Badaskar</small></div></div>
        <form className="contact-form reveal delay-1" onSubmit={submitEnquiry}>
          <label>Your name<input required name="name" placeholder="Enter your name" /></label>
          <label>Company<input name="company" placeholder="Company name" /></label>
          <label>Phone number<input required name="phone" type="tel" placeholder="Your contact number" /></label>
          <label>How can we help?<textarea required name="message" placeholder="Tell us about your requirement" rows={3} /></label>
          <button className="button button-hot" type="submit">Send enquiry <Arrow diagonal /></button>
          {sent && <p className="form-note">Your email app will open with the enquiry details. You can also call us directly.</p>}
        </form>
      </section>

      <footer className="footer section-shell"><a href="#top" className="brand"><span className="brand-mark">RP</span><span className="brand-copy"><b>R.P</b> ENGINEERING<small>ENGINEERED FOR ENDURANCE</small></span></a><p>© {new Date().getFullYear()} R.P Engineering. All rights reserved.</p><a href="#top" className="back-top">Back to top ↑</a></footer>
      {galleryIndex !== null && <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label="Shinoli BK facility photo gallery">
        <button className="gallery-close" onClick={() => setGalleryIndex(null)} aria-label="Close gallery">×</button>
        <button className="gallery-nav gallery-prev" onClick={() => moveGallery(-1)} aria-label="Previous photo">←</button>
        <figure className="gallery-stage">
          <Image src={shinoliImages[galleryIndex].src} alt={shinoliImages[galleryIndex].alt} width={shinoliImages[galleryIndex].width} height={shinoliImages[galleryIndex].height} sizes="90vw" priority />
          <figcaption><span>SHINOLI BK / MAHARASHTRA</span><b>{String(galleryIndex + 1).padStart(2, "0")} / {String(shinoliImages.length).padStart(2, "0")}</b></figcaption>
        </figure>
        <button className="gallery-nav gallery-next" onClick={() => moveGallery(1)} aria-label="Next photo">→</button>
        <p className="gallery-help">Use ← → arrow keys to browse · Esc to close</p>
      </div>}
    </main>
  );
}
