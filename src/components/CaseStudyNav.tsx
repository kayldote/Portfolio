import { useEffect, useId, useRef, useState } from "react";

type NavSection = { id: string; title: string };

export function CaseStudyNav({ sections, label }: { sections: NavSection[]; label: string }) {
  const [activeId, setActiveId] = useState(sections[0]?.id);
  const [expanded, setExpanded] = useState(false);
  const linksId = useId();
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const threshold = Math.min(160, window.innerHeight * 0.3);
      let current = sections[0]?.id;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && element.getBoundingClientRect().top <= threshold) current = section.id;
      }
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) current = sections.at(-1)?.id;
      setActiveId(current);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [sections]);
  return <nav className="pn-nav case-study-nav" aria-label={label} onKeyDown={event => {
    if (event.key === "Escape" && expanded) {
      setExpanded(false);
      toggle.current?.focus();
    }
  }}>
    <button ref={toggle} type="button" className="case-study-nav-toggle" aria-expanded={expanded} aria-controls={linksId} onClick={() => setExpanded(value => !value)}>
      <span><small>Sections</small>{sections.find(section => section.id === activeId)?.title}</span>
      <span aria-hidden="true">{expanded ? "−" : "+"}</span>
    </button>
    <div id={linksId} className="case-study-nav-links" data-expanded={expanded}>
      {sections.map(section => <a key={section.id} href={`#${section.id}`} aria-current={activeId === section.id ? "location" : undefined} onClick={() => {
        setExpanded(false);
        if (window.matchMedia("(max-width: 640px)").matches) toggle.current?.focus();
      }}>{section.title}</a>)}
    </div>
  </nav>;
}
