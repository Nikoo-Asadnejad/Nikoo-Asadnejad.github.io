import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiArrowUpRight, FiLayers, FiTerminal } from "react-icons/fi";
import { CheatSheetExplorer } from "@/components/CheatSheetExplorer";
import { getCheatSheet, getCheatSheetSlugs } from "@/content/cheatSheets";

type CheatSheetPageProps = {
  params: Promise<{ slug: string }>;
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

export function generateStaticParams() {
  return getCheatSheetSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: CheatSheetPageProps): Promise<Metadata> {
  const { slug } = await params;
  const sheet = getCheatSheet(slug);
  if (!sheet) return {};

  return {
    title: sheet.title,
    description: sheet.description,
    alternates: siteUrl ? { canonical: `${siteUrl}/cheat-sheets/${slug}/` } : undefined,
  };
}

export default async function CheatSheetPage({ params }: CheatSheetPageProps) {
  const { slug } = await params;
  const sheet = getCheatSheet(slug);
  if (!sheet) notFound();

  return (
    <>
      <section className={`page-hero section cheat-detail-hero cheat-accent-${sheet.accent}`}>
        <div className="container">
          <Link className="cheat-back-link" href="/cheat-sheets/"><FiArrowLeft aria-hidden="true" /> All cheat sheets</Link>
          <div className="cheat-detail-heading">
            <div>
              <p className="eyebrow">{sheet.shortTitle} reference</p>
              <h1>{sheet.title}</h1>
              <p>{sheet.description}</p>
            </div>
            <a className="button button-secondary" href={sheet.repositoryUrl} target="_blank" rel="noreferrer">
              View source repository <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <div className="cheat-stats" aria-label="Cheat sheet summary">
            <span><FiTerminal aria-hidden="true" /><strong>{sheet.commandCount}</strong> command references</span>
            <span><FiLayers aria-hidden="true" /><strong>{sheet.sections.length}</strong> topic sections</span>
          </div>
        </div>
      </section>

      <section className="section cheat-content-section">
        <div className="container">
          <CheatSheetExplorer sections={sheet.sections} />
          <div className="cheat-source-note">
            <p>Source content from <a href={sheet.repositoryUrl} target="_blank" rel="noreferrer">{sheet.repositoryUrl.replace("https://github.com/", "github.com/")}</a>.</p>
          </div>
        </div>
      </section>
    </>
  );
}
