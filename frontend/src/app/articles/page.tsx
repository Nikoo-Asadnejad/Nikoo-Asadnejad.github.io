import type { Metadata } from "next";
import { ArticleSearch } from "@/components/ArticleSearch";
import { articles } from "@/content/articles";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Articles",
  description: "Articles by software engineer and backend developer Nikoo Asadnejad about software architecture, .NET, distributed systems, cloud-native engineering, and AI.",
  alternates: { canonical: absoluteUrl("/articles/") },
};

export default function ArticlesPage() {
  return (
    <>
      <section className="page-hero section">
        <div className="container narrow">
          <p className="eyebrow">Writing</p>
          <h1>Engineering ideas, explained clearly.</h1>
          <p>Notes and practical guides on software architecture, .NET, distributed systems, cloud-native engineering, security, and modern AI.</p>
        </div>
      </section>
      <section className="section page-content" aria-labelledby="all-articles-title">
        <div className="container">
          <div className="section-heading articles-heading">
            <div>
              <p className="eyebrow">Writing archive</p>
              <h2 id="all-articles-title">All articles</h2>
            </div>
          </div>
          <ArticleSearch articles={articles} />
        </div>
      </section>
    </>
  );
}
