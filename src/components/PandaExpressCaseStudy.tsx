import { CaseStudyNav } from "./CaseStudyNav";
import accessibilityCheck from "../assets/panda-express/AccessibilityCheck.png";
import glimpse1 from "../assets/panda-express/Glimpse_1.png";
import glimpse2 from "../assets/panda-express/Glimpse_2.png";
import glimpse3 from "../assets/panda-express/Glimpse_3.png";
import glimpse4 from "../assets/panda-express/Glimpse_4.png";
import { useState, type ReactNode } from "react";

const chapters = ["Introduction", "Research", "Insights", "Decisions", "Glimpses of the Product", "Reflection"];
const navSections = chapters.map(title => ({ id: `panda-${title.toLowerCase().replaceAll(" ", "-")}`, title }));
const participants = [
  ["MM", "Marley M.", "20 · Low vision", "Without her glasses, Marley struggles to read from a normal distance and needs to move close to the screen."],
  ["TZ", "Tracy Z.", "Mid-50s · Language & vision", "Tracy is not fully fluent in English and has declining eyesight. Graphics help her navigate language barriers."],
  ["NT", "Nathan T.", "20 · Motor accessibility", "Nathan has minor motor impairments and uses tools such as a stylus or voice commands to help with tremors."],
  ["MB", "Mariam B.", "Reading & attention", "Mariam has ADHD and a reading disability. Long portions of text are difficult for her to process."],
  ["NS", "Noah S.", "23 · Vision & dietary needs", "Noah is a native English speaker with poor vision and a severe peanut allergy."],
];

const findings = [
  { title: "Small mistakes led to big setbacks.", subtitle: "Lack of forgiveness & error recovery", evidence: ["Tapping certain areas reset the order (Marley)", "Checkout errors removed cart contents (Marley)", "Items could only be deleted, not edited (Mariam)", "Incorrect selections were difficult to undo (Nathan)"], impact: "Users were penalized for normal human errors. Low-vision users, people with ADHD, first-time users, and anyone placing a large order were especially affected.", direction: "Make cart and cashier behavior more intuitive, support correction, and avoid disruptive resets." },
  { title: "Ordering felt like a guessing game.", subtitle: "Unclear system rules & missing guidance", evidence: ["No indication of how many sides or entrées were allowed (Mariam, Tracy)", "Allergens appeared only on the menu board (Noah)", "Users had to remember information or switch pages (Noah)", "Categories were hard to distinguish for non-native speakers (Tracy)"], impact: "First-time users, non-native English speakers, and people with memory or reading challenges had to guess or experiment to complete the main task.", direction: "Surface rules and dietary information where decisions happen, with clearer categories and visual cues." },
  { title: "One interface doesn’t fit everyone.", subtitle: "Visual & cognitive accessibility gaps", evidence: ["Food descriptions and interface text were too small (Marley, Tracy)", "A mostly white interface was difficult to scan (Mariam)", "Graphics helped overcome language barriers (Tracy)", "Text-to-speech was unavailable (Nathan)", "Allergen indicators weren’t integrated into the workflow (Noah)"], impact: "People with low vision, aging eyesight, ADHD, reading disabilities, and language barriers experienced increased strain and slower task completion.", direction: "Offer readable presentation options, speech support, and consistent dietary indicators." },
];
function Section({ title, children }: { title: string; children: ReactNode }) { return <section id={`panda-${title.toLowerCase().replaceAll(" ", "-")}`} className="pn-section" aria-labelledby={`panda-heading-${title.toLowerCase().replaceAll(" ", "-")}`}><div className="pn-section-title"><span>{String(chapters.indexOf(title) + 1).padStart(2, "0")}</span><h2 id={`panda-heading-${title.toLowerCase().replaceAll(" ", "-")}`}>{title}</h2></div>{children}</section>; }
function Card({ title, children }: { title: string; children: ReactNode }) { return <article className="pn-card"><h4>{title}</h4>{children}</article>; }
function List({ items }: { items: string[] }) { return <ul className="pn-list">{items.map(item => <li key={item}>{item}</li>)}</ul>; }
function ImageSlot({ label }: { label: string }) { return <div className="pn-placeholder"><span aria-hidden="true">✧</span><p>{label}</p><small>Image placeholder</small></div>; }

