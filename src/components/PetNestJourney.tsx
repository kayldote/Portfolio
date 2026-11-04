import { useEffect, useRef, useState } from "react";

const stages = [
  {
    phase: "Seeing that Archie is hungry",
    doing: "Entering home after work while Archie meows at her.",
    thinking: "Archie seems hungry, but I don’t want to overfeed him.",
    opportunity: "A location tracker that sends a notification suggesting whether or not the user should feed cats when the user arrives home.",
    emoji: "😟", mood: "Worried",
  },
  {
    phase: "Checking if Archie was recently fed",
    doing: "Texts the family group chat asking if anyone has fed Archie, but receives no quick response.",
    thinking: "No one is responding, should I just feed him?",
    opportunity: "A clear timed log available right when the user enters the app, or a widget on the home screen.",
    emoji: "🤔", mood: "Uncertain",
  },
  {
    phase: "Feeding Archie",
    doing: "Looking at Archie’s bowl for cues but still can’t tell if he was already fed, gives Archie food anyway.",
    thinking: "I have no idea how much he already ate today.",
    opportunity: "Detailed visual feedback showing how much food Archie has already eaten for the day.",
    emoji: "😓", mood: "Stressed",
  },
  {
    phase: "Tracking feeding",
    doing: "Texts the family group chat the time and amount she fed Archie—and in some cases forgets to.",
    thinking: "My family never remembers to check the group chat for updates.",
    opportunity: "A memorable feedback method that helps the user remember and want to track the feeding.",
    emoji: "😕", mood: "Frustrated",
  },
];

export function PetNestJourney() {
  const board = useRef<HTMLDivElement>(null);
  const [ribbon, setRibbon] = useState("");
  useEffect(() => {
    const element = board.current;
    if (!element) return;
    const update = () => {
      const bounds = element.getBoundingClientRect();
      const points = Array.from(element.querySelectorAll<HTMLElement>(".pn-journey-stage")).map(card => {
        const rect = card.getBoundingClientRect();
        return { x: rect.left - bounds.left + rect.width / 2, y: rect.top - bounds.top + 5 };
      });
      setRibbon(points.map((point, index) => {
        if (!index) return `M ${point.x} ${point.y}`;
        const previous = points[index - 1];
        const mid = (previous.y + point.y) / 2;
        return `C ${previous.x} ${mid}, ${point.x} ${mid}, ${point.x} ${point.y}`;
      }).join(" "));
    };
    const observer = new ResizeObserver(update);
    observer.observe(element);
    element.querySelectorAll(".pn-journey-stage").forEach(card => observer.observe(card));
    update();
    return () => observer.disconnect();
  }, []);
  return (
    <div className="pn-journey-scrapbook" ref={board}>
      <svg className="pn-journey-ribbon" aria-hidden="true"><path className="pn-ribbon-shadow" d={ribbon} /><path className="pn-ribbon-body" d={ribbon} /><path className="pn-ribbon-stitch" d={ribbon} /></svg>
    <ol className="pn-journey" aria-label="Lily’s current feeding journey with Archie">
      {stages.map((stage, index) => (
        <li key={stage.phase} id={`lily-stage-${index + 1}`} className="pn-journey-stage">
          <header>
            <h4>#{index + 1} {stage.phase}</h4>
          </header>
          <dl>
            <div><dt>Doing</dt><dd>{stage.doing}</dd></div>
            <div className="pn-journey-thought"><dt>Thinking / saying</dt><dd>“{stage.thinking}”</dd></div>
            <div className="pn-journey-opportunity"><dt>A chance to help</dt><dd>{stage.opportunity}</dd></div>
            <div className="pn-journey-mood"><dt>Mood</dt><dd><span aria-hidden="true">{stage.emoji}</span>{stage.mood}</dd></div>
          </dl>
        </li>
      ))}
    </ol>
    </div>
  );
}
