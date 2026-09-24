import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/content/portfolio";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected distributed systems, observability tooling, automation, and AI engineering projects by Nikoo Asadnejad.",
  alternates: siteUrl ? { canonical: `${siteUrl}/projects/` } : undefined,
};

export default function ProjectsPage() {
  return (
    <>
      <section className="page-hero section">
        <div className="container narrow">
          <p className="eyebrow">Portfolio</p>
          <h1>Selected engineering projects</h1>
          <p>Distributed systems, developer tooling, operational automation, and practical AI experiments built around real engineering needs.</p>
        </div>
      </section>
      <section className="section page-content">
        <div className="container project-grid project-grid-full">
          {projects.map((project) => <ProjectCard project={project} key={project.slug} />)}
        </div>
      </section>
    </>
  );
}
