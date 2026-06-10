import { Reveal } from "./Reveal";

const FACTS = [
  { label: "Studying", value: "Computer Engineering" },
  { label: "Focus", value: "Embedded & Full-Stack" },
  { label: "Currently", value: "Open to internships" },
];

export function About() {
  return (
    <section id="about" className="py-[clamp(80px,12vw,140px)]">
      <div className="container-site">
        <Reveal>
          <p className="section-label">About</p>
          <h2 className="mb-7 text-[clamp(30px,4.4vw,46px)] font-bold tracking-[-0.02em]">
            A little about me
          </h2>
        </Reveal>

        <div className="grid items-start gap-[clamp(32px,6vw,80px)] md:grid-cols-[1.6fr_1fr]">
          <Reveal className="flex flex-col gap-5 text-[clamp(17px,1.9vw,20px)] text-dim">
            <p>
              I'm Dennis — a <strong className="font-semibold text-fg">computer engineering student</strong>{" "}
              who likes working where hardware meets software. I spend most of my time building things:
              embedded projects, web apps, and tools that solve problems I actually run into.
            </p>
            <p>
              Right now I'm focused on sharpening my skills in{" "}
              <strong className="font-semibold text-fg">systems programming and full-stack development</strong>,
              and I'm always looking for opportunities to learn by shipping real projects.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="border-t border-line">
            {FACTS.map((fact) => (
              <div key={fact.label} className="flex flex-col gap-0.5 border-b border-line py-4">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-faint">
                  {fact.label}
                </span>
                <span className="font-medium text-fg">{fact.value}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
