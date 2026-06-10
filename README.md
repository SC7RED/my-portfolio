<div align="center">

# Dennis Delenyan — Portfolio

My personal corner of the internet — who I am, what I'm studying, and what I'm building.

**[Check it out live →](https://dennis.delenyan.com)**

<br/>

![React](https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white)

<br/>

![Portfolio screenshot](docs/screenshot.png)

</div>

## ✨ Features

- **Dark & light mode** — defaults to dark (the way it should be), and remembers your choice
- **Self-updating project cards** — the projects section pulls repo info (name, description, language) straight from the GitHub API, so the cards stay current when my repos change
- **Working contact form** — name/email/message with proper validation, delivered through Formspree
- **Subtle animations** — smooth fade-ins on scroll, a soft lift on the project cards, and a purple glow on the GitHub button that I'm a little too proud of
- **Link previews that don't suck** — proper meta + Open Graph tags, so sharing the link shows an actual card

## 🛠 Tech stack

| | |
| --- | --- |
| Framework | React 19 + TypeScript |
| Build tool | Vite |
| Styling | Tailwind CSS v4 with CSS-variable design tokens |
| Animation | Framer Motion |
| Form backend | Formspree |
| Hosting | Vercel — every push to `main` auto-deploys |

## 🚀 Run it locally

```bash
git clone https://github.com/SC7RED/my-portfolio.git
cd my-portfolio
npm install
npm run dev
```

`npm run build` type-checks and produces the production build.

## 📌 How I add projects

Everything personal (links, email, the project list) lives in one file:
[`src/scripts/site.ts`](src/scripts/site.ts). Adding a project card is one entry in
the `projects` array — give it `repo: "owner/name"` and it fetches the details from
GitHub by itself, or fill the fields in manually for anything that isn't on GitHub.

---

<div align="center">

© 2026 Dennis Delenyan · [LinkedIn](https://www.linkedin.com/in/dennis-delenyan/) · [GitHub](https://github.com/SC7RED)

</div>
