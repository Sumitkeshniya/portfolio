"use client";

import { motion } from "framer-motion";
import { featured, projects } from "@/data/portfolio";
import { Heading, Section } from "./Section";

const series = [
  { name: "AWS", color: "amber", pts: [12, 14, 13, 18, 16, 21, 19, 24, 22, 27], count: "142" },
  { name: "Azure", color: "sky", pts: [8, 9, 12, 10, 13, 12, 15, 14, 17, 16], count: "96" },
  { name: "GCP", color: "mint", pts: [5, 7, 6, 8, 11, 9, 12, 13, 12, 15], count: "61" },
];

function Spark({ pts, color }: { pts: number[]; color: string }) {
  const w = 160;
  const h = 36;
  const max = Math.max(...pts);
  const min = Math.min(...pts);
  const d = pts
    .map((p, i) => {
      const x = ((i / (pts.length - 1)) * w).toFixed(1);
      const y = (h - ((p - min) / (max - min || 1)) * (h - 6) - 3).toFixed(1);
      return `${i === 0 ? "M" : "L"}${x},${y}`;
    })
    .join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-9 w-40" aria-hidden>
      <motion.path
        d={d}
        fill="none"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={`rgb(var(--${color}))`}
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      />
    </svg>
  );
}

export default function Projects() {
  return (
    <Section id="projects">
      <Heading>Things I have built.</Heading>

      {/* Featured case study */}
      <article className="mt-14 overflow-hidden rounded-xl border border-line bg-panel">
        <div className="flex items-center justify-between border-b border-line px-5 py-3 font-mono text-xs text-muted">
          <span>~/projects/{featured.name}</span>
          <span className="flex gap-4">
            {featured.github && (
              <a className="hover:text-text" href={featured.github}>
                source
              </a>
            )}
            {featured.live && (
              <a className="hover:text-text" href={featured.live}>
                live demo
              </a>
            )}
          </span>
        </div>

        <div className="grid gap-10 p-6 md:p-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h3 className="text-3xl font-semibold tracking-tight">{featured.title}</h3>
            <p className="mt-1 text-lg text-muted">{featured.summary}</p>

            <dl className="mt-7 space-y-5">
              {[
                ["Problem", featured.problem],
                ["What I built", featured.built],
                ["Result", featured.result],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="font-semibold">{k}</dt>
                  <dd className="max-w-[58ch] text-muted">{v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 flex flex-wrap gap-2">
              {featured.stack.map((t) => (
                <span key={t} className="rounded-md border border-line px-2 py-0.5 font-mono text-xs text-muted">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="self-center rounded-lg border border-line bg-bg p-5">
            <p className="font-mono text-xs text-muted">resources by provider (illustrative)</p>
            <ul className="mt-4 space-y-4">
              {series.map((s) => (
                <li key={s.name} className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold">{s.name}</p>
                    <p className="font-mono text-xs text-muted">{s.count} resources</p>
                  </div>
                  <Spark pts={s.pts} color={s.color} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>

      {/* Other work */}
      <ul className="mt-6 divide-y divide-line border-y border-line">
        {projects.map((p) => (
          <li key={p.name}>
            <a
              href={p.href}
              className="group grid items-baseline gap-2 px-2 py-6 transition-colors hover:bg-panel md:grid-cols-[13rem_1fr_auto] md:gap-8"
            >
              <span className="font-mono text-base text-sky">{p.name}</span>
              <span>
                <span className="block max-w-[60ch] text-muted">{p.description}</span>
                <span className="mt-2 block font-mono text-xs text-muted/80">{p.stack.join(", ")}</span>
              </span>
              <span className="font-mono text-sm text-muted transition-transform group-hover:translate-x-1 group-hover:text-text">
                view repo
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
