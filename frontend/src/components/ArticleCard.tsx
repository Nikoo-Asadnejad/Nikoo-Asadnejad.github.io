import { FiArrowUpRight, FiCalendar } from "react-icons/fi";
import { SiMedium } from "react-icons/si";
import type { Article } from "@/content/articles";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="article-card">
      <div className="article-topline">
        <span className="article-icon" aria-hidden="true"><SiMedium /></span>
        {article.featured && <span className="featured-label">Top article</span>}
      </div>
      <div className="article-copy">
        <p className="article-date"><FiCalendar aria-hidden="true" /> {article.published}</p>
        <h3>{article.title}</h3>
        <p>{article.abstract}</p>
      </div>
      <a className="article-link" href={article.url} target="_blank" rel="noreferrer" aria-label={`Read ${article.title} on Medium`}>
        Read on Medium
        <FiArrowUpRight aria-hidden="true" />
      </a>
    </article>
  );
}
