import original1 from "../assets/career-hexagon/CareerHexagonScreenshots/Original1_Screenshot.png";
import original2 from "../assets/career-hexagon/CareerHexagonScreenshots/Original2_Screenshot.png";
import { HexagonAudience } from "./HexagonAudience";
import aboutMe1 from "../assets/career-hexagon/CareerHexagonScreenshots/AboutMe1.png";
import aboutMe2 from "../assets/career-hexagon/CareerHexagonScreenshots/AboutMe2.png";
import sme1 from "../assets/career-hexagon/CareerHexagonScreenshots/SME_Screenshot1.png";
import sme2 from "../assets/career-hexagon/CareerHexagonScreenshots/SME_Screenshot2.png";
import youngmyself1 from "../assets/career-hexagon/CareerHexagonScreenshots/YoungMyself_Screenshot1.png";
import youngmyself2 from "../assets/career-hexagon/CareerHexagonScreenshots/YoungMyself_Screenshot2.png";
import advmyself1 from "../assets/career-hexagon/CareerHexagonScreenshots/AdvMyself_Screenshot1.png";
import advmyself2 from "../assets/career-hexagon/CareerHexagonScreenshots/AdvMyself_Screenshot2.png";
import youngtopical1 from "../assets/career-hexagon/CareerHexagonScreenshots/YoungTopical_Screenshot1.png";
import youngtopical2 from "../assets/career-hexagon/CareerHexagonScreenshots/YoungTopical_Screenshot2.png";
import { CaseStudyNav } from "./CaseStudyNav";

const caseStudySections = [
  { id: "problem", title: "The Problem" },
  { id: "constraint", title: "The Constraint" },
  { id: "what-i-built", title: "What I Built" },
  { id: "iteration", title: "Iteration" },
  { id: "outcome-reflection", title: "Outcome & Reflection" },
];

function BuilderScreenshots({ images }: { images: { src: string; caption: string }[] }) {
  return <div className="nasa-builder-screenshots">{images.map(image => <figure key={image.src}>
    <img src={image.src} alt={image.caption} loading="lazy" />
    <figcaption>{image.caption}</figcaption>
  </figure>)}</div>;
}

