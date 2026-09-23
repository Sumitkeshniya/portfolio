"use client";

import { useState } from "react";
import { profile } from "@/data/portfolio";
import { Heading, Section } from "./Section";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  return (
    <Section id="contact">
      <div className="rounded-2xl border border-line bg-panel px-6 py-14 md:px-14 md:py-20">
        <Heading>Looking for a backend engineer? Let us talk.</Heading>
        <p className="mt-6 max-w-[52ch] text-muted">
          I am open to backend and full-stack roles where I can own services end to end. Email is the fastest way to
          reach me and I usually reply within a day.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-md bg-text px-6 py-3 font-medium text-bg transition hover:opacity-90"
          >
            {profile.email}
          </a>
          <button
            onClick={copy}
            className="rounded-md border border-line px-5 py-3 font-medium transition hover:border-muted"
          >
            {copied ? "Copied" : "Copy email"}
          </button>
          <span className="sr-only" aria-live="polite">
            {copied ? "Email copied to clipboard" : ""}
          </span>
        </div>

        <div className="mt-8 flex gap-6 text-sm text-muted">
          <a className="underline-offset-4 hover:text-text hover:underline" href={profile.github}>
            GitHub
          </a>
          <a className="underline-offset-4 hover:text-text hover:underline" href={profile.linkedin}>
            LinkedIn
          </a>
          <a className="underline-offset-4 hover:text-text hover:underline" href={profile.resumeUrl}>
            Résumé
          </a>
        </div>
      </div>
    </Section>
  );
}
