import type { Metadata } from "next";
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { SiMedium } from "react-icons/si";
import { ContactForm } from "@/components/ContactForm";
import { profile } from "@/content/portfolio";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Nikoo Asadnejad about software engineering roles, architecture work, and technical collaboration.",
  alternates: siteUrl ? { canonical: `${siteUrl}/contact/` } : undefined,
};

const details = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: FiMail },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone}`, icon: FiPhone },
  { label: "Location", value: profile.location, icon: FiMapPin },
];

export default function ContactPage() {
  return (
    <>
      <section className="page-hero section">
        <div className="container narrow">
          <p className="eyebrow">Get in touch</p>
          <h1>Let&apos;s discuss the next challenge.</h1>
          <p>I&apos;m interested in ambitious engineering work, thoughtful architecture, and teams that care about quality and impact.</p>
        </div>
      </section>
      <section className="section page-content">
        <div className="container contact-grid">
          <div className="contact-details">
            <h2>Contact details</h2>
            <p>Reach out about a role, a technical problem, or a project where my background may help.</p>
            <div className="detail-list">
              {details.map((detail) => {
                const Icon = detail.icon;
                const body = <><Icon aria-hidden="true" /><span><small>{detail.label}</small><strong>{detail.value}</strong></span></>;
                return detail.href ? <a className="detail-card" href={detail.href} key={detail.label}>{body}</a> : <div className="detail-card" key={detail.label}>{body}</div>;
              })}
            </div>
            <div className="contact-socials" aria-label="Professional profiles">
              <a href={profile.github} target="_blank" rel="noreferrer"><FiGithub aria-hidden="true" /> GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><FiLinkedin aria-hidden="true" /> LinkedIn</a>
              <a href={profile.medium} target="_blank" rel="noreferrer"><SiMedium aria-hidden="true" /> Medium</a>
            </div>
          </div>
          <div className="form-panel">
            <p className="eyebrow">Send a message</p>
            <h2>Tell me what you&apos;re working on</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