export function HexagonCaseStudy() {
  return (
    <div className="hexagon-case-study petnest-study petnest-scrapbook nasa-study">
      <CaseStudyNav sections={caseStudySections} label="Hexagon Builder case study sections" />
      {caseStudySections.map((section, index) => (
        <section key={section.id} id={section.id} className="case-study-section pn-section" aria-labelledby={`${section.id}-heading`}>
          <div className="pn-section-title"><span>{String(index + 1).padStart(2, "0")}</span><h2 id={`${section.id}-heading`}>{section.title}</h2></div>
          {section.id === "problem" && (
            <div className="space-y-4">
              <p>The Science Engagement team originally used a paper-based activity called the Hexagon Builders to help Subject Matter Experts (SMEs) share their career journeys with younger audiences during outreach events.</p>
              <div className="pn-card nasa-process-note"><h3>The production bottleneck</h3><p>However, creating each hexagon was a time-consuming, manual process. SMEs had to submit their information and photos, which were then passed to a single team member responsible for digitally designing, printing, and assembling each paper craft. This created a bottleneck that limited how efficiently the activity could be produced and distributed.</p>
                <ol className="nasa-manual-timeline" aria-label="Original manual Hexagon Builders production process">
                  {[
                    { title: "Collect submissions", detail: "SMEs submit their career information and photos." },
                    { title: "Hand off to one team member", detail: "Every submission is passed to the same person for production.", bottleneck: true },
                    { title: "Design each hexagon", detail: "That team member digitally lays out each person’s content." },
                    { title: "Print the design", detail: "Each personalized hexagon is printed for the paper activity." },
                    { title: "Assemble the paper craft", detail: "The printed design is assembled before it can be distributed." },
                  ].map((step, index) => <li key={step.title} className={step.bottleneck ? "is-bottleneck" : undefined}>
                    <span className="nasa-timeline-number" aria-hidden="true">{index + 1}</span>
                    <div><h4>{step.title}</h4><p>{step.detail}</p>{step.bottleneck && <span className="nasa-bottleneck-label">Single point of production</span>}</div>
                  </li>)}
                </ol>
              </div>
              <div className="pn-card"><h3>A broader audience</h3><p>As we explored ways to improve the process, we also recognized an opportunity to expand the activity beyond its original audience. Rather than limiting the Hexagon Builders to SMEs participating in outreach events, we envisioned a tool that students and other learners could use to explore and share their own career journeys.</p><HexagonAudience /></div>
              <div className="nasa-notebook-question"><h3>The approach to creating the hexagon builders</h3><p><strong>How might we transform a manual, staff-dependent activity into an accessible, self-guided experience that could reach a broader audience?</strong></p></div>
            </div>
          )}
          {section.id === "outcome-reflection" && (
            <div className="space-y-4">
              <p>The final product expanded the original Hexagon Builders activity into seven interactive builders designed for Subject Matter Experts and students across different educational levels. What began as an effort to streamline a manual process evolved into a self-guided digital experience with the potential to reach a broader audience.</p>
              <div className="pn-card nasa-outcome-note nasa-validation-note"><h3>What we could validate</h3><p>Throughout development, I gathered feedback from Science Engagement team members and SMEs, using their perspectives to refine the application. However, because the development environment was restricted to internal access, we were unable to conduct usability testing with students.</p></div>
              <div className="pn-card nasa-outcome-note nasa-next-note"><h3>What comes next</h3><p>As we await the application's public release, I recognize that our current design decisions still need to be validated with their intended audiences. Once publicly accessible, I hope to gather feedback from students and educators to evaluate the effectiveness of the guided prompts, navigation, and overall experience.</p>
                <figure className="nasa-validation-map" aria-label="Stakeholder reviews have informed development. Testing with students is the current validation gap, awaiting public release.">
                  <div className="nasa-validation-reviewed">
                    <span className="nasa-validation-status">Reviewed so far</span>
                    <strong>Stakeholder perspectives</strong>
                    <ul><li>Astromaterials Scientist</li><li>Educational Design Specialist</li><li>Teachers</li></ul>
                    <small>Expert feedback informed the builders.</small>
                  </div>
                  <div className="nasa-validation-bridge" aria-hidden="true"><span /></div>
                  <div className="nasa-validation-gap">
                    <span className="nasa-validation-status">Current validation gap</span>
                    <strong>Testing with students</strong>
                    <p>Can learners use the prompts and navigate the builders independently?</p>
                    <small>Planned after public release</small>
                  </div>
                </figure>
              </div>
              <div className="nasa-reflection-note"><h3>What I learned</h3><p>This project taught me that developing a functional application is only one part of creating a successful product. Taking ownership of both design and front-end development strengthened my ability to balance technical constraints, stakeholder requirements, and usability while recognizing the importance of continued iteration based on real user feedback.</p></div>
            </div>
          )}
          {section.id === "what-i-built" && (
            <div className="space-y-4">
              <p>I designed and developed an interactive web application that allows users to create personalized Hexagon Builders without relying on the Science Engagement team to manually produce each one.</p>
              <div className="nasa-build-summary"><span aria-hidden="true">7</span><div><h3>Distinct builder experiences</h3><p>The final application consists of seven distinct builder experiences, designed and developed using React and Tailwind CSS.</p></div></div>
              <section className="nasa-builder-section" aria-labelledby="sme-builder-heading">
              <h3 id="sme-builder-heading">Subject Matter Expert Builder</h3>
              <BuilderScreenshots images={[{ src: sme1, caption: "SME builder · instructions and hexagon preview" }, { src: sme2, caption: "SME builder · career information and back-side preview" }]} />
              <p>The application began as a builder for Subject Matter Experts (SMEs), allowing them to input their career information and customize their hexagons.</p>
              </section>
              <section className="nasa-builder-section" aria-labelledby="career-learner-heading">
              <h3 id="career-learner-heading">Career Learner Builders</h3>
              <p>As the project expanded to support student audiences, I adapted the original builder into multiple experiences tailored to different age groups and learning objectives.</p>
              <p>Students can choose to create a hexagon about themselves or someone else, then select their education level to access an appropriate builder.</p>
              <div className="pn-card"><h3>Guidance without limits</h3><p>For younger learners, I implemented guided prompts that automatically populate sections of the hexagon, while preserving the option to enter completely custom responses. This provides additional structure for students who need guidance without restricting those who prefer greater creative freedom.</p><BuilderScreenshots images={[{ src: aboutMe1, caption: "About Me · guided response options" }, { src: aboutMe2, caption: "About Me · custom response options" }]} /></div>
              <h4 className="nasa-screenshot-group-title">Young learners</h4>
              <BuilderScreenshots images={[{ src: youngmyself1, caption: "Young learner builder · career interests example" }, { src: youngmyself2, caption: "Young learner builder · guided responses" }]} />
              <h4 className="nasa-screenshot-group-title">Advanced learners</h4>
              <BuilderScreenshots images={[{ src: advmyself1, caption: "Advanced learner builder · career interests example" }, { src: advmyself2, caption: "Advanced learner builder · response sections" }]} />
              </section>
              <section className="nasa-builder-section" aria-labelledby="topical-builders-heading">
                <h3 id="topical-builders-heading">Topical Builders</h3>
                <BuilderScreenshots images={[{ src: youngtopical1, caption: "Topical builder · solar system example" }, { src: youngtopical2, caption: "Topical builder · topic response sections" }]} />
              </section>

            </div>
          )}
          {section.id === "constraint" && (
            <div className="space-y-4">
              <p>Due to project security requirements, the application could not use a database to store user information or progress. This introduced a usability challenge, particularly for younger students who might not be able to complete the activity within a single class period.</p>
              <div className="pn-card"><h3>The usability risk</h3><p>As the developer, I identified and communicated the implications of this limitation to my team. Without a way to save and resume their work within the application, students would need to complete their hexagons in one session or risk losing their progress.</p></div>
              <div className="pn-card nasa-constraint-note"><h3>A practical workaround</h3><p>To address this, my mentor developed companion worksheets that allowed students to work through the prompts at their own pace before entering their responses into the builder.</p></div>
              <div className="nasa-worksheet-comparison">
                <div className="nasa-worksheet-flow">
                  <h3>Without worksheets</h3>
                  <ol>
                    {["Open the builder", "Write responses in the application", "Finish in one session or risk losing progress"].map((step, index) => <li key={step}><span className="nasa-flow-number">#{index + 1}</span><p>{step}</p></li>)}
                  </ol>
                </div>
                <div className="nasa-worksheet-flow">
                  <h3>With worksheets</h3>
                  <ol>
                    {["Prepare responses on paper or save them in a digital worksheet", "Keep and revisit answers between sessions", "Enter prepared responses into the builder when ready"].map((step, index) => <li key={step}><span className="nasa-flow-number">#{index + 1}</span><p>{step}</p></li>)}
                  </ol>
                </div>
              </div>
              <p>While the application itself remained session-based, the worksheets provided an alternative way for students to prepare and retain their answers across multiple sessions without requiring persistent data storage.</p>
            </div>
          )}
          {section.id === "iteration" && (
            <div className="space-y-4">
              <p>Throughout development, stakeholder reviews helped me refine the builders from three perspectives: sharing a professional’s story, supporting younger audiences, and making the activity practical for classrooms.</p>
              <section className="nasa-builder-section" aria-labelledby="nasa-starting-point-heading">
                <h3 id="nasa-starting-point-heading">The Starting Point</h3>
                <p>These screenshots show the original starter-code interface before the refinements described below.</p>
                <BuilderScreenshots images={[{ src: original1, caption: "Original starter code · Front side" }, { src: original2, caption: "Original starter code · Back side" }]} />
              </section>
              <div className="nasa-iteration-topics nasa-reviewer-notes">
                <article className="pn-card">
                  <span className="nasa-reviewer-focus">SME storytelling &amp; user flow</span>
                  <h3>Astromaterials Scientist</h3>
                  <p>The scientist walked through the SME hexagon creation process, helped identify bugs in the user flow and platform, and reviewed how the prompts supported sharing a career story.</p>
                  <h4>How this shaped the builder</h4>
                  <p>With their input, I adjusted the prompts so an SME’s story flowed more naturally across the hexagon. Their walkthroughs also helped surface bugs during development.</p>
                </article>
                <article className="pn-card">
                  <span className="nasa-reviewer-focus">Guidance &amp; creative freedom</span>
                  <h3>Educational Design Specialist</h3>
                  <p>The specialist helped me understand how to include younger audiences effectively and introduced the idea of offering optional fill-in-the-blank prompts alongside custom responses.</p>
                  <h4>How this shaped the builder</h4>
                  <p>I implemented guided prompts for learners who need more structure while preserving custom responses for those who prefer to write freely.</p>
                </article>
                <article className="pn-card">
                  <span className="nasa-reviewer-focus">Language &amp; classroom use</span>
                  <h3>Teachers</h3>
                  <p>Teachers helped me choose wording suited to different learners, highlighted classroom time constraints, and emphasized clear instructions and navigation.</p>
                  <h4>How this shaped the builder</h4>
                  <p>Their input informed learner-specific wording and reinforced the importance of clear directions. It also helped me understand why completing the activity in a single session could be difficult, making preparation outside the application especially valuable.</p>
                </article>
              </div>
              <p className="pn-note">These stakeholder reviews informed development. Usability testing with students remains a next step after public release.</p>
            </div>
          )}
        </section>
      ))}
    </div>
  );
}
