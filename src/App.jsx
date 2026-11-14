import portrait from "./assets/shem-portrait.png";
import ishabella from "./assets/projects/ishabella.png";
import al_nakhailan from "./assets/projects/al-nakhailan.png";
import agritimbang from "./assets/projects/agritimbang.png";
import apusfly from "./assets/projects/apusfly.png";
import smart_activity from "./assets/projects/smart-activity.png";
import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import {
  FiArrowUpRight,
  FiArrowDown,
  FiGithub,
  FiMail,
  FiMenu,
  FiX,
  FiDownload,
} from "react-icons/fi";
import kcera from "./assets/projects/kcera.jpg";
import lcrs from "./assets/projects/lcrs.png";
import dts from "./assets/projects/dts.png";
import ictd from "./assets/projects/ictd.png";
import oss from "./assets/projects/oss.png";
import cv from "./assets/cv.pdf";
import icon from "./assets/icon.png";
import iskolarhub from "./assets/projects/iskolarhub.png";
import su from "./assets/projects/su.png";
import kab from "./assets/projects/kab.png";
import DeveloperJournal from "./components/DeveloperJournal";
import "./index.css";

const work = [
  {
    n: "01",
    name: "KCERA",
    category: "EMERGENCY RESPONSE · COLLEGE CAPSTONE",
    desc: "A mobile-first emergency response ecosystem connecting residents, dispatchers, and responders through real-time reporting and GIS-based coordination.",
    tags: ["Laravel", "React", "React Native", "Socket.IO"],
    img: kcera,
    mobile: true,
    github: "https://github.com/ShemHooks/KCERA",
  },
  {
    n: "02",
    name: "Smart Activity",
    category: "CORPORATE WEBSITE · SAUDI ARABIA",
    desc: "A bilingual corporate website with cinematic visual storytelling, responsive interfaces, and business-focused presentation.",
    tags: ["Next.js", "TypeScript", "Arabic / English"],
    img: smart_activity,
    url: "https://www.smartactivity.net/",
    github: "https://github.com/ShemHooks/smart-activity",
  },
  {
    n: "03",
    name: "ApusFly",
    category: "STARTUP · MOBILE PLATFORM",
    desc: "A drone-services marketplace experience designed to connect customers and pilots through discovery, booking, and mobile-first workflows.",
    tags: ["React Native", "Expo", "TypeScript"],
    img: apusfly,
    mobile: true,
    github: "https://github.com/ShemHooks/apusfly-mobile",
  },
  {
    n: "04",
    name: "AgriTimbang",
    category: "LIVESTOCK · GIS & VALUATION",
    desc: "A livestock records, valuation, and LGU transaction management platform with role-based workflows and geographic reference data.",
    tags: ["Laravel", "MySQL", "GIS", "RBAC"],
    img: agritimbang,
    github: "https://github.com/ShemHooks/agritimbang-lara",
  },
  {
    n: "05",
    name: "Al Nakhailan Law Firm",
    category: "LEGAL · CORPORATE WEBSITE",
    desc: "A premium law firm website with an editorial visual identity, responsive navigation, and English/Arabic presentation.",
    tags: ["Next.js", "TypeScript", "Responsive UI"],
    img: al_nakhailan,
    url: "https://al-nakhailan-law-firm.vercel.app/",
    github: "https://github.com/ShemHooks/al-nakhailan-law-firm",
  },
  {
    n: "06",
    name: "Ishabella Corp",
    category: "CORPORATE · HVAC & SOLAR",
    desc: "A cinematic corporate website showcasing HVAC and solar solutions through high-impact visuals and thoughtful interactions.",
    tags: ["React", "TypeScript", "GSAP"],
    img: ishabella,
    url: "https://ishabellacorp.vercel.app/",
    github: "https://github.com/ShemHooks/ishabella-website",
  },
  {
    n: "07",
    name: "Civil Registry System",
    category: "GOVERNMENT · WORKFLOW PLATFORM",
    desc: "A role-based civil registry platform with document previews, review and approval flows, and structured administrative operations.",
    tags: ["Next.js", "Node.js", "MySQL"],
    img: lcrs,
  },
  {
    n: "08",
    name: "Document Management",
    category: "GOVERNMENT · PRODUCTION SYSTEM",
    desc: "Document tracking and administrative workflow software built to improve transparency and operational efficiency.",
    tags: ["Vue", "Laravel", "MySQL"],
    img: dts,
    url: "https://lgukabdms.online/",
  },
  {
    n: "09",
    name: "ICT Service Ticketing",
    category: "PROVINCIAL ICT · INTERNAL TOOL",
    desc: "An internal service request platform for assignment, progress tracking, and operational reporting.",
    tags: ["Laravel", "React", "MySQL"],
    img: ictd,
  },
  {
    n: "10",
    name: "One-Stop Shop Appointments",
    category: "PROVINCIAL ICT · BOOKING",
    desc: "A streamlined appointment experience for public-facing government services.",
    tags: ["Next.js", "TypeScript"],
    img: oss,
  },

  {
    n: "11",
    name: "SpeakUp",
    category: "CIVIC TECHNOLOGY · CITIZEN ENGAGEMENT",
    desc: "A citizen engagement platform that enables residents to anonymously submit concerns, complaints, and suggestions to their local government unit.",
    tags: ["Next.js", "Drizzle ORM", "PostgreSQL"],
    img: su,
    url: "https://speakup-iota.vercel.app/",
    github: "https://github.com/ShemHooks/speakup",
  },
  {
    n: "12",
    name: "Kabankalan City Website",
    category: "WEB DESIGN · PERSONAL REDESIGN CONCEPT",
    desc: "A personal redesign concept for the Kabankalan City website, exploring a modern and engaging approach to presenting the city's identity, information, and digital presence.",
    tags: ["React", "Responsive Design"],
    img: kab,
    url: "https://welcome-to-kabankalan.vercel.app/",
    github: "https://github.com/ShemHooks/welcome-to-Kabankalan",
  },
];
const skills = [
  "React / Next.js",
  "Vue.js / Quasar",
  "TypeScript / JavaScript",
  "Laravel / PHP / Python",
  "Node.js / Express",
  "React Native / Expo",
  "MySQL / PostgreSQL",
  "Docker / Kubernetes",
  "Git / Github",
  "GoDaddy / Hostinger",
];

