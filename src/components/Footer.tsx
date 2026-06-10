import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { site } from "../scripts/site";

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452z" />
    </svg>
  );
}

interface FooterLink {
  label: string;
  href: string;
  icon: ReactNode;
}

export function Footer() {
  const links: FooterLink[] = [
    { label: "GitHub", href: site.githubUrl, icon: <GitHubIcon /> },
    { label: "Email", href: `mailto:${site.email}`, icon: <MailIcon /> },
  ];
  if (site.linkedinUrl) {
    links.push({ label: "LinkedIn", href: site.linkedinUrl, icon: <LinkedInIcon /> });
  }

  return (
    <footer className="footer-hairline relative border-t border-line pb-11 pt-[clamp(56px,8vw,90px)]">
      <div className="container-site flex flex-col items-center gap-7 text-center">
        <Reveal>
          <h2 className="text-[clamp(26px,3.6vw,38px)] font-bold tracking-[-0.02em]">
            Let's <span className="gradient-text">get in touch</span>.
          </h2>
        </Reveal>

        <Reveal delay={0.08} className="flex flex-wrap justify-center gap-3.5 max-[520px]:w-full max-[520px]:flex-col">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flink max-[520px]:justify-center"
              {...(link.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {link.icon}
              <span>{link.label}</span>
            </a>
          ))}
        </Reveal>

        <p className="mt-2 text-xs uppercase tracking-[0.18em] text-faint">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
