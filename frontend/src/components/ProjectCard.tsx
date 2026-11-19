import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import type { Project } from "@/content/portfolio";
import { ProjectTechnologies } from "@/components/ProjectTechnologies";

export function ProjectCard({ project, headingLevel = "h3", technologyLimit }: { project: Project; headingLevel?: "h2" | "h3"; technologyLimit?: number }) {
  const Heading = headingLevel;
  const previewTechnologies = technologyLimit === undefined
    ? undefined
    : project.featuredTechnologies ?? project.technologies.slice(0, technologyLimit);

  return (
    <article className="project-card">
      <div className="project-topline">
        <span className="project-index" aria-hidden="true">{project.title.slice(0, 2).toUpperCase()}</span>
        {project.featured && <span className="featured-label">Featured</span>}
      </div>
      <div className="project-copy">
        <Heading>{project.title}</Heading>
        <p>{project.description}</p>
      </div>
      <ProjectTechnologies
        id={`${project.slug}-technologies`}
        label={`${project.title} technologies`}
        technologies={project.technologies}
        previewTechnologies={previewTechnologies}
      />
      <a className="project-link" href={project.repositoryUrl} target="_blank" rel="noreferrer" aria-label={`View ${project.title} repository on GitHub`}>
        <FiGithub aria-hidden="true" />
        View repository
        <FiArrowUpRight aria-hidden="true" />
      </a>
    </article>
  );
}
