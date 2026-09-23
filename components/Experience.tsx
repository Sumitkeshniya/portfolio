"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { experience } from "@/data/portfolio";
import { Heading, Section } from "./Section";

export default function Experience() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 65%", "end 55%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  return (
    <Section id="work">
      <Heading>Where I have shipped code.</Heading>

      <ol ref={ref} className="relative mt-14 space-y-14 pl-9">
        <span aria-hidden className="absolute bottom-2 left-[7px] top-2 w-px bg-line" />
        <motion.span
          aria-hidden
          style={{ scaleY, transformOrigin: "top" }}
          className="absolute bottom-2 left-[7px] top-2 w-px bg-amber"
        />

        {experience.map((e) => (
          <li key={e.hash} className="relative">
            <span
              aria-hidden
              className={`absolute -left-9 top-1.5 h-[15px] w-[15px] rounded-full border-2 bg-bg ${
                e.head ? "border-mint" : "border-amber"
              }`}
            />
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[13px]">
              <span className="text-amber">commit {e.hash}</span>
              {e.head && <span className="rounded border border-mint/40 px-1.5 text-mint">HEAD -&gt; main</span>}
              <span className="text-muted">{e.period}</span>
            </div>

            <h3 className="mt-2 text-2xl font-semibold tracking-tight">
              {e.role}
              <span className="text-muted"> at {e.company}</span>
            </h3>

            <ul className="mt-3 max-w-[64ch] space-y-2 text-muted">
              {e.points.map((p) => (
                <li key={p} className="flex gap-3">
                  <span aria-hidden className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-muted" />
                  {p}
                </li>
              ))}
            </ul>

            {e.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {e.tags.map((t) => (
                  <span key={t} className="rounded-md border border-line px-2 py-0.5 font-mono text-xs text-muted">
                    {t}
                  </span>
                ))}
              </div>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
