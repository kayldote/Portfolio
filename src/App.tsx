import { RelevantCoursework } from "./components/RelevantCoursework";
import { useState, useRef, useEffect, type ReactNode } from "react"

import { createPortal } from "react-dom";
import { projects } from "./data/projects";
import { ProjectOverview } from "./components/ProjectOverview";
import { HexagonCaseStudy } from "./components/HexagonCaseStudy";


import lilyImage from "./assets/Lily.png";
import lilyLeftImage from "./assets/Lily2.png";

import portraitPhoto from "./assets/E6D92975-1C6F-4B45-998C-AB2B7CB000AA 2.jpg";
import dancePhoto from "./assets/about-dance.jpg";
import visitPhoto from "./assets/about-visit.jpg";
import newPhoto from "./assets/about-photo-4.jpg";
import outdoorPhoto from "./assets/69692b8e-ffec-4aa0-955e-d8a915aba414.jpg";
import { PetNestCaseStudy } from "./components/PetNestCaseStudy";
import { PandaExpressCaseStudy } from "./components/PandaExpressCaseStudy";
import { ViasatCaseStudy } from "./components/ViasatCaseStudy";
import { GraphicDesignGallery } from "./components/GraphicDesignGallery";

// Edit each caption below. The order here is the slideshow order in both views.
const aboutPhotos = [
  {
    src: portraitPhoto,
    caption: "me!",
    position: "50% 45%",
  },
  {
    src: dancePhoto,
    caption: "performing a traditional filipino dance",
    position: "53% 50%",
  },
  {
    src: visitPhoto,
    caption: "me & the mission control center!",
    position: "70% 50%",
  },
  {
    src: newPhoto,
    caption: "holding our sold out designs",
    position: "50% 50%",
  },
  {
    src: outdoorPhoto,
    caption: "btho 90 hours & got my aggie gold :)",
    position: "50% 45%",
  },
];

const projectPhotoFiles = import.meta.glob<string>("./assets/projects/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG}", { eager: true, query: "?url", import: "default" });
const projectPhotos = Object.entries(projectPhotoFiles).map(([path, src]) => ({
  src,
  caption: path.split("/").pop()!.replace(/\.[^.]+$/, "").replace(/[_-]/g, " "),
  position: "50% 50%",
}));

function AboutSlideshow({ expanded = false, enabled = true, photos = aboutPhotos, project = false }: { expanded?: boolean; enabled?: boolean; photos?: typeof aboutPhotos; project?: boolean }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused || !enabled || photos.length < 2) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % photos.length);
    }, 3000);
    return () => window.clearInterval(timer);
  }, [paused, enabled, photos.length]);

  return (
    <span
      className={`about-slideshow${project ? " project-slideshow" : ""}${expanded ? " about-slideshow-expanded" : ""}`}
      aria-hidden="true"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <span className="slideshow-image-area">
      {photos.map((photo, index) => (
        <img
          key={photo.src}
          data-no-enlarge
          src={photo.src}
          alt=""
          draggable={false}
          className="about-slide"
          style={{ opacity: index === active ? 1 : 0, objectPosition: photo.position }}
        />
      ))}
      <span className="slideshow-dots">
        {photos.map((photo, index) => (
          <span key={photo.src} style={{ opacity: index === active ? 1 : 0.4 }} />
        ))}
      </span>
      </span>
      <span className="slideshow-caption">{photos[active % photos.length].caption}</span>
    </span>
  );
}

function AboutPhotoColumn({ enabled = true }: { enabled?: boolean }) {
  return <div className="about-photo-column"><AboutSlideshow expanded enabled={enabled} />
        <a
          href="https://www.linkedin.com/in/kaylee-s-568149272"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-link"
          style={{ alignSelf: "flex-start", fontSize: 14 }}
          aria-label="Connect on LinkedIn (opens in a new tab)"
        >
          Connect on LinkedIn ↗
        </a>
  </div>;
}

type SectionKey = "about" | "projects" | "skills" | "experience"

interface Section {
  key: SectionKey
  label: string
  gradient: string
  labelColor: string
  expandedContent: ReactNode
}



