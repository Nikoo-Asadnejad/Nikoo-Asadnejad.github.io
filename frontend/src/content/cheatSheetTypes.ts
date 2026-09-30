export type CheatTableBlock = {
  type: "table";
  headers: string[];
  rows: string[][];
};

export type CheatBlock =
  | CheatTableBlock
  | { type: "paragraph"; text: string }
  | { type: "subheading"; title: string; level: number }
  | { type: "list"; items: string[] }
  | { type: "code"; language: string; code: string };

export type CheatSection = {
  id: string;
  title: string;
  blocks: CheatBlock[];
};

export type CheatSheet = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  repositoryUrl: string;
  sourceCommit: string;
  accent: string;
  sections: CheatSection[];
  commandCount: number;
};
