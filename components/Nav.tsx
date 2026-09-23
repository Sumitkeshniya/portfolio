"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/data/portfolio";
import ThemeToggle from "./ThemeToggle";

const tabs = [
  { id: "about", file: "about.md" },
  { id: "systems", file: "systems.svg" },
  { id: "stack", file: "package.json" },
  { id: "work", file: "git.log" },
  { id: "projects", file: "projects/" },
  { id: "contact", file: "contact.sh" },
];

export default function Nav() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const els = tabs
      .map((t) => document.getElementById(t.id))
      .filter((e): e is HTMLElement => !!e);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-bg/80 backdrop-blur-md">
      <nav aria-label="Primary" className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-mono text-sm font-semibold text-text">
          ~/{profile.handle}
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {tabs.map((t) => (
            <li key={t.id} className="relative">
              <a
                href={`#${t.id}`}
                aria-current={active === t.id ? "true" : undefined}
                className={`block px-3 py-4 font-mono text-[13px] transition-colors ${
                  active === t.id ? "text-text" : "text-muted hover:text-text"
                }`}
              >
                {t.file}
              </a>
              {active === t.id && (
                <motion.span layoutId="tab-underline" className="absolute inset-x-2 bottom-0 h-0.5 rounded-full bg-amber" />
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={`mailto:${profile.email}`}
            className="hidden rounded-md bg-text px-3.5 py-1.5 text-sm font-medium text-bg transition hover:opacity-90 sm:block"
          >
            Email me
          </a>
          <button
            className="grid h-9 w-9 place-items-center rounded-md border border-line text-muted md:hidden"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-line bg-bg md:hidden"
          >
            {tabs.map((t) => (
              <li key={t.id}>
                <a
                  href={`#${t.id}`}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-3 font-mono text-sm text-muted hover:text-text"
                >
                  {t.file}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
