"use client";

import { useState } from "react";

type ProjectTechnologiesProps = {
  id: string;
  label: string;
  technologies: string[];
  previewTechnologies?: string[];
};

export function ProjectTechnologies({ id, label, technologies, previewTechnologies = technologies }: ProjectTechnologiesProps) {
  const [expanded, setExpanded] = useState(false);
  const remainingTechnologies = technologies.filter((technology) => !previewTechnologies.includes(technology));
  const visibleTechnologies = expanded ? [...previewTechnologies, ...remainingTechnologies] : previewTechnologies;

  return (
    <ul className="tag-list" id={id} aria-label={label}>
      {visibleTechnologies.map((technology) => <li key={technology}>{technology}</li>)}
      {remainingTechnologies.length > 0 && (
        <li className="tag-toggle">
          <button type="button" aria-expanded={expanded} aria-controls={id} onClick={() => setExpanded(!expanded)}>
            {expanded ? "Show less" : `+${remainingTechnologies.length} more`}
          </button>
        </li>
      )}
    </ul>
  );
}
