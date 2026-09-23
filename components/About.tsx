"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { metrics, profile } from "@/data/portfolio";
import { Heading, Section } from "./Section";

function CountUp({ to, decimals, suffix }: { to: number; decimals: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useReducedMotion();
  const [v, setV] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) return setV(to);
    const controls = animate(0, to, { duration: 1.6, ease: "easeOut", onUpdate: setV });
    return () => controls.stop();
  }, [inView, to, reduce]);

  return (
    <span ref={ref} className="tabular-nums">
      {v.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <Section id="about">
      <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <Heading>Engineer first, framework second.</Heading>
          <div className="mt-8 max-w-[60ch] space-y-5 text-muted">
            {profile.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        <dl className="self-end">
          {metrics.map((m) => (
            <div key={m.label} className="flex items-baseline gap-6 border-t border-line py-5">
              <dt className="w-32 shrink-0 text-4xl font-bold tracking-tight text-amber md:text-5xl">
                <CountUp to={m.value} decimals={m.decimals} suffix={m.suffix} />
              </dt>
              <dd className="text-muted">{m.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
