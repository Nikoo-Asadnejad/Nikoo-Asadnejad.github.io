import type { IconType } from "react-icons";
import {
  SiDotnet,
  SiDocker,
  SiElasticsearch,
  SiGit,
  SiGo,
  SiJavascript,
  SiKubernetes,
  SiLinux,
  SiMongodb,
  SiPython,
  SiRabbitmq,
  SiRedis,
} from "react-icons/si";
import { VscCode, VscDatabase } from "react-icons/vsc";
import { technologyHighlights } from "@/content/portfolio";

const icons: Record<(typeof technologyHighlights)[number]["icon"], IconType> = {
  csharp: VscCode,
  dotnet: SiDotnet,
  sqlserver: VscDatabase,
  entityframework: VscDatabase,
  rabbitmq: SiRabbitmq,
  redis: SiRedis,
  mongodb: SiMongodb,
  elasticsearch: SiElasticsearch,
  docker: SiDocker,
  kubernetes: SiKubernetes,
  python: SiPython,
  go: SiGo,
  git: SiGit,
  javascript: SiJavascript,
  linux: SiLinux,
};

export function TechnologyGrid() {
  const rows = Array.from({ length: 3 }, (_, rowIndex) =>
    technologyHighlights.slice(rowIndex * 5, rowIndex * 5 + 5),
  );

  return (
    <div className="technology-grid">
      {rows.map((row, rowIndex) => (
        <div
          className={`technology-marquee ${rowIndex % 2 === 0 ? "technology-row-left" : "technology-row-right"}`}
          key={rowIndex}
        >
          <div className="technology-track">
            {[0, 1].map((copyIndex) => (
              <div className="technology-set" aria-hidden={copyIndex === 1 ? "true" : undefined} key={copyIndex}>
                {row.map((technology) => {
                  const Icon = icons[technology.icon];
                  return (
                    <div className="technology-item" key={`${copyIndex}-${technology.name}`}>
                      <Icon aria-hidden="true" />
                      <span>{technology.name}</span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
