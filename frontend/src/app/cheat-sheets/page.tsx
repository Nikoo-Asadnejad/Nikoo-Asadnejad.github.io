import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowRight, FiArrowUpRight, FiBookOpen, FiTerminal } from "react-icons/fi";
import { SiDocker, SiGit, SiKubernetes, SiLinux } from "react-icons/si";
import { getCheatSheets } from "@/content/cheatSheets";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Developer Cheat Sheets",
  description: "Readable Linux, Git, Kubernetes, and Docker command references by software engineer Nikoo Asadnejad.",
  alternates: { canonical: absoluteUrl("/cheat-sheets/") },
};

const icons = {
  linux: SiLinux,
  git: SiGit,
  kubernetes: SiKubernetes,
  docker: SiDocker,
};

export default function CheatSheetsPage() {
  const cheatSheets = getCheatSheets();

  return (
    <>
      <section className="page-hero section cheat-index-hero">
        <div className="container narrow">
          <p className="eyebrow">Developer reference library</p>
          <h1>Commands you need, right when you need them.</h1>
          <p>Four practical command guides, reformatted from my open-source repositories into fast, searchable, on-site references.</p>
        </div>
      </section>

      <section className="section page-content" aria-labelledby="cheat-library-title">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Browse the library</p>
              <h2 id="cheat-library-title">Cheat sheets</h2>
            </div>
            <p>Open a guide to search its full command set, jump between topics, and copy commands in one click.</p>
          </div>

          <div className="cheat-card-grid">
            {cheatSheets.map((sheet) => {
              const Icon = icons[sheet.slug as keyof typeof icons];
              return (
                <article className={`cheat-card cheat-accent-${sheet.accent}`} key={sheet.slug}>
                  <div className="cheat-card-topline">
                    <span className="cheat-card-icon"><Icon aria-hidden="true" /></span>
                    <span className="cheat-card-count"><FiTerminal aria-hidden="true" /> {sheet.commandCount} references</span>
                  </div>
                  <div className="cheat-card-copy">
                    <p className="eyebrow">{sheet.sections.length} topics</p>
                    <h2>{sheet.shortTitle}</h2>
                    <p>{sheet.description}</p>
                  </div>
                  <div className="cheat-card-actions">
                    <Link href={`/cheat-sheets/${sheet.slug}/`}>Read cheat sheet <FiArrowRight aria-hidden="true" /></Link>
                    <a href={sheet.repositoryUrl} target="_blank" rel="noreferrer" aria-label={`View ${sheet.shortTitle} source repository`}>Source <FiArrowUpRight aria-hidden="true" /></a>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="cheat-library-note">
            <FiBookOpen aria-hidden="true" />
            <div>
              <strong>Readable here, open-source at the source.</strong>
              <p>Each guide mirrors the content of its GitHub repository while adding search, navigation, and copy-friendly formatting.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