const achievements = [
  {
    n: "01",
    title: "Programming Challenge Champion",
    organization: "FBC Kabankalan",
    date: "March 2023",
    type: "COMPETITION",
  },
  {
    n: "02",
    title: "3rd Kabankalan Technovation Startup Competition Champion",
    organization: "Kabankalan City",
    date: "September 2025",
    type: "STARTUP COMPETITION",
  },
  {
    n: "03",
    title: "Best Research Awardee",
    organization: "Kabankalan Catholic College",
    date: "May 2026",
    type: "ACADEMIC RECOGNITION",
  },
  {
    n: "04",
    title: "Best Intern Awardee",
    organization: "Kabankalan Catholic College",
    date: "May 2026",
    type: "INTERNSHIP RECOGNITION",
  },
];

const Reveal = ({ children, className = "", delay = 0 }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.12 }}
    transition={{ duration: 0.7, delay, ease: [0.2, 0.8, 0.2, 1] }}
  >
    {children}
  </motion.div>
);

function CinematicProject({
  project: p,
  index,
  total,
  progress,
  reducedMotion,
  activeIndex,
}) {
  const opacity = useTransform(progress, (value) => {
    const position = value * (total - 1);
    return Math.max(0, Math.min(1, 1 - Math.abs(position - index)));
  });

  return (
    <motion.div
      className="cinematic-project-card"
      style={reducedMotion ? undefined : { opacity }}
      aria-hidden={!reducedMotion && activeIndex !== index ? true : undefined}
      inert={!reducedMotion && activeIndex !== index}
    >
      <article className="project">
        <div
          className={`project-visual ${
            p.mobile ? "project-visual-mobile" : ""
          }`}
        >
          <div className={p.mobile ? "phone-frame" : "project-image-frame"}>
            <img
              src={p.img}
              alt={`${p.name} project screenshot`}
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>

          <span className="project-num">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(total).padStart(2, "0")}
          </span>
        </div>

        <div className="project-info">
          <span className="eyebrow">{p.category}</span>
          <h3>{p.name}</h3>
          <p>{p.desc}</p>

          <div className="tags">
            {p.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <div className="project-actions">
            {p.url && (
              <a
                className="project-link"
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                LIVE WEBSITE <FiArrowUpRight />
              </a>
            )}

            {p.github && (
              <a
                className="project-link"
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub /> GITHUB <FiArrowUpRight />
              </a>
            )}

            {!p.url && !p.github && (
              <span className="project-private">
                INTERNAL / PRIVATE PROJECT
              </span>
            )}
          </div>
        </div>
      </article>
    </motion.div>
  );
}

