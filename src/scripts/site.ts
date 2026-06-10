/** All personal/site data lives here — components read from this file only. */
export const site = {
  name: "Dennis Delenyan",
  firstName: "Dennis",
  lastName: "Delenyan",
  role: "Computer Engineering Student",
  email: "dennis.delenyan@icloud.com",
  githubUser: "SC7RED",
  githubUrl: "https://github.com/SC7RED",
  /** TODO: paste your LinkedIn profile URL here to show the LinkedIn link in the footer. */
  linkedinUrl: "",
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
    repo: "SC7RED/school-cellular-study",
    title: "School Cellular Study",
    description:
      "A study of cellular network behavior at school — code and findings live in the GitHub repo.",
    tags: ["C++"],
  },
];
