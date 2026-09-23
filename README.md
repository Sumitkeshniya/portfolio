# Software Engineer Portfolio

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

## Make it yours (5 minutes)

1. Open **`data/portfolio.ts`**. Every name, number, project, job and link on the site is in this one file.
2. Replace `public/resume.pdf` with your own resume (keep the file name).
3. Optional: change colours in `app/globals.css` (`:root` for night, `[data-theme="light"]` for day).

Replace all placeholder metrics (years, uptime, endpoints) with numbers you can defend in an interview.

## What is on the page

| Section | What it shows |
| --- | --- |
| Hero | Terminal that types a `curl` request and prints your profile as JSON |
| about.md | Short bio and animated count-up metrics |
| systems.svg | Animated request flow: gateway, services, Postgres, Redis, Kafka |
| package.json | Your skills as a dependency file |
| git.log | Experience as commits; the timeline draws as you scroll |
| projects/ | One featured case study with animated charts, plus a compact repo list |
| contact.sh | Email, copy button, GitHub, LinkedIn, resume |

Also included: day/night theme toggle, cursor spotlight, keyboard focus styles, `prefers-reduced-motion` support, responsive layout down to mobile, SEO metadata and JSON-LD.

## Deploy

Push to GitHub and import the repo on [vercel.com](https://vercel.com). No settings needed.
