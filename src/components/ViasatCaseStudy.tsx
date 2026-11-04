import darkLightReference from "../assets/viasat/research/DarkLight.png";
import planDemo from "../assets/viasat/PlanUserFlow.mp4";
import futuristicReference from "../assets/viasat/research/Futuristic.png";
import simpleCatchyReference from "../assets/viasat/research/SimpleCatchy.png";
import { CaseStudyNav } from "./CaseStudyNav";
import { ViasatPrototypeGallery } from "./ViasatPrototypeGallery";

const sections = [
  { id: "viasat-introduction", title: "Introduction" },
  { id: "viasat-research", title: "Research & Requirements" },
  { id: "viasat-development", title: "Design & Development" },
  { id: "viasat-progress", title: "Progress So Far" },
  { id: "viasat-iteration", title: "Development Priorities" },
  { id: "viasat-next", title: "Handoff & Next Steps" },
];

export function ViasatCaseStudy() {
  return <div className="petnest-study viasat-study">
    <CaseStudyNav sections={sections} label="Viasat capstone sections" />
    {sections.map((section, index) => <section key={section.id} id={section.id} className="pn-section" aria-labelledby={`${section.id}-heading`}>
      <div className="pn-section-title"><span>{String(index + 1).padStart(2, "0")}</span><h2 id={`${section.id}-heading`}>{section.title}</h2></div>
      {section.id === "viasat-introduction" ? <>
        <section aria-labelledby="viasat-challenge-heading">
          <h3 id="viasat-challenge-heading">The Challenge</h3>
          <p><a href="https://www.viasat.com/" target="_blank" rel="noopener noreferrer" className="viasat-inline-link">Viasat</a>, a satellite communications company, partnered with our team of student developers to bring its account management portal to mobile.</p>
          <p>Our team is responsible for developing a tangible mobile product that Viasat can build on. Viasat will lead testing and use the handoff as a foundation for further refinement and development.</p>
        </section>
        <div className="pn-card viasat-goal-paper">
          <h3>The Goal</h3>
          <p>Develop a tangible mobile MVP based on Viasat’s existing account management portal, providing a foundation their team can test, refine, and expand.</p>
        </div>
        <section className="pn-card viasat-story-note" aria-labelledby="viasat-role-heading">
          <h3 id="viasat-role-heading">My Role &amp; Collaboration</h3>
          <p>As a full-stack developer, I build features that help customers manage their Wi-Fi service. My contributions so far focus on functionality for changing or canceling plans and viewing session usage over time.</p>
          <div className="viasat-role-tasks" aria-label="My specific contributions">
            {["Front-End Design", "Updating Users’ Wi-Fi Plans", "Viewing session usage"].map(task => <div key={task}>{task}</div>)}
          </div>
          <p>I work alongside four teammates on development, while Viasat owns testing of the delivered product.</p>
        </section>
      </> : section.id === "viasat-research" ? <>
        <div className="viasat-research-paper">
        <h3>Understanding Our Audience</h3>
        <p>The application is intended for adults in their early twenties, specifically Navy personnel. To explore the needs and preferences of this audience, we created a Google Forms survey and gathered 45 responses. We recruited classmates, people associated with DOW, and members of the Texas A&M Corps of Cadets.</p>
        <p className="pn-note">This sample offered early insight into a similar age group and people with military connections, though it was not limited to Navy personnel.</p>
        </div>
        {/* Add survey-result images here when available. */}
        <h3>Visual Style Preferences</h3>
        <p>Our survey highlighted three visual directions preferred by respondents.</p>
        <div className="viasat-style-findings">
          {[
            { percentage: "20%", style: "Dark/Light Alternative of Same Color", image: darkLightReference },
            { percentage: "15%", style: "Futuristic", image: futuristicReference },
            { percentage: "12.5%", style: "Simple Catchy", image: simpleCatchyReference },
          ].map(finding => <div className="viasat-style-finding" key={finding.style}>
            <div className="viasat-pinned-reference"><img className="viasat-reference-image" src={finding.image} alt={`${finding.style} Dribbble visual reference`} loading="lazy" /></div>
            <strong>{finding.percentage}</strong><span>{finding.style}</span>
          </div>)}
        </div>
        <p className="pn-note">Selected style preferences shown; other responses are not displayed.</p>
        <h3>Defining the Scope</h3>
        <p>Our planned scope spans full-stack development of the core account management experience, from customer-facing screens to API integration.</p>
        <div className="pn-grid viasat-scope-notes">
          <div className="pn-card">
            <h3>Core Experiences</h3>
            <ul className="pn-list">
              {["Account usage", "Service status", "Device management", "Plan management", "Support, notifications, and settings"].map(item => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div className="pn-card">
            <h3>Delivery Scope</h3>
            <ul className="pn-list">
              {["UX/UI integration", "API integration", "Development in sandbox environments", "A mobile MVP for Viasat to extend"].map(item => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
        <p>Viasat will perform testing. App store readiness and broader feature expansion remain longer-term considerations beyond the initial handoff.</p>
      </> : section.id === "viasat-development" ? <>
        <div className="pn-card viasat-story-note viasat-note-cream">
        <h3>From Web Portal to Mobile Foundation</h3>
        <p>Our development work brings the existing account management experience into a mobile application using React Native, Expo, TypeScript, and GraphQL. The focus is a tangible MVP that Viasat can continue developing after our involvement.</p>
        </div>
        <div className="pn-card viasat-story-note viasat-note-sage">
        <h3>My Development Focus</h3>
        <p>I am contributing plan-management functionality and session usage history. These features let customers manage their Wi-Fi plans and review their usage over time.</p>
        </div>
        <ViasatPrototypeGallery />
        <p className="pn-note">Design prototypes shown above; implementation is ongoing.</p>
      </> : section.id === "viasat-progress" ? <>
        <h3>Development in Progress</h3>
        <p>The project is ongoing. My work so far centers on plan changes, cancellations, and usage history, alongside the team’s broader account management scope.</p>
        <h3>Plan Management in Action</h3>
        <p>This development demo walks through changing a Wi-Fi plan and canceling it from the Plan page.</p>
        <figure className="viasat-plan-demo">
          <video controls playsInline preload="metadata" aria-label="Development demo of changing and canceling a Wi-Fi plan">
            <source src={planDemo} type="video/mp4" />
            Your browser does not support embedded video. <a href={planDemo}>Download the plan management demo.</a>
          </video>
          <figcaption>Plan changes and cancellations · Development demo</figcaption>
        </figure>
        <div className="pn-card viasat-goal-paper"><h3>Current Milestone</h3><p>Deliver a working mobile foundation for Viasat to test, refine, and extend.</p></div>
      </> : section.id === "viasat-iteration" ? <>
        <div className="pn-card viasat-story-note viasat-note-cream">
        <h3>Keeping the MVP Focused</h3>
        <p>Our immediate priority is developing the core account management experience. The survey and prototype explorations provide early design input; Viasat’s testing will inform subsequent refinements.</p>
        </div>
        <div className="pn-card viasat-story-note viasat-note-lavender">
        <h3>Building for Continuation</h3>
        <p>Because Viasat will take the product forward, handoff planning needs to account for the application’s setup, integrations, unfinished work, and known limitations. Preparing these materials is part of the remaining work.</p>
        </div>
      </> : <>
        <div className="pn-card viasat-story-note viasat-note-sage">
        <h3>Our Team’s Next Steps</h3>
        <p>Continue developing the MVP and prepare the application for handoff. The planned handoff should explain how to run the project, what has been implemented, and what remains to be completed.</p>
        </div>
        <div className="pn-card viasat-story-note viasat-note-lavender">
        <h3>Viasat’s Next Steps</h3>
        <p>Viasat will lead testing of the delivered application and build on the foundation through further refinement and feature development.</p>
        </div>
      </>}
    </section>)}
  </div>;
}