export function PandaExpressCaseStudy() {
  const [selected, setSelected] = useState(0);
  const finding = findings[selected];
  return <div className="petnest-study panda-study">
    <CaseStudyNav sections={navSections} label="Panda Express case study sections" />
    <Section title="Introduction">
      <h3>The context</h3><p>My team was tasked with building a full-stack Panda Express point-of-sale system with both a customer-facing kiosk and a cashier view. Accessibility was the core focus, and we wanted to understand a diverse set of users.</p>
      <div className="pn-grid panda-stamp-cards"><Card title="My role"><p>My team assigned me the Scrum Master role. I initially took on front-end development but ultimately worked across the full stack.</p></Card><Card title="How we worked"><p>Our five-person team followed agile methodology, dividing the work into sprints and retrospectives while learning a new technology stack.</p></Card></div>
      <h3>The problem: self-service can leave people out</h3><p>Fast-food kiosks are designed for convenience, yet people with impairments can encounter barriers to ordering independently.</p><blockquote className="pn-big-quote panda-notebook-quote">“Where is the accessibility if they desire their customers to order on their own the majority of the time through these kiosks?”</blockquote><a className="pn-source" href="https://doubletaponair.com/the-growing-accessibility-crisis-of-self-service-kiosks-a-listeners-perspective/" target="_blank" rel="noreferrer">A listener’s perspective · Double Tap ↗</a>
      <div className="panda-audiences panda-audience-polaroids">
        <figure>
          <div className="panda-polaroid-photo"><img src={glimpse1} alt="Customer kiosk showing meal options" loading="lazy" /></div>
          <figcaption><span className="pn-eyebrow">Target user #1</span><strong>Customers</strong><p>Order independently through an accessible kiosk.</p></figcaption>
        </figure>
        <figure>
          <div className="panda-polaroid-photo"><img src={glimpse3} alt="Employee cashier interface for building and reviewing an order" loading="lazy" /></div>
          <figcaption><span className="pn-eyebrow">Target user #2</span><strong>Employees</strong><p>Access the same support in the cashier view.</p></figcaption>
        </figure>
      </div>
      <h3>The solution</h3><p>Our team set out to research, design, and define requirements for an inclusive kiosk web application that prioritizes usability, efficiency, and accessibility for users of all abilities.</p><p>This case study focuses on the user research portion of development. Although time constraints made it a small part of the overall development process, it had the greatest impact on our design decisions. Real user needs and interaction barriers informed both design and functional requirements.</p>
    </Section>
    <Section title="Research">
      <div className="panda-research-journal"><span className="panda-journal-label">Research notes / Listening first</span><h3>Designing beyond our own experience</h3><p>As five able-bodied designers and developers, we recognized that we could not meaningfully evaluate accessibility without input from people who experience barriers. Each team member recruited and interviewed one participant, bringing five user perspectives into the project.</p><div className="panda-numbers"><div><strong>5</strong><span>team members</span></div><div><strong>5</strong><span>user perspectives</span></div><div><strong>2</strong><span>ordering interfaces</span></div></div>
      </div>
      <h3>Real tasks before reflection</h3><p>Before testing, we built a functional MVP that met the minimum project requirements and supported the complete ordering flow. Participants could interact with a working system rather than respond to wireframes or hypothetical scenarios.</p><ol className="pn-flow panda-research-checklist">{["Independently navigate the kiosk and cashier views", "Complete an order without guidance", "Reflect in a semi-structured interview"].map((s, i) => <li key={s}><span>{i + 1}</span>{s}</li>)}</ol><div className="panda-research-topics"><Card title="What we explored during user testing"><div className="pn-tags">{["Navigation", "Instruction clarity", "Readability", "Error recovery", "Overall accessibility"].map(t => <span key={t}>{t}</span>)}</div><p>Observing first and asking questions afterward grounded feedback in actual interaction rather than prompted suggestions.</p></Card></div>
      <h3>Meet the participants</h3><div className="panda-participants">{participants.map(([, name, need, text], index) => <article key={name}><span className="panda-participant-tab" aria-hidden="true">Interview 0{index + 1}</span><div><h4>{name}</h4><span className="pn-eyebrow">{need}</span><p>{text}</p></div></article>)}</div>
    </Section>
    <Section title="Insights">
      <h3>We found three recurring barriers.</h3><p>We synthesized observations and interviews into themes that could guide meaningful changes. Select a finding to explore the evidence and its impact.</p><div className="panda-insights-file">
        <div className="panda-file-tabs" role="tablist" aria-label="Research findings">
          {findings.map((f, i) => <button
            key={f.title}
            id={`panda-insight-tab-${i}`}
            type="button"
            role="tab"
            aria-selected={selected === i}
            aria-controls="panda-insight-panel"
            tabIndex={selected === i ? 0 : -1}
            onClick={() => setSelected(i)}
            onKeyDown={event => {
              let next = i;
              if (event.key === "ArrowRight") next = (i + 1) % findings.length;
              else if (event.key === "ArrowLeft") next = (i + findings.length - 1) % findings.length;
              else if (event.key === "Home") next = 0;
              else if (event.key === "End") next = findings.length - 1;
              else return;
              event.preventDefault();
              setSelected(next);
              document.getElementById(`panda-insight-tab-${next}`)?.focus();
            }}
          ><span>0{i + 1}</span>{["Error recovery", "Clear guidance", "Accessibility"][i]}</button>)}
        </div>
        <div className="panda-finding panda-file-panel" id="panda-insight-panel" role="tabpanel" aria-labelledby={`panda-insight-tab-${selected}`} tabIndex={0} data-finding={selected}>
          <h3>{finding.title}</h3><List items={finding.evidence} />
          <div className="pn-callout panda-impact-stamp"><strong>The impact</strong><p>{finding.impact}</p></div>
          <span className="pn-label">Design direction</span><p>{finding.direction}</p>
        </div>
      </div>
      <h3>What the research changed</h3><div className="pn-grid panda-insight-notes"><Card title="Small changes can remove big barriers"><p>Icons and simple settings controls can provide visual indicators and presentation options for people who need them.</p></Card><Card title="Clean up cart & cashier behavior"><p>The cashier view confused first-time users. We needed more intuitive flows and clearer language, including replacing technical terms such as “null.”</p></Card><Card title="Make reading more flexible"><p>Font changes, text-to-speech, and translations could support people with vision or reading difficulties and non-fluent English speakers.</p></Card><Card title="Bring dietary information into the flow"><p>Spicy-food and peanut-allergy icons should appear in both ordering and cashier interfaces, rather than requiring users to return to the menu board.</p></Card></div>
    </Section>
    <Section title="Decisions">
      <h3>From listening to design decisions</h3><p>Alongside making user flows more intuitive, our team used research to decide which accessibility features to prioritize across both interfaces.</p><div className="panda-decisions">
        <article><span className="panda-feature-icon panda-star-sticker" aria-hidden="true"><span>Aa</span></span><div><h3>Font & contrast settings</h3><p>A settings button would let users switch between regular presentation and alternative font or contrast options. The aim was to support people with vision difficulties and reading disabilities during ordering.</p><details><summary>Why this mattered</summary><p>Small text affected Marley and Tracy, while reading-heavy content challenged Mariam. Presentation controls offered a way to adapt the interface to different needs.</p></details></div></article>
        <article><span className="panda-feature-icon panda-star-sticker" aria-hidden="true"><span>♪</span></span><div><h3>Text-to-speech</h3><p>Speech support could help people who struggle to read or see on-screen text, including people who understand spoken English more easily than written English.</p><details><summary>Why this mattered</summary><p>Nathan identified the absence of text-to-speech. This feature could offer another way to access ordering information instead of relying exclusively on visual reading.</p></details></div></article>
        <article><span className="panda-feature-icon panda-star-sticker" aria-hidden="true"><span>!</span></span><div><h3>Dietary icons where they’re needed</h3><p>Dietary indicators let users identify foods they may need to avoid without switching between pages. Spicy-food and peanut indicators would accompany dishes in the ordering and cashier flows.</p><details><summary>Why this mattered</summary><p>Noah’s severe peanut allergy made missing in-flow allergen information a critical concern. Clear visual indicators reduce the need to remember details from a separate menu board.</p></details></div></article>
      </div>
      <h3>Checking accessibility</h3>
      <p>An automated check of the customer ordering page returned an audit score of 95, with 18 passed audits and no critical issues detected.</p>
      <figure className="panda-accessibility-check">
        <img src={accessibilityCheck} alt="Automated accessibility audit of the customer ordering page: score 95, zero critical issues, 18 passed audits, and three required manual audits." loading="lazy" />
        <figcaption>Automated accessibility results for the scanned ordering page. Three manual audits remained; this scan alone does not establish full accessibility conformance.</figcaption>
      </figure>
    </Section>
    <Section title="Glimpses of the Product">
      <p>A closer look at the customer kiosk, cashier views, and accessibility features we built.</p>
      <div className="panda-product-gallery">
        {[
          { src: glimpse1, caption: "Customer kiosk · choosing a meal type" },
          { src: glimpse2, caption: "Inventory · stock levels and restocking controls" },
          { src: glimpse3, caption: "Cashier view · building and reviewing an order" },
          { src: glimpse4, caption: "Menu · viewing dish details" },
        ].map(({ src, caption }) => (
          <figure key={src}>
            <img src={src} alt={caption} loading="lazy" />
            <figcaption>{caption}</figcaption>
          </figure>
        ))}
      </div>
    </Section>
    <Section title="Reflection">
      <div className="panda-reflection-page">
      <h3>A small research effort led to a lasting change in my perspective.</h3><p>Even with limited time, user feedback had a major impact on decisions that shaped the experience. This project sparked my interest in user interaction and inclusivity as I continued my computer science journey.</p><p>It was our first time conducting design research for a software application. Documentation and process felt rushed as we balanced learning a new stack, conducting research, adapting to agile development, and building a full-stack application in two months.</p><div className="pn-callout panda-intentional-card"><strong>Intentional decisions start with understanding people.</strong><p>I wanted my design choices to have a clear purpose, beyond making an application look good on the surface.</p></div>
      <h3>What I would do differently</h3>
      <p>If I were to approach this project again, I would prioritize user interviews earlier and revisit them throughout development. As beginner developers, we spent valuable time building features that later needed to change. More consistent research and iteration would have helped us better understand user needs and make more informed decisions from the start.</p>
      <p>As the front-end developer, I also wish I had approached my design decisions with greater intention. With limited research and iteration, I often focused on making the application look polished without fully understanding how each choice supported the user experience. Looking back, I would aim to connect those choices more clearly to user feedback, giving the interface a stronger purpose beyond its appearance.</p>
      </div>
    </Section>
  </div>;
}
