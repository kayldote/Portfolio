import type { Project } from "../data/projects";

// This overview can be reused in each project's individual page layout.
export function ProjectOverview({ project }: { project: Project }) {
  return (
    <dl className="project-overview">
      <div>
        <dt>My role</dt>
        <dd>{project.role}</dd>
      </div>
      <div>
        <dt>My team</dt>
        <dd>{project.team}</dd>
      </div>
      <div>
        <dt>Timeline</dt>
        <dd>{project.timeline}</dd>
      </div>
      <div>
        <dt>Tools</dt>
        <dd className="project-tools">
          {project.tools.map((tool, index) => <span key={`${tool}-${index}`}>{tool}</span>)}
        </dd>
      </div>
    </dl>
  );
}
