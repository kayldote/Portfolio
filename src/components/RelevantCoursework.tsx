import { useId, useRef, useState } from "react";

const categories = [
  { title: "Programming", courses: [
    { title: "Data Structures & Algorithms", description: "Studied data structures, algorithms, and their efficiency." },
    { title: "Introduction to Software Engineering", description: "Built the Panda Express full-stack application and learned to serve as Scrum Master while working with agile development practices." },
    { title: "Accessible Computing", description: "Learned to evaluate products against WCAG accessibility standards and build with accessibility in mind." },
  ] },
  { title: "Design", courses: [
    { title: "Human Computer Interaction", description: "Learned to plan and conduct user research to inform application design and development." },
    { title: "Interaction Design", description: "Conducted user experience research focused on mobility around the Texas A&M campus." },
  ] },
];

export function RelevantCoursework() {
  const [active, setActive] = useState(0);
  const id = useId();
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  return <section className="relevant-coursework" aria-labelledby={`${id}-heading`}>
    <h3 id={`${id}-heading`}>Relevant Coursework</h3>
    <div className="coursework-tabs" role="tablist" aria-label="Coursework categories">
      {categories.map((category, index) => <button key={category.title} ref={element => { buttons.current[index] = element; }} type="button" role="tab" id={`${id}-tab-${index}`} aria-controls={`${id}-panel`} aria-selected={active === index} tabIndex={active === index ? 0 : -1} onClick={() => setActive(index)} onKeyDown={event => {
        let next = index;
        if (event.key === "ArrowRight" || event.key === "ArrowLeft") next = 1 - index;
        else if (event.key === "Home") next = 0;
        else if (event.key === "End") next = 1;
        else return;
        event.preventDefault(); setActive(next); buttons.current[next]?.focus();
      }}>{category.title}</button>)}
    </div>
    <div role="tabpanel" id={`${id}-panel`} aria-labelledby={`${id}-tab-${active}`} tabIndex={0} className="coursework-panel">
      {categories[active].courses.map(course => <div className="coursework-item" key={course.title}><h4>{course.title}</h4><p>{course.description}</p></div>)}
    </div>
  </section>;
}