function CinematicProjects({ projects, reducedMotion }) {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const nextIndex = Math.min(
      projects.length - 1,
      Math.max(0, Math.round(value * (projects.length - 1))),
    );

    setActiveIndex((current) => (current === nextIndex ? current : nextIndex));
  });

  return (
    <div
      ref={trackRef}
      className="cinematic-showcase-track"
      style={{
        "--project-count": projects.length,
      }}
    >
      <div className="cinematic-showcase-sticky">
        {projects.map((project, index) => (
          <CinematicProject
            key={project.n}
            project={project}
            index={index}
            total={projects.length}
            progress={scrollYProgress}
            reducedMotion={reducedMotion}
            activeIndex={activeIndex}
          />
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [menu, setMenu] = useState(false);
  const visibleWork = work;
  // One pinned scene: zoom first, then crossfade into Introduction.
  const sceneRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start 96px", "end end"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 42,
    mass: 0.4,
  });
  const zoom = useTransform(
    progress,
    [0, 0.18, 0.48, 0.72, 0.8, 1],
    [1, 1.2, 2.5, 5, 7, 7],
  );
  const heroFade = useTransform(progress, [0, 0.79, 0.94], [1, 1, 0]);
  const introFade = useTransform(progress, [0, 0.8, 0.96], [0, 0, 1]);
  const introRise = useTransform(progress, [0.8, 0.96], [45, 0]);
  const introPointerEvents = useTransform(progress, (value) =>
    value > 0.91 ? "auto" : "none",
  );
  const detailFade = useTransform(progress, [0, 0.12, 0.28], [1, 1, 0]);

  return (
    <div className="site">
      <header className="header">
        <a className="brand" href="#home">
          <span className="brand-mark">
            <img src={icon} alt="" />
          </span>
          <span className="brand-word">
            SHEM
            <br />
            <em>REGIDOR</em>
          </span>
        </a>
        <nav className={menu ? "nav open" : "nav"}>
          {[
            ["ABOUT", "#about"],
            ["WORK", "#work"],
            ["EXPERIENCE", "#experience"],
            ["STACK", "#stack"],
            ["ACHIEVEMENTS", "#achievements"],
            ["JOURNAL", "#journal"],
            ["CONTACT", "#contact"],
          ].map(([a, b]) => (
            <a key={a} href={b} onClick={() => setMenu(false)}>
              {a}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a className="resume" href={cv} target="_blank" rel="noreferrer">
            RESUME <FiArrowUpRight />
          </a>
          <button
            className="mobile-toggle"
            onClick={() => setMenu(!menu)}
            aria-label="Toggle navigation"
          >
            {menu ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </header>
      <main>
        <div ref={sceneRef} className="hero-zoom-track" id="home">
          <div className="cinematic-scene">
            <section className="hero hero-zoom">
              <div className="hero-noise" />
              <motion.div
                className="hero-meta"
                style={reduceMotion ? {} : { opacity: detailFade }}
              >
                <span>
                  <i className="status-dot" /> AVAILABLE FOR OPPORTUNITIES
                </span>
                <span>
                  BASED IN THE PHILIPPINES <b>↗</b> WORKING WORLDWIDE
                </span>
              </motion.div>
              <motion.div
                className="hero-center hero-editorial hero-zoom-content"
                style={reduceMotion ? {} : { scale: zoom, opacity: heroFade }}
              >
                <div className="hero-copy">
                  <p className="hero-kicker">
                    FULL-STACK SOFTWARE DEVELOPER <span> / </span> PORTFOLIO
                    2026
                  </p>
                  <h1>
                    <span>BUILDING</span>
                    <span>WHAT'S</span>
                    <span>
                      NEXT<span className="hero-period">.</span>
                    </span>
                  </h1>
                  <p className="hero-intro">
                    I'm <strong>Shem Regidor</strong> — a software developer
                    crafting purposeful products across web, mobile, and systems
                    engineering.
                  </p>
                  <div className="hero-cta-row">
                    <a href="#work" className="hero-primary">
                      VIEW MY WORK <FiArrowUpRight />
                    </a>
                    <a href="#about" className="hero-secondary">
                      MORE ABOUT ME <FiArrowDown />
                    </a>
                  </div>
                  <div className="hero-what-i-do">
                    <p className="eyebrow">WHAT I DO</p>
                    <p>
                      I build purposeful digital products—from elegant
                      interfaces to reliable systems.
                    </p>
                  </div>
                </div>
                <div className="hero-video-composition">
                  <div className="hero-video-frame">
                    <video
                      className="hero-video"
                      src="/videos/shem_python_hero.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />
                  </div>
                  <span className="portrait-corner portrait-corner-tl" />
                  <span className="portrait-corner portrait-corner-br" />
                  <div className="hero-video-stamp">
                    SHEM REGIDOR <span>/ SOFTWARE DEVELOPER</span>
                  </div>
                  <div className="hero-video-number">01 — 26</div>
                </div>
                <div className="hero-signature" aria-hidden="true">
                  SR / DEV
                </div>
              </motion.div>
              <div className="hero-index">01 / 05</div>
            </section>
            <motion.section
              className="intro section intro-reveal"
              id="about"
              style={
                reduceMotion
                  ? {}
                  : {
                      opacity: introFade,
                      y: introRise,
                      pointerEvents: introPointerEvents,
                    }
              }
            >
              <div className="section-heading">
                <span className="eyebrow">01 / INTRODUCTION</span>
                <span className="rule" />
              </div>
              <div className="intro-layout">
                <h2>
                  BUILDING
                  <br />
                  <span>WITH PURPOSE.</span>
                </h2>
                <div className="intro-copy">
                  <p>
                    I'm a software developer who enjoys turning complex problems
                    into thoughtful, practical digital experiences.
                  </p>
                  <p>
                    My work spans full-stack web applications, mobile products,
                    internal government systems, and tools that help people get
                    things done.
                  </p>
                  <a href="#contact" className="text-link">
                    LET'S WORK TOGETHER <FiArrowUpRight />
                  </a>
                </div>
              </div>
            </motion.section>
          </div>
        </div>
        <section className="work-cinematic" id="work">
          <div className="work-intro section">
            <div className="section-heading">
              <span className="eyebrow">02 / SELECTED WORK</span>
              <span className="rule" />
              <span className="small-count">2025 — 2026</span>
            </div>

            <div className="work-heading">
              <h2>
                ALL
                <br />
                <span>PROJECTS.</span>
              </h2>

              <p>
                A selection of applications and platforms built around real
                problems, real workflows, and real people.
              </p>
            </div>
          </div>

          <CinematicProjects
            projects={visibleWork}
            reducedMotion={reduceMotion}
          />
        </section>
        <section className="experience section" id="experience">
          <div className="section-heading">
            <span className="eyebrow">03 / EXPERIENCE</span>
            <span className="rule" />
          </div>
          <Reveal>
            <h2 className="section-title">
              WHERE I'VE
              <br />
              <span>BUILT VALUE.</span>
            </h2>
          </Reveal>
          <div className="timeline">
            <div className="timeline-row">
              <span>2026 — PRESENT</span>
              <div>
                <h3>Mobile App Developer</h3>
                <strong className="experience-company">
                  ApusFly · Startup
                </strong>
                <p>
                  Developing mobile experiences and product workflows for a
                  drone services booking platform.
                </p>
              </div>
              <span className="timeline-label">STARTUP</span>
            </div>
            <div className="timeline-row">
              <span>2026</span>
              <div>
                <h3>Full-Stack Developer</h3>
                <strong className="experience-company">
                  Yaramay IT Services
                </strong>
                <p>
                  Full-stack software development and delivery of web-based
                  solutions.
                </p>
              </div>
              <span className="timeline-label">SOFTWARE</span>
            </div>
            <div className="timeline-row">
              <span>2026</span>
              <div>
                <h3>Site Reliability Engineer Trainee</h3>
                <strong className="experience-company">OpsWerks</strong>
                <p>
                  Training in site reliability engineering, infrastructure, and
                  operational practices.
                </p>
              </div>
              <span className="timeline-label">SRE</span>
            </div>
            <div className="timeline-row">
              <span>2026</span>
              <div>
                <h3>Full-Stack Developer (OJT)</h3>
                <strong className="experience-company">
                  Negros Occidental ICT Division
                </strong>
                <p>
                  Developed internal government systems and supported hardware,
                  software, and networking operations.
                </p>
              </div>
              <span className="timeline-label">GOVERNMENT ICT</span>
            </div>
            <div className="timeline-row">
              <span>PROJECT-BASED</span>
              <div>
                <h3>Software Developer</h3>
                <strong className="experience-company">Freelance</strong>
                <p>
                  Building client-facing websites and applications across
                  frontend and backend technologies.
                </p>
              </div>
              <span className="timeline-label">FREELANCE</span>
            </div>
          </div>
        </section>
        <section className="stack section" id="stack">
          <div className="section-heading">
            <span className="eyebrow">04 / CAPABILITIES</span>
            <span className="rule" />
          </div>
          <div className="stack-layout">
            <Reveal>
              <div>
                <h2 className="section-title">
                  TOOLS OF
                  <br />
                  <span>THE TRADE.</span>
                </h2>
                <p className="stack-sub">
                  The technologies I use to turn ambitious ideas into reliable,
                  maintainable software.
                </p>
              </div>
            </Reveal>
            <div className="skill-list">
              {skills.map((s, i) => (
                <div key={s} className="skill">
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <strong>{s}</strong>
                  <FiArrowUpRight />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="achievements section" id="achievements">
          <div className="section-heading">
            <span className="eyebrow">05 / ACHIEVEMENTS</span>
            <span className="rule" />
            <span className="small-count">2023 — 2026</span>
          </div>

          <Reveal>
            <h2 className="section-title">
              MILESTONES
              <br />
              <span>& RECOGNITION.</span>
            </h2>
          </Reveal>

          <div className="achievements-list">
            {achievements.map((achievement) => (
              <Reveal key={achievement.n}>
                <div className="achievement-row">
                  <span className="achievement-number">{achievement.n}</span>

                  <div className="achievement-details">
                    <span className="eyebrow">{achievement.type}</span>
                    <h3>{achievement.title}</h3>
                    <p>{achievement.organization}</p>
                  </div>

                  <div className="achievement-date">
                    <span>{achievement.date}</span>
                    <FiArrowUpRight aria-hidden="true" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <DeveloperJournal />
        <section className="contact section" id="contact">
          <span className="eyebrow">07 / CONTACT</span>
          <Reveal>
            <p>HAVE A PROJECT IN MIND?</p>
            <h2>
              LET'S BUILD
              <br />
              <em>SOMETHING</em>
              <br />
              MEANINGFUL<span>.</span>
            </h2>
            <a href="mailto:shemregidor@gmail.com" className="contact-cta">
              START A CONVERSATION <FiArrowUpRight />
            </a>
          </Reveal>
          <div className="contact-bottom">
            <span>© {new Date().getFullYear()} SHEM REGIDOR</span>
            <div>
              <a
                href="https://github.com/ShemHooks"
                target="_blank"
                rel="noreferrer"
              >
                <FiGithub /> GITHUB
              </a>
              <a href={cv} target="_blank" rel="noreferrer">
                <FiDownload /> RESUME
              </a>
              <a href="mailto:shemregidor@gmail.com">
                <FiMail /> EMAIL
              </a>
            </div>
            <a href="#home">BACK TO TOP ↑</a>
          </div>
        </section>
      </main>
    </div>
  );
}
