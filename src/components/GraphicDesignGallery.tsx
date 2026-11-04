import { CaseStudyNav } from "./CaseStudyNav";
import officerAction from "../assets/graphic-designs/OfficerAction.jpg";
import officerMerch from "../assets/graphic-designs/OfficerMerch.png";
import philsa5kAction from "../assets/graphic-designs/5KAction.jpg";
import jerseyAction from "../assets/graphic-designs/JerseyAction.png";
import jersey from "../assets/graphic-designs/Jersey.jpeg";
import isangAction from "../assets/about-photo-4.jpg";
import championsShirt from "../assets/graphic-designs/ChampionsShirt.jpg";
import hoodieAction from "../assets/graphic-designs/HoodieAction.JPG";
import sweatpantsAction from "../assets/graphic-designs/SweatpantsAction.png";
import culturalHoodie from "../assets/graphic-designs/CulturalHoodieBack.png";
import culturalShirt from "../assets/graphic-designs/Cultural_Shirt.PNG";
import philsa5k from "../assets/graphic-designs/5KShirt.png";
import isangHeart from "../assets/graphic-designs/ISANG_Heart.JPG";

type DesignProject = {
  id: string;
  title: string;
  description: string;
  link?: { href: string; label: string };
  graphic: { src: string; alt: string };
  inAction: { src: string; alt: string };
  additionalActions?: { src: string; alt: string; label: string }[];
};

// Add each project's title, short description, and imported image sources here.
const designProjects: DesignProject[] = [
  { id: "cultural-shirt", title: "Cultural Champions", description: "Created for Fall 2025, this graphic celebrates our Cultural Team’s back-to-back cultural dance championships at the annual Goodphil competition.", link: { href: "https://www.youtube.com/watch?v=KdBcxMnCHzo", label: "Watch me dance at Goodphil 2025!" }, graphic: { src: culturalShirt, alt: "Cultural Champions TAMU PHILSA shirt graphic with yellow dancers and blue varsity lettering" }, inAction: { src: championsShirt, alt: "Cultural Champions shirt design in action" } },
  { id: "philsa-5k", title: "PHILSA 5K", description: "Designed for the participant shirts at PhilSA’s 5K event.", graphic: { src: philsa5k, alt: "PHILSA 5K shirt design" }, inAction: { src: philsa5kAction, alt: "PHILSA 5K design in action" } },
  { id: "isang-heart", title: "Isang Mahal", description: "Isang Mahal (One Love) is an annual event hosted by Texas A&M that brings together Filipino student associations from other Texas schools. I created this design to complement the event’s ’70s theme, and my co-chair and I sold out of every shirt!", graphic: { src: isangHeart, alt: "Isang Mahal red heart graphic with cream ruffles and teal ribbon" }, inAction: { src: isangAction, alt: "Isang Mahal design in action" } },
  { id: "cultural-hoodie", title: "Goodphil 2026 Cultural Design", description: "Designed for our team uniforms, this piece gave our close-knit group of around 40 members something uniquely ours to wear and a shared identity that brought us closer together.", graphic: { src: culturalHoodie, alt: "PhilSA Cultural hoodie back graphic with orchids, bamboo, mountains, an eagle, and a parol" }, inAction: { src: hoodieAction, alt: "Goodphil 2026 cultural design on a hoodie" }, additionalActions: [{ src: sweatpantsAction, alt: "Goodphil 2026 cultural design on sweatpants", label: "In Action · Sweatpants" }] },
  { id: "goodphil-2025-jersey", title: "Goodphil 2025 Sports Jersey", description: "Created for the Goodphil jersey competition, this winning design was worn by the sports team and general members.", graphic: { src: jersey, alt: "Goodphil 2025 sports jersey design" }, inAction: { src: jerseyAction, alt: "Goodphil 2025 sports jersey in action" } },
  { id: "philsa-officer-quarter-zip", title: "PhilSA Officer Quarter Zip", description: "For my first project as Co-Graphics Chair, my co-chair and I designed this quarter zip for PhilSA officers. Its symbolism reflects Bayanihan, the Filipino spirit of communal cooperation, celebrating a team that supports one another and works toward a shared goal.", graphic: { src: officerMerch, alt: "PhilSA Officer Quarter Zip graphic" }, inAction: { src: officerAction, alt: "PhilSA Officer Quarter Zip in action" } },
];

const gallerySections = designProjects.map((project, index) => ({ id: project.id, title: `Project ${String(index + 1).padStart(2, "0")}` }));

export function GraphicDesignGallery() {
  return <div className="graphic-design-gallery">
    <p className="graphic-design-intro">These projects were created during my term as Philippine Student Association Co-Graphics Chair, from May 2025 to May 2026. I independently designed the first five projects and collaborated with my co-chair on the Officer Quarter Zip. Here’s a look at each design and how it came to life.</p>
    <CaseStudyNav sections={gallerySections} label="Graphic design projects" />
    {designProjects.map((project, index) => <section key={project.id} className="graphic-design-project" id={project.id} aria-labelledby={`${project.id}-title`}>
      <header><span className="graphic-project-number">0{index + 1}</span><h2 id={`${project.id}-title`}>{project.title}</h2></header>
      <p className="graphic-project-credit">{project.id === "philsa-officer-quarter-zip" ? "Designed with my co-chair" : "Solo design project"}</p>
      <div className={`graphic-project-images${project.additionalActions ? " graphic-project-action-column" : ""}`}>
        {([{ label: "The Graphic", image: project.graphic }, { label: project.additionalActions ? "In Action · Hoodie" : "In Action", image: project.inAction }, ...(project.additionalActions || []).map(image => ({ label: image.label, image }))]).map(({ label, image }) => <figure key={label}>
          {image.src ? <img src={image.src} alt={image.alt} loading="lazy" /> : <div className="graphic-image-placeholder"><span aria-hidden="true">✧</span><span>{label}</span><small>Image coming soon</small></div>}
          <figcaption>{label}</figcaption>
        </figure>)}
      </div>
      <p className={project.description ? "graphic-project-description" : "graphic-project-description is-placeholder"}>{project.description || "Add a short description of the event or purpose behind this design."}</p>
      {project.link && <a className="graphic-project-link" href={project.link.href} target="_blank" rel="noreferrer">{project.link.label} ↗</a>}
    </section>)}
  </div>;
}
