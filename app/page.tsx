"use client";

import { useEffect } from "react";
import Logo from "./Logo";

const ACCENT = "#5a6573";
const pillars = ["Design", "Development", "Stewardship", "Community"];

const services = [
  {
    name: "Residential Development",
    sector: "Build",
    text: "Master-planned, community-centred homes — thoughtfully designed and built for everyday liveability and lasting value."
  },
  {
    name: "Asset Management",
    sector: "Steward",
    text: "Active stewardship of income-generating assets — repositioning, leasing and care that protect and grow long-term value."
  },
  {
    name: "Design & Quality",
    sector: "Craft",
    text: "Modern aesthetics paired with quality construction — spaces that blend functionality, comfort and enduring appeal."
  }
];

const projects = [
  { name: "Templer Park", meta: "Master-planned residential · Selangor", img: "/images/property-templer.jpg", text: "A phased, master-planned community designed around nature, connectivity and lasting value." },
  { name: "Willow", meta: "Residential community · Selangor", img: "/images/property-willow.jpg", text: "A considered residential community blending modern design with everyday liveability." },
  { name: "Tecoma", meta: "Residential development · Selangor", img: "/images/property-tecoma.jpg", text: "Quality-built homes designed around community, comfort and lasting value." },
  { name: "Tampin", meta: "Residential development · Negeri Sembilan", img: "/images/property-tampin.jpg", text: "Regional inventory extending considered living beyond the Klang Valley." },
  { name: "Bidara", meta: "Residential development · Pahang", img: "/images/property-bidara.jpg", text: "Community-centred housing supporting growth in priority regional corridors." }
];

const values = [
  { label: "Considered Design", text: "Thoughtful planning and modern aesthetics that put community and daily life first." },
  { label: "Quality Build", text: "High standards of construction and materials, delivered with discipline." },
  { label: "Lasting Value", text: "Places designed to appreciate — for residents, communities and the long term." }
];

const companies = [
  { name: "AMLI Group", href: "https://amli.group" },
  { name: "AMLI Mountains", href: "https://mountains.amli.group" },
  { name: "AMLI Property", href: "https://property.amli.group" },
  { name: "AMLI Kredit", href: "https://kredit.amli.group" },
  { name: "AMLI Asia Capital", href: "https://capital.amli.group" },
  { name: "AMLI Greens", href: "https://greens.amli.group" }
];

