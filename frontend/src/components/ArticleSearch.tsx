"use client";

import { useMemo, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { ArticleCard } from "@/components/ArticleCard";
import type { Article } from "@/content/articles";

export function ArticleSearch({ articles }: { articles: Article[] }) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const filteredArticles = useMemo(
    () => articles.filter((article) =>
      `${article.title} ${article.abstract}`.toLocaleLowerCase().includes(normalizedQuery),
    ),
    [articles, normalizedQuery],
  );

  return (
    <>
      <div className="article-search-row">
        <label className="article-search">
          <FiSearch aria-hidden="true" />
          <span className="sr-only">Search articles by title or summary</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by title or summary..."
          />
        </label>
        <p aria-live="polite">{filteredArticles.length} {filteredArticles.length === 1 ? "article" : "articles"}</p>
      </div>
      {filteredArticles.length > 0 ? (
        <div className="article-grid">
          {filteredArticles.map((article) => <ArticleCard article={article} key={article.url} />)}
        </div>
      ) : (
        <div className="article-empty-state">
          <h3>No articles found</h3>
          <p>Try a different title or topic.</p>
        </div>
      )}
    </>
  );
}
