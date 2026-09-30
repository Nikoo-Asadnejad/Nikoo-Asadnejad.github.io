import fs from "node:fs";
import path from "node:path";
import type { CheatSection, CheatSheet } from "@/content/cheatSheetTypes";

type CheatSheetSource = Omit<CheatSheet, "sections" | "commandCount"> & {
  filename: string;
};

const sources: CheatSheetSource[] = [
  {
    slug: "linux",
    title: "Linux Commands Cheat Sheet",
    shortTitle: "Linux",
    description: "A field guide to navigation, permissions, processes, systemd, networking, SSH, monitoring, the kernel, and boot management.",
    repositoryUrl: "https://github.com/Nikoo-Asadnejad/Linux-Commands-Cheat-Sheet",
    sourceCommit: "1d3c081578637b107b5c6c427b034066d500e19f",
    accent: "cyan",
    filename: "linux.md",
  },
  {
    slug: "git",
    title: "Git Commands Cheat Sheet",
    shortTitle: "Git",
    description: "Everyday and advanced Git commands for commits, branches, remotes, worktrees, recovery, configuration, and maintenance.",
    repositoryUrl: "https://github.com/Nikoo-Asadnejad/Git_Comands_Cheat_Sheet",
    sourceCommit: "240a4a791556420f6a773cfd79e2cb93cf7232f8",
    accent: "magenta",
    filename: "git.md",
  },
  {
    slug: "kubernetes",
    title: "Kubernetes Commands Cheat Sheet",
    shortTitle: "Kubernetes",
    description: "Quick kubectl and Helm references for pods, deployments, services, configuration, storage, debugging, networking, and RBAC.",
    repositoryUrl: "https://github.com/Nikoo-Asadnejad/Kubernetes-Cheat-Sheet",
    sourceCommit: "ea5e3f5d54b5210836bf65cb3ff0966400298fcd",
    accent: "blue",
    filename: "kubernetes.md",
  },
  {
    slug: "docker",
    title: "Docker Commands Cheat Sheet",
    shortTitle: "Docker",
    description: "Practical Docker commands for images, containers, networks, volumes, Compose, Buildx, registries, monitoring, and Swarm.",
    repositoryUrl: "https://github.com/Nikoo-Asadnejad/Docker-Commands-Cheat-Sheet",
    sourceCommit: "90d2e4dddba24e70f555c3c095c1e43e1ee93142",
    accent: "green",
    filename: "docker.md",
  },
];

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function cleanText(value: string) {
  return value
    .replace(/^<p>|<\/p>$/g, "")
    .replace(/<br\s*\/?>/gi, " ")
    .trim();
}

function splitTableRow(line: string) {
  const cells: string[] = [];
  let current = "";
  let inCode = false;

  for (const character of line.trim()) {
    if (character === "`") inCode = !inCode;
    if (character === "|" && !inCode) {
      if (current.trim()) cells.push(cleanText(current));
      current = "";
    } else {
      current += character;
    }
  }

  if (current.trim()) cells.push(cleanText(current));
  return cells;
}

function isTableSeparator(line: string) {
  const cells = splitTableRow(line);
  return cells.length > 0 && cells.every((cell) => /^:?-{3,}:?$/.test(cell));
}

function isStructuralLine(line: string) {
  const trimmed = line.trim();
  return (
    !trimmed ||
    /^#{1,6}\s+/.test(trimmed) ||
    /^```/.test(trimmed) ||
    /^[-*]\s+/.test(trimmed) ||
    /^_{3,}$/.test(trimmed) ||
    /^-{3,}$/.test(trimmed) ||
    trimmed.startsWith("|")
  );
}

function parseMarkdown(markdown: string) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const sections: CheatSection[] = [];
  let currentSection: CheatSection | undefined;
  let sawDocumentTitle = false;
  let skippingTableOfContents = false;
  let index = 0;

  while (index < lines.length) {
    const line = lines[index].trim();
    const heading = line.match(/^(#{1,6})\s+(.+)$/);

    if (heading) {
      const level = heading[1].length;
      const title = cleanText(heading[2]).replace(/:$/, "");

      if (!sawDocumentTitle) {
        sawDocumentTitle = true;
        index += 1;
        continue;
      }

      if (title.toLowerCase() === "table of contents") {
        skippingTableOfContents = true;
        currentSection = undefined;
        index += 1;
        continue;
      }

      if (level <= 2) {
        skippingTableOfContents = false;
        currentSection = { id: slugify(title), title, blocks: [] };
        sections.push(currentSection);
      } else if (currentSection && !skippingTableOfContents) {
        currentSection.blocks.push({ type: "subheading", title, level });
      }

      index += 1;
      continue;
    }

    if (skippingTableOfContents || !currentSection || !line || /^_{3,}$/.test(line) || /^-{3,}$/.test(line)) {
      index += 1;
      continue;
    }

    if (line.startsWith("```")) {
      const language = line.slice(3).trim();
      const code: string[] = [];
      index += 1;
      while (index < lines.length && !lines[index].trim().startsWith("```")) {
        code.push(lines[index]);
        index += 1;
      }
      currentSection.blocks.push({ type: "code", language, code: code.join("\n").trimEnd() });
      index += 1;
      continue;
    }

    if (line.startsWith("|") && index + 1 < lines.length && isTableSeparator(lines[index + 1])) {
      const headers = splitTableRow(lines[index]);
      const rows: string[][] = [];
      index += 2;
      while (index < lines.length && lines[index].trim().startsWith("|")) {
        const row = splitTableRow(lines[index]);
        const containsFence = row.some((cell) => cell.startsWith("```"));
        if (!containsFence && row.length === headers.length) {
          rows.push(row);
        } else if (!containsFence && row.length === 1 && rows.length && headers.length === 2) {
          rows[rows.length - 1][1] += ` \`${row[0]}\``;
        }
        index += 1;
      }
      currentSection.blocks.push({ type: "table", headers, rows });
      continue;
    }

    if (/^[-*]\s+/.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^[-*]\s+/.test(lines[index].trim())) {
        items.push(cleanText(lines[index].trim().replace(/^[-*]\s+/, "")));
        index += 1;
      }
      currentSection.blocks.push({ type: "list", items });
      continue;
    }

    const paragraph: string[] = [cleanText(line)];
    index += 1;
    while (index < lines.length && !isStructuralLine(lines[index])) {
      paragraph.push(cleanText(lines[index]));
      index += 1;
    }
    currentSection.blocks.push({ type: "paragraph", text: paragraph.join(" ") });
  }

  return sections;
}

function readSource(source: CheatSheetSource): CheatSheet {
  const markdownPath = path.join(process.cwd(), "src", "content", "cheat-sheets", source.filename);
  const sections = parseMarkdown(fs.readFileSync(markdownPath, "utf8"));
  const commandCount = sections.reduce(
    (total, section) => total + section.blocks.reduce((subtotal, block) => subtotal + (block.type === "table" ? block.rows.length : 0), 0),
    0,
  );

  const { filename: _filename, ...metadata } = source;
  void _filename;
  return { ...metadata, sections, commandCount };
}

export function getCheatSheets() {
  return sources.map(readSource);
}

export function getCheatSheet(slug: string) {
  const source = sources.find((item) => item.slug === slug);
  return source ? readSource(source) : undefined;
}

export function getCheatSheetSlugs() {
  return sources.map(({ slug }) => slug);
}
