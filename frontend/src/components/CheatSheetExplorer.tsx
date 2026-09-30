"use client";

import { Fragment, useEffect, useMemo, useRef, useState } from "react";
import { FiCheck, FiCopy, FiSearch } from "react-icons/fi";
import type { CheatBlock, CheatSection } from "@/content/cheatSheetTypes";

type CheatSheetExplorerProps = {
  sections: CheatSection[];
};

function plainText(value: string) {
  return value
    .replace(/`/g, "")
    .replace(/\*\*/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/<\/?p>|<br\s*\/?>/gi, "")
    .trim();
}

function InlineText({ children }: { children: string }) {
  const parts = children.split(/(`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g).filter(Boolean);

  return parts.map((part, index) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return <code key={`${part}-${index}`}>{part.slice(1, -1)}</code>;
    }
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>;
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      return <a href={link[2]} key={`${part}-${index}`}>{link[1]}</a>;
    }
    return <Fragment key={`${part}-${index}`}>{part}</Fragment>;
  });
}

function blockText(block: CheatBlock) {
  if (block.type === "table") return [...block.headers, ...block.rows.flat()].join(" ");
  if (block.type === "list") return block.items.join(" ");
  if (block.type === "code") return block.code;
  if (block.type === "subheading") return block.title;
  return block.text;
}

function filterBlocks(section: CheatSection, query: string) {
  if (!query || section.title.toLowerCase().includes(query)) return section.blocks;

  return section.blocks.flatMap((block): CheatBlock[] => {
    if (block.type === "table") {
      const rows = block.rows.filter((row) => row.some((cell) => plainText(cell).toLowerCase().includes(query)));
      return rows.length ? [{ ...block, rows }] : [];
    }
    if (block.type === "list") {
      const items = block.items.filter((item) => plainText(item).toLowerCase().includes(query));
      return items.length ? [{ ...block, items }] : [];
    }
    return blockText(block).toLowerCase().includes(query) ? [block] : [];
  });
}

export function CheatSheetExplorer({ sections }: CheatSheetExplorerProps) {
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState("");
  const searchInput = useRef<HTMLInputElement>(null);
  const normalizedQuery = query.trim().toLowerCase();

  useEffect(() => {
    function focusSearch(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        searchInput.current?.focus();
      }
    }

    window.addEventListener("keydown", focusSearch);
    return () => window.removeEventListener("keydown", focusSearch);
  }, []);

  const visibleSections = useMemo(
    () => sections
      .map((section) => ({ ...section, blocks: filterBlocks(section, normalizedQuery) }))
      .filter((section) => section.blocks.length > 0),
    [normalizedQuery, sections],
  );

  async function copyCommand(command: string) {
    await navigator.clipboard.writeText(command);
    setCopied(command);
    window.setTimeout(() => setCopied((current) => current === command ? "" : current), 1400);
  }

  return (
    <div className="cheat-layout">
      <aside className="cheat-sidebar" aria-label="Cheat sheet categories">
        <p className="cheat-sidebar-label">On this page</p>
        <nav>
          {sections.map((section) => <a href={`#${section.id}`} key={section.id}>{section.title}</a>)}
        </nav>
      </aside>

      <div className="cheat-main">
        <div className="cheat-search-wrap">
          <label className="cheat-search">
            <FiSearch aria-hidden="true" />
            <span className="sr-only">Search this cheat sheet</span>
            <input
              ref={searchInput}
              type="search"
              placeholder="Search commands and descriptions..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <kbd>⌘ K</kbd>
          </label>
          <p aria-live="polite">{visibleSections.length} of {sections.length} sections</p>
        </div>

        {visibleSections.length ? visibleSections.map((section) => (
          <section className="cheat-section" id={section.id} key={section.id}>
            <h2>{section.title}</h2>
            {section.blocks.map((block, blockIndex) => {
              if (block.type === "subheading") {
                return <h3 key={`${block.title}-${blockIndex}`}><InlineText>{block.title}</InlineText></h3>;
              }
              if (block.type === "paragraph") {
                return <p key={`paragraph-${blockIndex}`}><InlineText>{block.text}</InlineText></p>;
              }
              if (block.type === "list") {
                return <ul key={`list-${blockIndex}`}>{block.items.map((item) => <li key={item}><InlineText>{item}</InlineText></li>)}</ul>;
              }
              if (block.type === "code") {
                return <pre key={`code-${blockIndex}`}><code>{block.code}</code></pre>;
              }

              return (
                <div className="cheat-table-scroll" key={`table-${blockIndex}`}>
                  <table>
                    <thead><tr>{block.headers.map((header) => <th key={header}>{header}</th>)}</tr></thead>
                    <tbody>
                      {block.rows.map((row, rowIndex) => {
                        const command = plainText(row[0] ?? "");
                        return (
                          <tr key={`${command}-${rowIndex}`}>
                            {row.map((cell, cellIndex) => (
                              <td key={`${cell}-${cellIndex}`}>
                                <span><InlineText>{cell}</InlineText></span>
                                {cellIndex === 0 && command ? (
                                  <button
                                    className="copy-command"
                                    type="button"
                                    onClick={() => copyCommand(command)}
                                    aria-label={`Copy ${command}`}
                                    title="Copy command"
                                  >
                                    {copied === command ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
                                  </button>
                                ) : null}
                              </td>
                            ))}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              );
            })}
          </section>
        )) : (
          <div className="cheat-empty">
            <h2>No matching commands</h2>
            <p>Try a broader term, command name, or category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
