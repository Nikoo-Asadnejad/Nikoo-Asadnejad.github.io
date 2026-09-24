import type { Metadata } from "next";
import { FiDownload } from "react-icons/fi";
import { certifications, education, experiences, profile, skillGroups } from "@/content/portfolio";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

export const metadata: Metadata = {
  title: "Resume",
  description: "Experience, education, certifications, and technical skills of Senior Software Engineer Nikoo Asadnejad.",
  alternates: siteUrl ? { canonical: `${siteUrl}/resume/` } : undefined,
};

export default function ResumePage() {
  return (
    <>
      <section className="page-hero section resume-hero">
        <div className="container resume-hero-grid">
          <div>
            <p className="eyebrow">Resume</p>
            <h1>Engineering reliable systems from idea to operation.</h1>
            <p>{profile.summary[0]}</p>
          </div>
          <a className="button" href={profile.cv} download><FiDownload aria-hidden="true" /> Download CV</a>
        </div>
      </section>

      <section className="section page-content">
        <div className="container resume-layout">
          <aside className="resume-sidebar">
            <div className="resume-panel">
              <p className="eyebrow">Profile</p>
              {profile.summary.slice(1).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <section className="resume-panel sidebar-skills" aria-labelledby="sidebar-skills-title">
              <p className="eyebrow" id="sidebar-skills-title">Technical skills</p>
              {skillGroups.map((group) => (
                <div className="sidebar-skill-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
                  </ul>
                </div>
              ))}
            </section>
          </aside>
          <div className="resume-main">
            <section className="resume-section" aria-labelledby="experience-title">
              <div className="resume-section-heading"><span>01</span><h2 id="experience-title">Experience</h2></div>
              <div className="timeline">
                {experiences.map((experience) => (
                  <article className="timeline-item" key={`${experience.company}-${experience.role}`}>
                    <p className="timeline-period">{experience.period}</p>
                    <h3>{experience.role}</h3>
                    <p className="company">{experience.company}</p>
                    <ul>
                      {experience.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section className="resume-section" aria-labelledby="education-title">
              <div className="resume-section-heading"><span>02</span><h2 id="education-title">Education</h2></div>
              <div className="credential-timeline">
                {education.map((item) => (
                  <article className="credential-item" key={item.degree}>
                    <p className="card-meta">{item.period}</p>
                    <h3>{item.degree}</h3>
                    <p className="company">{item.institution}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="resume-section" aria-labelledby="certifications-title">
              <div className="resume-section-heading"><span>03</span><h2 id="certifications-title">Licenses &amp; certifications</h2></div>
              <div className="credential-timeline">
                {certifications.map((item) => (
                  <article className="credential-item" key={item.title}>
                    <p className="card-meta">{item.issued} · {item.duration}</p>
                    <h3>{item.title}</h3>
                    <p className="company">{item.provider}</p>
                    <p className="credential-topics">{item.topics}</p>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