const resumeExperience = (
  <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
    {[
      {
        role: "Science Engagement Intern",
        company: "Amentum JETS II",
        period: "Summer 2026",
        detail: "Built a web app meant to digitize a manual process, decreasing activity completion time by 83%. Expanded upon the project to include 7 new builders to serve different audiences.",
      },
      {
        role: "Graphic Design Chair",
        company: "Philippine Student Association",
        period: "Jun 2025 - Jun 2026",
        detail:
          "Designed visual assets to be used on organizations merchandise in order to create appeal and generate over $2000 in profit. Designed and distributed 6 merchandise lines.",
      },
    ].map((r) => (
      <div key={r.role} style={{ display: "flex", gap: 14 }}>
        <div
          style={{
            width: 3,
            borderRadius: 4,
            background: "rgba(255,255,255,0.4)",
            flexShrink: 0,
            minHeight: 60,
          }}
        />
        <div>
          <p
            style={{
              color: "#502238",
              fontWeight: 600,
              fontSize: 14,
              margin: 0,
            }}
          >
            {r.role}
          </p>
          <p style={{ color: "#502238", fontSize: 12, margin: "2px 0 6px" }}>
            {r.company} · {r.period}
          </p>
          <p
            style={{
              color: "#502238",
              fontSize: 13,
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            {r.detail}
          </p>
        </div>
      </div>
    ))}
  </div>
)

const sections: Section[] = [
  {
    key: "about",
    label: "about me",
    gradient: "linear-gradient(to bottom, #d5e2eb, #d6a0b6)",
    labelColor: "#502238",
    expandedContent: (
      <div className="about-story">
        <div className="about-story-intro">
          <h3>Howdy, I’m Kaylee :)</h3>
          <p>With a background in graphic design and computer science, I’m drawn to designing technology that people truly love.</p>
        </div>
        <section className="about-story-note">
          <h4>What draws me to design</h4>
          <p>Useful products deserve thoughtful experiences. I often wonder why something with a great purpose can still feel uninviting or difficult to use. That’s the gap I want to help close.</p>
        </section>
        <section className="about-story-note about-story-exploring">
          <h4>Where my curiosity takes me</h4>
          <p>I enjoy building front-end experiences, understanding users, and exploring new design ideas. I’m also curious about how AI can support the design process and help bring new products to life.</p>
        </section>
        <section className="about-story-offline">
          <h4>Away from the screen</h4>
          <p>You’ll find me making crafts, collecting trinkets, or hanging out with my five cats.</p>
        </section>

      </div>
    ),
  },
  {
    key: "projects",
    label: "projects",
    gradient: "linear-gradient(to bottom, #d5a0b4, #ebe7cc)",
    labelColor: "#502238",
    expandedContent: (
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {projects.map((p) => (
          <a
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="project-link"
            style={{
              display: "block",
              textDecoration: "none",
              color: "#502238",
              background: "rgba(255,255,255,0.18)",
              borderRadius: 10,
              padding: "12px 16px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                gap: 12,
              }}
            >
              <span style={{ color: "#502238", fontWeight: 600, fontSize: 15, minWidth: 0, flex: 1 }}>
                {p.name}
              </span>
              <span style={{ color: "#502238", fontSize: 12, whiteSpace: "nowrap", flexShrink: 0 }}>{p.year}</span>
            </div>
            <p
              style={{
                color: "#502238",
                fontSize: 13,
                lineHeight: 1.6,
                margin: "4px 0 0",
              }}
            >
              {p.desc}
            </p>
            <span
              style={{
                display: "block",
                marginTop: 10,
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              View project →
            </span>
          </a>
        ))}
      </div>
    ),
  },
  {
    key: "skills",
    label: "skills",
    gradient: "linear-gradient(to bottom, #ebe6d2, #d3dddf)",
    labelColor: "#502238",
    expandedContent: (
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {[
          {
            category: "Design",
            items: ["Figma/Figma Make", "Prototyping", "User Research", "Adobe Illustrator", "Adobe Suite"],
          },
          {
            category: "Frontend",
            items: ["HTML/CSS", "React/React Native", "TypeScript", "Tailwind CSS", "Bootstrap"],
          },
          {
            category: "Other",
            items: ["Git/GitHub", "Express" ,"Node.js", "Postgres", "REST APIs", "GraphQL", "PostgreSQL/SQL/MySQL", "Codex CLI"],
          },
        ].map((group) => (
          <div key={group.category}>
            <p
              style={{
                color: "#502238",
                fontSize: 11,
                fontWeight: 600,
                marginBottom: 8,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                margin: "0 0 8px",
              }}
            >
              {group.category}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {group.items.map((item) => (
                <span
                  key={item}
                  style={{
                    background: "rgba(255,255,255,0.55)",
                    color: "#502238",
                    borderRadius: 6,
                    padding: "3px 12px",
                    fontSize: 13,
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    key: "experience",
    label: "experience and impact",
    gradient: "linear-gradient(to bottom, #d9aec4, #cbb5ce)",
    labelColor: "#502238",
    expandedContent: (
      <div style={{ display: "grid", gap: 20 }}>
        {resumeExperience}
        <RelevantCoursework />
      </div>
    ),
  },
]

const sectionHints: Record<SectionKey, string> = {
  about: "get to know me",
  projects: "check out my work",
  skills: "the tools I've used",
  experience: "understand my impact",
};

interface Rect {
  top: number
  left: number
  width: number
  height: number
}

interface SectionCardProps {
  section: Section
  openKey: SectionKey | null
  setOpenKey: (k: SectionKey | null) => void
  fullHeight?: boolean
}

function SectionCard({
  section,
  openKey,
  setOpenKey,
  fullHeight,
}: SectionCardProps) {
  const [hintPosition, setHintPosition] = useState<{ x: number; y: number } | null>(null);
  const hintRef = useRef<HTMLSpanElement>(null);
  const cardRef = useRef<HTMLButtonElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const [viewport, setViewport] = useState(() => ({
    width: window.innerWidth,
    height: window.innerHeight,
  }))
  const [originRect, setOriginRect] = useState<Rect | null>(null)
  // phase: idle → expanding → open → collapsing → idle
  const [phase, setPhase] =
    useState<"idle" | "expanding" | "open" | "collapsing">("idle")
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const isMe = openKey === section.key

  useEffect(() => {
    const resize = () => {
      setViewport({ width: window.innerWidth, height: window.innerHeight })
      if (cardRef.current) {
        const { top, left, width, height } =
          cardRef.current.getBoundingClientRect()
        setOriginRect({ top, left, width, height })
      }
    }
    window.addEventListener("resize", resize)
    return () => window.removeEventListener("resize", resize)
  }, [])

  useEffect(() => {
    if (isMe && phase === "idle" && cardRef.current) {
      const { top, left, width, height } =
        cardRef.current.getBoundingClientRect()
      setOriginRect({ top, left, width, height })
      setPhase("expanding")
    } else if (isMe && phase === "expanding") {
      timerRef.current = setTimeout(() => setPhase("open"), 30)
    } else if (isMe && phase === "collapsing") {
      setPhase("open")
    } else if (!isMe && (phase === "open" || phase === "expanding")) {
      setPhase("collapsing")
    } else if (!isMe && phase === "collapsing") {
      timerRef.current = setTimeout(() => {
        setPhase("idle")
        setOriginRect(null)
        cardRef.current?.focus({ preventScroll: true })
      }, 370)
    }
    return () => {
      if (timerRef.current !== null) clearTimeout(timerRef.current)
    }
  }, [isMe, phase])

  useEffect(() => {
    if (isMe) dialogRef.current?.focus({ preventScroll: true })
  }, [isMe, phase])

  const vw = viewport.width
  const vh = viewport.height
  const expandW = Math.max(1, Math.min(section.key === "about" ? 960 : 520, vw - 48))
  const expandH = Math.max(1, Math.min(section.key === "about" ? 720 : 540, vh - 32))
  const expandTop = (vh - expandH) / 2
  const expandLeft = (vw - expandW) / 2

  // What position the floating card should be at right now
  const floatRect: Rect = (() => {
    if (!originRect) return { top: 0, left: 0, width: expandW, height: expandH }
    if (phase === "expanding") return originRect // start: at origin
    if (phase === "open")
      return {
        top: expandTop,
        left: expandLeft,
        width: expandW,
        height: expandH,
      }
    if (phase === "collapsing") return originRect // animate back
    return originRect
  })()

  const isFloating = phase !== "idle"
  const contentVisible = phase === "open"

  return (
    <>
      {/* Grid placeholder — always occupies space, hidden when floating */}
      <button
        type="button"
        aria-haspopup="dialog"
        data-section={section.key}
        aria-expanded={isMe}
        aria-describedby={`${section.key}-hint`}
        ref={cardRef}
        onPointerMove={(event) => {
          if (event.pointerType === "touch" || isFloating) return;
          const width = hintRef.current?.offsetWidth ?? 200;
          const height = hintRef.current?.offsetHeight ?? 40;
          const x = event.clientX + width + 18 > window.innerWidth
            ? event.clientX - width - 18 : event.clientX + 18;
          const y = event.clientY + height + 18 > window.innerHeight
            ? event.clientY - height - 18 : event.clientY + 18;
          setHintPosition({
            x: Math.max(8, Math.min(x, window.innerWidth - width - 8)),
            y: Math.max(8, Math.min(y, window.innerHeight - height - 8)),
          });
        }}
        onPointerLeave={() => setHintPosition(null)}
        onPointerDown={() => setHintPosition(null)}
        onClick={() => (!isFloating ? setOpenKey(section.key) : undefined)}
        style={{
          background: section.gradient,
          border: 0,
          padding: 0,
          textAlign: "left",
          width: "100%",
          borderRadius: 14,
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          minHeight: section.key === "projects" ? 380 : section.key === "about" ? 220 : 140,
          height: fullHeight ? "100%" : undefined,
          opacity: isFloating ? 0 : 1,
          visibility: isFloating ? "hidden" : "visible",
          transition:
            "opacity 0.2s, transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease",
          position: "relative",
        }}
        className={!isFloating ? "section-card" : ""}
      >
        <span style={{ display: "block", padding: "18px 20px 14px" }}>
          <span
            className="section-title"
            style={{ color: section.labelColor, fontSize: 28, fontWeight: 400 }}
          >
            {section.label}
          </span>
        </span>
        {section.key === "about" ? <AboutSlideshow enabled={!isFloating} /> : section.key === "projects" && projectPhotos.length > 0 ? <AboutSlideshow photos={projectPhotos} project enabled={!isFloating} /> : section.key === "skills" || section.key === "experience" ? null : (
        <span
          style={{
            display: "block",
            margin: "0 16px 16px",
            background: "rgba(255,255,255,0.55)",
            borderRadius: 10,
            flex: 1,
          }}
        />
        )}
        <span id={`${section.key}-hint`} role="tooltip" className="section-hover-bubble">
          {sectionHints[section.key]}
        </span>
      </button>

      {hintPosition && !isFloating && createPortal(
        <span
          ref={hintRef}
          className="section-hover-bubble cursor-follow-bubble"
          aria-hidden="true"
          style={{ left: hintPosition.x, top: hintPosition.y }}
        >
          {sectionHints[section.key]}
        </span>,
        document.body,
      )}

      {/* Floating card — overlays everything */}
      {isFloating && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${section.key}-title`}
          tabIndex={-1}
          onKeyDown={(event) => {
            if (event.key === "Escape") setOpenKey(null)
            if (event.key === "Tab") {
              const controls =
                dialogRef.current?.querySelectorAll<HTMLElement>(
                  "button, a[href]",
                )
              if (!controls?.length) return
              const first = controls[0]
              const last = controls[controls.length - 1]
              if (
                event.shiftKey &&
                (document.activeElement === first ||
                  document.activeElement === dialogRef.current)
              ) {
                event.preventDefault()
                last.focus()
              } else if (
                !event.shiftKey &&
                (document.activeElement === last ||
                  document.activeElement === dialogRef.current)
              ) {
                event.preventDefault()
                first.focus()
              }
            }
          }}
          style={{
            position: "fixed",
            zIndex: 50,
            background: section.gradient,
            borderRadius: 18,
            boxShadow: "0 28px 72px rgba(120,50,80,0.28)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            top: floatRect.top,
            left: floatRect.left,
            width: floatRect.width,
            height: floatRect.height,
            transition:
              "top 0.36s cubic-bezier(0.4,0,0.2,1), left 0.36s cubic-bezier(0.4,0,0.2,1), width 0.36s cubic-bezier(0.4,0,0.2,1), height 0.36s cubic-bezier(0.4,0,0.2,1), border-radius 0.36s ease",
          }}
        >
          <div
            style={{
              padding: "20px 24px 10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexShrink: 0,
            }}
          >
            <span
              id={`${section.key}-title`}
              className="section-title"
              style={{
                color: section.labelColor,
                fontSize: 32,
                fontWeight: 400,
              }}
            >
              {section.label}
            </span>
            <button
              type="button"
              aria-label={`Close ${section.label}`}
              onClick={() => setOpenKey(null)}
              style={{
                color: section.labelColor,
                background: "transparent",
                border: 0,
                cursor: "pointer",
                fontSize: 24,
                lineHeight: 1,
                fontWeight: 300,
              }}
            >
              ×
            </button>
          </div>
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              minHeight: 0,
              padding: "4px 24px 24px",
              opacity: contentVisible ? 1 : 0,
              transition: "opacity 0.38s ease",
            }}
          >
            {section.key === "about" ? (
              <div className="about-expanded-layout">
                <AboutPhotoColumn enabled={contentVisible} />
                <div className="about-expanded-text">{section.expandedContent}</div>
              </div>
            ) : section.expandedContent}
          </div>
        </div>
      )}
    </>
  )
}


function MobilePortfolioSections() {
  const [active, setActive] = useState<SectionKey>("about");
  useEffect(() => {
    const update = () => {
      let current: SectionKey = "about";
      sections.forEach(section => {
        if ((document.getElementById(`home-${section.key}`)?.getBoundingClientRect().top ?? Infinity) <= 130) current = section.key;
      });
      setActive(current);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);
  return <div className="mobile-portfolio-sections">
    <nav className="mobile-home-nav" aria-label="Portfolio sections">
      {sections.map(section => <a key={section.key} href={`#home-${section.key}`} aria-current={active === section.key ? "location" : undefined}>{section.key === "experience" ? "Experience" : section.label}</a>)}
    </nav>
    {sections.map(section => <section className="mobile-home-section" id={`home-${section.key}`} key={section.key} aria-labelledby={`home-heading-${section.key}`} style={{ background: section.gradient }}>
      <h2 id={`home-heading-${section.key}`}>{section.label}</h2>
      {section.key === "about" && <AboutPhotoColumn />}
      {section.key === "projects" && projectPhotos.length > 0 && <AboutSlideshow photos={projectPhotos} project expanded />}
      <div className="mobile-home-content">{section.expandedContent}</div>
    </section>)}
  </div>;
}

function Portfolio() {
  const [openKey, setOpenKey] = useState<SectionKey | null>(null)
  const [mobile, setMobile] = useState(() => window.matchMedia("(max-width: 640px)").matches);
  useEffect(() => {
    const media = window.matchMedia("(max-width: 640px)");
    const update = () => { setMobile(media.matches); setOpenKey(null); };
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!openKey) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [openKey])

  return (
    <div
      style={{
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        background:
          "radial-gradient(ellipse at 30% 20%, rgba(209,183,198,0.9) 0%, rgba(255,255,255,1) 70%)",
        fontFamily: "Inter, sans-serif",
        padding: "40px 24px",
      }}
    >
      <div className="flower-background" aria-hidden="true">
        <img className="floating-flower" src={lilyImage} alt="" draggable={false} />
        <img className="floating-flower floating-flower-left" src={lilyLeftImage} alt="" draggable={false} />
      </div>
      {/* Backdrop */}
      <div
        onClick={() => setOpenKey(null)}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 40,
          background: "rgba(180,120,150,0.22)",
          backdropFilter: "blur(4px)",
          opacity: openKey ? 1 : 0,
          pointerEvents: openKey ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: 1000,
          margin: "0 auto",
          position: "relative",
        }}
      >
        {/* Header */}
        <div className="portfolio-header" style={{ marginBottom: 36 }}>
          <h1
            style={{
              color: "#502238",
              fontSize: "clamp(36px, 6vw, 64px)",
              fontWeight: 400,
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            Kaylee Syahmono
          </h1>
          <p
            style={{
              color: "#502238",
              fontSize: 20,
              margin: "8px 0 4px",
              fontWeight: 400,
            }}
            className="identity-line"
          >
            <span className="identity-paper" aria-label="designer and developer"><span className="identity-writing" aria-hidden="true">★ designer &amp; developer</span></span>
            <span className="identity-aggie-paper">texas a&amp;m aggie</span>
          </p>
          {/* <div className="current-update-bubble">
            Currently: Finishing my internship @ Amentum & my CS bache.
          </div> */}
        </div>

        {/* Mobile sections are expanded; desktop retains the bento dialogs. */}
        {mobile ? <MobilePortfolioSections /> : <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
          }}
          className="bento-grid"
        >
          <div
            style={{
              gridColumn: "1",
              gridRow: "1 / 3",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <SectionCard
              section={sections[0]}
              openKey={openKey}
              setOpenKey={setOpenKey}
              fullHeight
            />
          </div>
          <div className="projects-tile-container" style={{ gridColumn: "2 / 4", gridRow: "1" }}>
            <SectionCard
              section={sections[1]}
              openKey={openKey}
              setOpenKey={setOpenKey}
            />
          </div>
          <div style={{ gridColumn: "2", gridRow: "2" }}>
            <SectionCard
              section={sections[2]}
              openKey={openKey}
              setOpenKey={setOpenKey}
            />
          </div>
          <div style={{ gridColumn: "3", gridRow: "2" }}>
            <SectionCard
              section={sections[3]}
              openKey={openKey}
              setOpenKey={setOpenKey}
            />
          </div>
        </div>}
      </div>

      <style>{`
        .section-card:hover {
          transform: scale(1.03);
          box-shadow: 0 16px 40px rgba(140,60,90,0.18);
        }
        @media (max-width: 640px) {
          .bento-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
          .bento-grid > div:nth-child(1) {
            grid-column: 1 / -1 !important;
            grid-row: 2 !important;
          }
          .bento-grid > div:nth-child(2) {
            grid-column: 1 / -1 !important;
            grid-row: 3 !important;
          }
          .bento-grid > div:nth-child(3) {
            grid-column: 1 !important;
            grid-row: 1 !important;
          }
          .bento-grid > div:nth-child(4) {
            grid-column: 2 !important;
            grid-row: 1 !important;
          }
        }
      `}</style>
    </div>
  )
}

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, "")
  const project = projects.find((item) => path === `/projects/${item.slug}`)
  const isResume = path === "/resume"
  useEffect(() => {
    document.title = `${project?.name ?? (isResume ? "Resume" : "Portfolio")} | Kaylee Syahmono`
  }, [project, isResume])
  if (!project && !isResume) return <Portfolio />

  return (
    <main
      style={{
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        padding: "40px 24px",
        background: isResume ? "#f5edf1" : "radial-gradient(ellipse at 30% 20%, rgba(209,183,198,0.9) 0%, rgba(255,255,255,1) 70%)",
        color: "#502238",
      }}
    >
      {!isResume && <div className="flower-background" aria-hidden="true">
        <img className="floating-flower" src={lilyImage} alt="" draggable={false} data-no-enlarge />
        <img className="floating-flower floating-flower-left" src={lilyLeftImage} alt="" draggable={false} data-no-enlarge />
      </div>}
      <article className="project-page-enter" style={{ width: "100%", maxWidth: 760, margin: "0 auto", position: "relative" }}>
        <a href="/" className="resume-link">
          ← Back to portfolio
        </a>
        <div
          className={isResume ? undefined : "project-file"}
          style={{
            marginTop: isResume ? 24 : 70,
            padding: "clamp(24px, 5vw, 48px)",
            borderRadius: isResume ? 18 : "0 18px 18px 18px",
            background: isResume ? sections[3].gradient : "#f4dfe8",
          }}
        >
          <p className={isResume ? undefined : "project-file-tab"} style={isResume ? { margin: "0 0 12px", fontSize: 14 } : { background: "#f4dfe8" }}>
            {isResume
              ? "Kaylee Syahmono · Designer & Engineer"
              : `Project ${project!.year}`}
          </p>
          {!isResume && ["hexagon-builder", "viasat"].includes(project!.slug) && (
            <span
              style={{
                display: "inline-block",
                marginBottom: 16,
                padding: "5px 10px",
                borderRadius: 999,
                border: "1px solid rgba(80, 34, 56, 0.2)",
                background: "rgba(255, 255, 255, 0.45)",
                fontSize: 12,
                fontWeight: 600,
                lineHeight: 1.4,
              }}
            >
              {project!.slug === "viasat" ? "In Progress" : "Awaiting Public Release"}
            </span>
          )}
          <h1
            style={{
              margin: "0 0 24px",
              fontSize: "clamp(32px, 6vw, 48px)",
              lineHeight: 1.15,
            }}
          >
            {isResume ? "Resume" : project!.name}
          </h1>
          {isResume ? (
            <>
              <p style={{ margin: "0 0 24px", lineHeight: 1.7 }}>
                Computer Science @ Texas A&amp;M University, graduating Dec 2026
              </p>
              <h2 style={{ fontSize: 20, margin: "0 0 20px" }}>Experience</h2>
              {resumeExperience}
            </>
          ) : (
            <>
              <p style={{ fontSize: 16, lineHeight: 1.7, margin: 0 }}>
                {project!.desc}
              </p>
              <ProjectOverview project={project!} />
              {project!.slug === "graphics" && <GraphicDesignGallery />}
              {project!.slug === "hexagon-builder" && <HexagonCaseStudy />}
              {project!.slug === "pet-nest" && <PetNestCaseStudy />}
              {project!.slug === "panda-pos" && <PandaExpressCaseStudy />}
              {project!.slug === "viasat" && <ViasatCaseStudy />}
            </>
          )}
        </div>
      </article>
    </main>
  )
}
