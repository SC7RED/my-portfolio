import type { PointerEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useGitHubRepo } from "../scripts/useGitHubRepo";
import type { ProjectEntry } from "../scripts/site";

const EASE: [number, number, number, number] = [0.2, 0.6, 0.2, 1];

/** "school-cellular-study" → "School Cellular Study" */
function titleFromRepoName(name: string): string {
  return name
    .split(/[-_]/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

interface ProjectCardProps {
  project: ProjectEntry;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const reduceMotion = useReducedMotion();
  const repoData = useGitHubRepo(project.repo);

  // Live GitHub data wins; the entry's own fields are the fallback.
  const title = repoData?.name ? titleFromRepoName(repoData.name) : project.title;
  const description = repoData?.description || project.description;
  const href =
    repoData?.htmlUrl ??
    project.href ??
    (project.repo ? `https://github.com/${project.repo}` : undefined);
  const tags = [
    ...new Set([...(repoData?.language ? [repoData.language] : []), ...project.tags]),
  ];

  const trackPointer = (event: PointerEvent<HTMLAnchorElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onPointerMove={trackPointer}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      transition={{ type: "tween", duration: 0.3, ease: EASE }}
      className="card-lift group relative flex h-full flex-col gap-3.5 overflow-hidden rounded-2xl border border-line bg-surface px-7 py-7 no-underline"
    >
      <span
        aria-hidden
        className="spot-gradient pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="relative flex items-center justify-between gap-3">
        <span className="text-[13px] font-semibold tracking-[0.12em] text-faint">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="grid h-[34px] w-[34px] place-items-center rounded-full border border-line text-dim transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17 17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </span>
      </div>

      <h3 className="relative text-[22px] font-bold tracking-[-0.01em]">{title}</h3>
      <p className="relative flex-1 text-[15px] text-dim">{description}</p>

      <div className="relative mt-1 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="chip">
            {tag}
          </span>
        ))}
      </div>
    </motion.a>
  );
}
