"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { principles } from "@/data/portfolio";
import { Heading, Section } from "./Section";

const T = 6.4; // seconds per request cycle

type NodeId = "client" | "gateway" | "auth" | "orders" | "notify" | "postgres" | "redis" | "kafka";

const nodes: { id: NodeId; label: string; x: number; y: number; w: number; color: string }[] = [
  { id: "client", label: "client", x: 20, y: 155, w: 100, color: "mint" },
  { id: "gateway", label: "api-gateway", x: 190, y: 155, w: 110, color: "amber" },
  { id: "auth", label: "auth-service", x: 360, y: 45, w: 120, color: "lilac" },
  { id: "orders", label: "order-service", x: 360, y: 155, w: 120, color: "sky" },
  { id: "notify", label: "notify-service", x: 360, y: 265, w: 120, color: "lilac" },
  { id: "postgres", label: "postgres", x: 570, y: 75, w: 100, color: "sky" },
  { id: "redis", label: "redis", x: 570, y: 155, w: 100, color: "coral" },
  { id: "kafka", label: "kafka", x: 570, y: 265, w: 100, color: "amber" },
];

const paths = [
  { id: "a", d: "M120,165 H190", s: 0.2, e: 0.9, color: "mint" },
  { id: "b", d: "M300,180 C330,180 330,70 360,70", s: 0.9, e: 1.6, color: "lilac" },
  { id: "c", d: "M300,180 H360", s: 1.6, e: 2.1, color: "sky" },
  { id: "d", d: "M480,180 C525,180 525,100 570,100", s: 2.1, e: 2.7, color: "sky" },
  { id: "e", d: "M480,180 H570", s: 2.1, e: 2.7, color: "coral" },
  { id: "f", d: "M480,180 C525,180 525,280 570,280", s: 2.7, e: 3.3, color: "amber" },
  { id: "g", d: "M570,300 H480", s: 3.3, e: 4.0, color: "lilac" },
  { id: "r", d: "M190,195 H120", s: 4.4, e: 5.1, color: "mint" },
];

const steps: { t: number; label: string; nodes: NodeId[] }[] = [
  { t: 0.2, label: "POST /api/orders", nodes: ["client", "gateway"] },
  { t: 0.9, label: "JWT verified by auth-service", nodes: ["gateway", "auth"] },
  { t: 1.6, label: "Routed to order-service", nodes: ["gateway", "orders"] },
  { t: 2.1, label: "Row written to Postgres, cache updated in Redis", nodes: ["orders", "postgres", "redis"] },
  { t: 2.7, label: "order.created published to Kafka", nodes: ["orders", "kafka"] },
  { t: 3.3, label: "notify-service consumes the event", nodes: ["kafka", "notify"] },
  { t: 4.4, label: "201 Created returned in 84 ms", nodes: ["gateway", "client"] },
];

export default function Systems() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-15% 0px" });
  const reduce = !!useReducedMotion();
  const [step, setStep] = useState(-1);

  useEffect(() => {
    if (!inView || reduce) {
      setStep(-1);
      return;
    }
    let timers: number[] = [];
    const run = () => {
      steps.forEach((s, i) => timers.push(window.setTimeout(() => setStep(i), s.t * 1000)));
      timers.push(window.setTimeout(() => setStep(-1), 5300));
    };
    run();
    const loop = window.setInterval(() => {
      timers.forEach(clearTimeout);
      timers = [];
      run();
    }, T * 1000);
    return () => {
      window.clearInterval(loop);
      timers.forEach(clearTimeout);
    };
  }, [inView, reduce]);

  const activeNodes = step >= 0 ? steps[step].nodes : [];
  const caption = reduce ? "Request lifecycle (animation paused by your motion settings)" : step >= 0 ? steps[step].label : "Waiting for the next request";

  return (
    <Section id="systems">
      <Heading>How a request travels through the systems I build.</Heading>

      <div className="mt-14 grid items-start gap-10 lg:grid-cols-[1fr_1.7fr]">
        <ul>
          {principles.map((p) => (
            <li key={p.title} className="border-t border-line py-5">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-1.5 max-w-[46ch] text-muted">{p.body}</p>
            </li>
          ))}
        </ul>

        <div ref={ref} className="overflow-hidden rounded-xl border border-line bg-panel">
          <div className="flex items-center justify-between border-b border-line px-4 py-3 font-mono text-xs text-muted">
            <span>request lifecycle</span>
            <span className="text-mint">live</span>
          </div>

          <div className="overflow-x-auto">
            <svg
              viewBox="0 0 700 340"
              role="img"
              aria-label="Diagram: a client request passes through an API gateway to auth, order and notification services, backed by Postgres, Redis and Kafka."
              className="min-w-[640px] w-full"
            >
              {paths.map((p) => (
                <path key={p.id} d={p.d} fill="none" stroke="rgb(var(--line))" strokeWidth="1.5" />
              ))}

              {nodes.map((n) => {
                const on = activeNodes.includes(n.id);
                return (
                  <g key={n.id}>
                    <rect
                      x={n.x}
                      y={n.y}
                      width={n.w}
                      height={50}
                      rx={10}
                      style={{
                        fill: on ? `rgb(var(--${n.color}) / 0.16)` : "rgb(var(--bg))",
                        stroke: on ? `rgb(var(--${n.color}))` : "rgb(var(--line))",
                        strokeWidth: on ? 2 : 1.5,
                        transition: "all 0.3s ease",
                      }}
                    />
                    <text
                      x={n.x + n.w / 2}
                      y={n.y + 30}
                      textAnchor="middle"
                      fontSize="12"
                      fontFamily="'JetBrains Mono', monospace"
                      style={{ fill: "rgb(var(--text))" }}
                    >
                      {n.label}
                    </text>
                  </g>
                );
              })}

              {inView &&
                !reduce &&
                paths.map((p) => (
                  <circle
                    key={p.id}
                    r="4.5"
                    opacity="0"
                    fill={`rgb(var(--${p.color}))`}
                    style={{ filter: `drop-shadow(0 0 5px rgb(var(--${p.color})))` }}
                  >
                    <animateMotion
                      dur={`${T}s`}
                      repeatCount="indefinite"
                      path={p.d}
                      keyPoints="0;0;1;1"
                      keyTimes={`0;${p.s / T};${p.e / T};1`}
                      calcMode="linear"
                    />
                    <animate
                      attributeName="opacity"
                      dur={`${T}s`}
                      repeatCount="indefinite"
                      calcMode="discrete"
                      values="0;1;0"
                      keyTimes={`0;${p.s / T};${p.e / T}`}
                    />
                  </circle>
                ))}
            </svg>
          </div>

          <div className="border-t border-line px-4 py-3 font-mono text-sm" aria-hidden>
            <span className="text-mint">&gt; </span>
            {caption}
          </div>
        </div>
      </div>
    </Section>
  );
}
