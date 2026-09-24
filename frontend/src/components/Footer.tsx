import Link from "next/link";
import { profile } from "@/content/portfolio";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div>
          <strong>Nikoo Asadnejad</strong>
          <p>Senior Software Engineer building reliable systems and thoughtful products.</p>
        </div>
        <div className="footer-links" aria-label="Footer navigation">
          <Link href="/projects/">Projects</Link>
          <Link href="/resume/">Resume</Link>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}

