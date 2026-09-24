import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { SiMedium } from "react-icons/si";
import { ProjectCard } from "@/components/ProjectCard";
import { TechnologyGrid } from "@/components/TechnologyGrid";
import { profile, projects } from "@/content/portfolio";

export default function HomePage() {
  return (
    <>
      <section className="hero section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="availability"><span aria-hidden="true" /> Open to meaningful engineering opportunities</p>
            <p className="eyebrow">Hello, I&apos;m</p>
            <h1>Nikoo<br /><span>Asadnejad</span></h1>
            <h2>Senior Software Engineer</h2>
            <p className="hero-summary">{profile.shortSummary}</p>
            <div className="button-row">
              <Link className="button" href="/projects/">Explore my work <FiArrowRight aria-hidden="true" /></Link>
              <Link className="button button-secondary" href="/contact/">Contact me</Link>
              <a className="text-link" href={profile.cv} download><FiDownload aria-hidden="true" /> Download CV</a>
            </div>
            <div className="social-links" aria-label="Social links">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
              <a href={profile.medium} target="_blank" rel="noreferrer" aria-label="Medium"><SiMedium /></a>
              <a href={`mailto:${profile.email}`} aria-label="Email"><FiMail /></a>
            </div>
          </div>
          <div className="hero-visual" aria-label="Portrait of Nikoo Asadnejad">
            <div className="portrait-orbit" aria-hidden="true" />
            <div className="portrait-frame">
              <Image src={profile.portrait} alt="Nikoo Asadnejad" width={400} height={400} priority sizes="(max-width: 760px) 78vw, 400px" />
            </div>
            <div className="code-card" aria-hidden="true">
              <span>engineer.profile</span>
              <strong>architecture · delivery</strong>
              <em>reliability · impact</em>
            </div>
            <div className="experience-card"><strong>5 years</strong><span>software engineering</span></div>
          </div>
        </div>
      </section>

      <section className="section section-surface" aria-labelledby="skills-title">
        <div className="container">
          <div className="section-heading split-heading">
            <div><p className="eyebrow">Technical toolkit</p><h2 id="skills-title">Technologies I work with</h2></div>
            <p>Backend engineering, distributed systems, cloud-native delivery, and pragmatic AI experimentation.</p>
          </div>
          <TechnologyGrid />
        </div>
      </section>

      <section className="section" aria-labelledby="featured-projects-title">
        <div className="container">
          <div className="section-heading split-heading">
            <div><p className="eyebrow">Selected work</p><h2 id="featured-projects-title">Systems built to solve real problems</h2></div>
            <Link className="text-link" href="/projects/">View all projects <FiArrowRight aria-hidden="true" /></Link>
          </div>
          <div className="project-grid">
            {projects.filter((project) => project.featured).map((project) => <ProjectCard project={project} key={project.slug} />)}
          </div>
        </div>
      </section>

      <section className="section callout-section">
        <div className="container callout">
          <div><p className="eyebrow">Let&apos;s work together</p><h2>Building something ambitious?</h2><p>I&apos;m interested in engineering challenges where architecture, reliability, and product thinking matter.</p></div>
          <Link className="button" href="/contact/">Start a conversation <FiArrowRight aria-hidden="true" /></Link>
        </div>
      </section>
    </>
  );
}

