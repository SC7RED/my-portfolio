/** All personal/site data lives here — components read from this file only. */
export const site = {
  name: "Dennis Delenyan",
  firstName: "Dennis",
  lastName: "Delenyan",
  role: "Computer Engineering Student",
  email: "dennis.delenyan@icloud.com",
  githubUser: "SC7RED",
  githubUrl: "https://github.com/SC7RED",
  /** Formspree form ID — the code after /f/ in the form's endpoint URL. */
  formspreeId: "mkoavwkk",
  linkedinUrl: "https://www.linkedin.com/in/dennis-delenyan/",
};

export interface ProjectEntry {
  /**
   * "owner/repo" — when set, the card pulls name, description, language and
   * link live from the GitHub API; the fields below act as fallbacks while
   * loading or if the API is unreachable.
   */
  repo?: string;
  title: string;
  description: string;
  tags: string[];
  /** Where the card links. Defaults to the GitHub repo when `repo` is set. */
  href?: string;
}

/**
 * Add a project = add an entry here. Order is display order.
 * Static example:
 *   { title: "My App", description: "What it does.", tags: ["React"], href: "https://…" }
 */
export const projects: ProjectEntry[] = [
  {
    repo: "SC7RED/lappal",
    title: "lappal",
    description:
      "An interactive audiovisual keyboard — every keypress fires a neon animation and a harmonized note. Built with React, p5.js, and Tone.js.",
    tags: ["React", "p5.js", "Tone.js"],
    href: "https://dennis.delenyan.com/lappal/",
  },
  {
    repo: "SC7RED/school-cellular-study",
    title: "School Cellular Study",
    description:
      "Designing and testing a passive Yagi-Uda antenna to improve LTE reception inside my school — RF measurements, tower analysis, and antenna construction.",
    tags: ["RF", "Antenna Design", "LTE"],
  },
];
