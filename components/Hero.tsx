"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { profile } from "@/data/portfolio";
import Terminal from "./Terminal";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Hero() {
  const reduce = useReducedMotion();
  const [first, ...rest] = profile.name.split(" ");

  return (
    <section id="top" className="relative z-10 flex min-h-[100svh] items-center px-6 pb-16 pt-28">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1fr_1.05fr]">
        <motion.div variants={container} initial={reduce ? false : "hidden"} animate="show">
          <motion.p
            variants={item}
            className="inline-flex items-center gap-2.5 rounded-full border border-line bg-panel/70 px-3.5 py-1.5 text-sm text-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
            </span>
            {profile.availability}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-7 text-[length:clamp(2.9rem,7.5vw,5.75rem)] font-bold leading-[0.95] tracking-[-0.035em]"
          >
            {first}
            <br />
            {rest.join(" ")}
          </motion.h1>

          <motion.p variants={item} className="mt-6 text-2xl font-medium">
            {profile.role}
          </motion.p>
          <motion.p variants={item} className="mt-3 max-w-[52ch] text-muted">
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="rounded-md bg-text px-5 py-2.5 font-medium text-bg transition hover:opacity-90"
            >
              View projects
            </a>
            <a
              href={profile.resumeUrl}
              className="rounded-md border border-line px-5 py-2.5 font-medium transition hover:border-muted"
            >
              Download résumé
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex gap-6 text-sm text-muted">
            <a className="underline-offset-4 hover:text-text hover:underline" href={profile.github}>
              GitHub
            </a>
            <a className="underline-offset-4 hover:text-text hover:underline" href={profile.linkedin}>
              LinkedIn
            </a>
            <a className="underline-offset-4 hover:text-text hover:underline" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </motion.div>
        </motion.div>

        <Terminal />
      </div>
    </section>
  );
}
