import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import type { Project } from "@/content/portfolio";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-topline">
        <span className="project-index" aria-hidden="true">{project.title.slice(0, 2).toUpperCase()}</span>
        {project.featured && <span className="featured-label">Featured</span>}
      </div>
      <div className="project-copy">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
      <ul className="tag-list" aria-label={`${project.title} technologies`}>
        {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
      </ul>
      <a className="project-link" href={project.repositoryUrl} target="_blank" rel="noreferrer" aria-label={`View ${project.title} repository on GitHub`}>
        <FiGithub aria-hidden="true" />
        View repository
        <FiArrowUpRight aria-hidden="true" />
      </a>
    </article>
  );
}

