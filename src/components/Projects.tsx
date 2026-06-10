import { Reveal } from "./Reveal";
import { ProjectCard } from "./ProjectCard";
import { projects, site } from "../scripts/site";

export function Projects() {
  return (
    <section id="projects" className="py-[clamp(80px,12vw,140px)]">
      <div className="container-site">
        <Reveal>
          <p className="section-label">Projects</p>
          <h2 className="mb-7 text-[clamp(30px,4.4vw,46px)] font-bold tracking-[-0.02em]">
            Things I've built
          </h2>
        </Reveal>

        <div className="mt-3.5 grid gap-[22px] md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.repo ?? project.title} delay={index * 0.08} className="h-full">
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}

          {/* Ghost card keeps the grid balanced until more projects land. */}
          <Reveal delay={projects.length * 0.08} className="h-full">
            <a
              href={site.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full min-h-[220px] flex-col items-center justify-center gap-2.5 rounded-2xl border border-dashed border-line px-7 py-7 text-center no-underline transition-colors hover:border-line-strong"
            >
              <span className="font-heading text-lg font-bold text-dim transition-colors group-hover:text-fg">
                More in the works
              </span>
              <span className="text-sm text-faint">
                Browse my GitHub for everything else I'm building.
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