export default function Page() {
  useEffect(() => {
    document.documentElement.classList.add("reveal-ready");
    const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    items.forEach((item) => observer.observe(item));
    const header = document.querySelector(".site-header");
    const onScroll = () => {
      if (header) header.classList.toggle("is-scrolled", window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <header className="site-header">
        <nav className="nav" aria-label="Primary navigation">
          <a href="#home" className="nav__brand" aria-label="AMLI Property home">
            <Logo reversed />
          </a>
          <div className="nav__links">
            <a href="#about">About</a>
            <a href="#services">What We Do</a>
            <a href="#projects">Projects</a>
            <a href="#approach">Approach</a>
            <a href="#contact">Contact</a>
          </div>
          <a className="nav__cta" href="#contact">
            Enquire
          </a>
        </nav>
      </header>

      <main id="home">
        <section className="hero hero--property">
          <div className="hero__motion" aria-hidden="true">
            <svg className="hero__motion-svg" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
              <defs>
                <radialGradient id="prpA" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#8a97a8" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#8a97a8" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="prpB" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#5f6f86" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#5f6f86" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle className="blob blob--a" cx="420" cy="250" r="430" fill="url(#prpA)" />
              <circle className="blob blob--b" cx="1140" cy="640" r="470" fill="url(#prpB)" />
              <g className="hero__motif" stroke="rgba(190,201,214,0.10)" strokeWidth="1">
                <line x1="120" y1="0" x2="120" y2="900" />
                <line x1="300" y1="0" x2="300" y2="900" />
                <line x1="480" y1="0" x2="480" y2="900" />
                <line x1="660" y1="0" x2="660" y2="900" />
                <line x1="840" y1="0" x2="840" y2="900" />
                <line x1="1020" y1="0" x2="1020" y2="900" />
                <line x1="1200" y1="0" x2="1200" y2="900" />
                <line x1="1380" y1="0" x2="1380" y2="900" />
                <line x1="0" y1="150" x2="1440" y2="150" />
                <line x1="0" y1="320" x2="1440" y2="320" />
                <line x1="0" y1="490" x2="1440" y2="490" />
                <line x1="0" y1="660" x2="1440" y2="660" />
              </g>
              <g className="hero__motif" fill="none" stroke="rgba(205,215,228,0.26)" strokeWidth="1.6">
                <rect x="250" y="470" width="150" height="430" />
                <rect x="430" y="360" width="120" height="540" />
                <rect x="600" y="540" width="170" height="360" />
                <rect x="820" y="300" width="130" height="600" />
                <rect x="1000" y="500" width="150" height="400" />
                <rect x="1190" y="410" width="120" height="490" />
              </g>
            </svg>
          </div>
          <div className="hero__overlay" />
          <div className="hero__content">
            <div className="hero__copy hero__copy--animate">
              <p className="eyebrow eyebrow--hero">AMLI Property</p>
              <h1>
                Spaces made
                <br /> to last.
              </h1>
              <p className="hero__subtitle">
                AMLI Property crafts community-centred living through considered design and
                quality builds — creating places that blend modern aesthetics with lasting
                functionality and long-term value.
              </p>
              <div className="button-row">
                <a className="button button--primary" href="#projects">
                  View our projects
                </a>
                <a className="button button--secondary button--on-dark" href="#contact">
                  Enquire
                </a>
              </div>
              <ul className="hero__pillars" aria-label="What we value">
                {pillars.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section section--mist" id="about" data-reveal>
          <div className="section__inner">
            <div className="section-heading section-heading--wide">
              <p className="eyebrow">About AMLI Property</p>
              <h2>Community-centred living, built to last.</h2>
              <p>
                AMLI Property develops and stewards residential and commercial communities
                across Malaysia. We prioritise considered design, quality construction and
                long-term value — creating spaces that are modern, functional and made for
                the people who live in them. As part of the AMLI group, we draw on an
                integrated platform of land, development, financing and after-sales care.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="services" data-reveal>
          <div className="section__inner">
            <div className="section-heading section-heading--wide">
              <p className="eyebrow">What We Do</p>
              <h2>From land to lasting communities.</h2>
            </div>
            <div className="company-grid" aria-label="Capabilities">
              {services.map((c, i) => (
                <article
                  className="company-card company-card--static"
                  key={c.name}
                  data-reveal
                  style={{ ["--accent" as string]: ACCENT, transitionDelay: `${i * 60}ms` }}
                >
                  <p className="eyebrow">{c.sector}</p>
                  <h3>{c.name}</h3>
                  <p>{c.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--mist" id="projects" data-reveal>
          <div className="section__inner">
            <div className="section-heading section-heading--wide">
              <p className="eyebrow">Projects</p>
              <h2>Communities under development.</h2>
              <p>A residential pipeline anchored by Templer Park, extending across the Klang Valley and priority regional corridors.</p>
            </div>
            <div className="project-grid" aria-label="Development projects">
              {projects.map((p, i) => (
                <article className="project-card" key={p.name} data-reveal style={{ transitionDelay: `${i * 60}ms` }}>
                  <div className="project-card__image">
                    <img src={p.img} alt={`${p.name} development`} loading="lazy" />
                  </div>
                  <div className="project-card__body">
                    <p className="eyebrow">{p.meta}</p>
                    <h3>{p.name}</h3>
                    <p>{p.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--stone" id="approach" data-reveal>
          <div className="section__inner">
            <div className="section-heading section-heading--wide">
              <p className="eyebrow">Our Approach</p>
              <h2>Three principles in every project.</h2>
            </div>
            <div className="feature-grid" aria-label="Principles">
              {values.map((v, i) => (
                <article className="feature-card" key={v.label} data-reveal style={{ transitionDelay: `${i * 60}ms` }}>
                  <h3>{v.label}</h3>
                  <p>{v.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta" data-reveal>
          <div className="final-cta__inner">
            <div>
              <p className="eyebrow eyebrow--light">An AMLI Group company</p>
              <h2>Build a community with us.</h2>
            </div>
            <div className="button-row">
              <a className="button button--primary" href="#contact">
                Enquire
              </a>
              <a className="button button--secondary button--on-dark" href="https://amli.group">
                Explore AMLI Group
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="contact" data-reveal>
          <div className="section__inner section__inner--contact">
            <div className="contact-details">
              <p className="eyebrow">Contact</p>
              <h2>Sales and general enquiries.</h2>
              <address>
                Wisma AMLI, 14&ndash;14C, Jalan 20/38A, Off Jalan Segambut
                <br />
                Taman Sri Sinar, 51200 Kuala Lumpur, Malaysia
              </address>
              <p><strong>General:</strong> +60 3-6263 6464</p>
              <p>
                <strong>Email:</strong>{" "}
                <a className="text-link" href="mailto:property.contact@amli.group">property.contact@amli.group</a>
              </p>
              <iframe
                title="AMLI Property office map"
                src="https://www.google.com/maps?q=14%20Jalan%2020%2F38A%20Taman%20Sri%20Sinar%2051200%20Kuala%20Lumpur%20Malaysia&output=embed"
                loading="lazy"
              />
            </div>
            <div className="callout callout--gold">
              <p className="eyebrow">Enquire</p>
              <h2>Find your next home.</h2>
              <p>Interested in an AMLI Property development or a partnership? Tell us what you&rsquo;re looking for and our team will be in touch.</p>
              <div className="button-row">
                <a className="button button--primary" href="mailto:property.contact@amli.group">Email our team</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__inner">
          <div>
            <Logo reversed />
            <p>Anchored &middot; Merit &middot; Legacy &middot; Intent</p>
          </div>
          <div className="footer__columns">
            <div>
              <h3>AMLI Companies</h3>
              {companies.map((c) => (
                <a key={c.name} href={c.href}>{c.name}</a>
              ))}
            </div>
            <div>
              <h3>Company</h3>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#approach">Approach</a>
            </div>
            <div>
              <h3>Contact</h3>
              <a href="mailto:property.contact@amli.group">property.contact@amli.group</a>
              <a href="tel:+60362636464">+60 3-6263 6464</a>
            </div>
          </div>
        </div>
        <div className="footer__legal">
          <p>&copy; 2026 AMLI Property. An AMLI Group company.</p>
          <p>Kuala Lumpur, Malaysia</p>
        </div>
      </footer>
    </>
  );
}
