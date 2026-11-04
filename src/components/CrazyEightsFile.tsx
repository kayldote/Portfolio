import { useState } from "react";
import sketch1 from "../assets/pet-nest/Crazy8-1.jpg";
import sketch2 from "../assets/pet-nest/Crazy8-2.jpg";
import sketch3 from "../assets/pet-nest/Crazy8-3.jpg";

const sketches = [
  { src: sketch1, range: "A–H", title: "Build a return habit", question: "How might we make this a product that people naturally return to every day?", description: "Gamification methods, emotional invocation, and lots of visuals and numbers.", alt: "Crazy Eights A–H: food bowl visuals, a home-screen widget, family scoreboard, reminders, and feedback to encourage daily use." },
  { src: sketch2, range: "I–P", title: "Communicate clearly", question: "How might we make it easier for households to effectively communicate when a pet is fed?", description: "Notifications, visual cues, and easy display of information.", alt: "Crazy Eights I–P: latest feeding details, household notifications, color-coded pet cards, and a feeding-history widget." },
  { src: sketch3, range: "Q–X", title: "Make updates effortless", question: "How might we make logging and viewing pet updates feel effortless for busy households?", description: "Large tappable areas, quick direction, consolidated information, and visual cues.", alt: "Crazy Eights Q–X: quick logging buttons, food image detection, home-screen widgets, direct feeding forms, and compact pet cards." },
];

export function CrazyEightsFile() {
  const [selected, setSelected] = useState(0);
  const sketch = sketches[selected];
  return <div className="panda-insights-file petnest-sketch-file">
    <div className="panda-file-tabs" role="tablist" aria-label="Crazy Eights sketch collections">
      {sketches.map((item, index) => <button key={item.range} type="button" role="tab" id={`sketch-tab-${index}`} aria-selected={selected === index} aria-controls="sketch-panel" tabIndex={selected === index ? 0 : -1} onClick={() => setSelected(index)} onKeyDown={event => {
        let next = index;
        if (event.key === "ArrowRight") next = (index + 1) % sketches.length;
        else if (event.key === "ArrowLeft") next = (index + sketches.length - 1) % sketches.length;
        else if (event.key === "Home") next = 0;
        else if (event.key === "End") next = sketches.length - 1;
        else return;
        event.preventDefault();
        setSelected(next);
        document.getElementById(`sketch-tab-${next}`)?.focus();
      }}><span>Grids {item.range}</span>{item.title}</button>)}
    </div>
    <div className="panda-finding panda-file-panel" id="sketch-panel" role="tabpanel" aria-labelledby={`sketch-tab-${selected}`} tabIndex={0} data-finding={selected}>
      <h4>{sketch.question}</h4>
      <p>{sketch.description}</p>
      <figure className="petnest-sketch-image"><img src={sketch.src} alt={sketch.alt} loading="lazy" width={1600} height={1237} /><figcaption>Crazy Eights · Grids {sketch.range} · Click to enlarge</figcaption></figure>
    </div>
  </div>;
}
