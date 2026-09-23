"use client";

import { useEffect, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { profile, terminal } from "@/data/portfolio";

const command = `curl -s https://${profile.domain}/api/me`;
const q = (s: string) => `"${s}"`;

function useTyped(text: string, start: boolean, instant: boolean) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (instant || !start || n >= text.length) return;
    const id = setTimeout(() => setN((v) => v + 1), 32 + Math.random() * 40);
    return () => clearTimeout(id);
  }, [n, start, text, instant]);
  return instant ? text.length : n;
}

function Row({ k, children, last }: { k: string; children: ReactNode; last?: boolean }) {
  return (
    <div className="break-words pl-5">
      <span className="text-sky">{q(k)}</span>
      <span className="text-muted">: </span>
      {children}
      {!last && <span className="text-muted">,</span>}
    </div>
  );
}

export default function Terminal() {
  const reduce = !!useReducedMotion();
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (reduce) return setStarted(true);
    const t = setTimeout(() => setStarted(true), 900);
    return () => clearTimeout(t);
  }, [reduce]);

  const shown = useTyped(command, started, reduce);
  const typed = shown >= command.length;

  const lines: ReactNode[] = [
    <span key="o" className="text-muted">{"{"}</span>,
    <Row key="1" k="name"><span className="text-mint">{q(profile.name)}</span></Row>,
    <Row key="2" k="role"><span className="text-mint">{q(profile.role)}</span></Row>,
    <Row key="3" k="stack">
      <span className="text-muted">[</span>
      {terminal.stack.map((s, i) => (
        <span key={s}>
          <span className="text-mint">{q(s)}</span>
          {i < terminal.stack.length - 1 && <span className="text-muted">, </span>}
        </span>
      ))}
      <span className="text-muted">]</span>
    </Row>,
    <Row key="4" k="focus"><span className="text-mint">{q(terminal.focus)}</span></Row>,
    <Row key="5" k="location"><span className="text-mint">{q(terminal.location)}</span></Row>,
    <Row key="6" k="open_to_work"><span className="text-coral">true</span></Row>,
    <Row key="7" k="contact" last><span className="text-lilac">{q(profile.email)}</span></Row>,
    <span key="c" className="text-muted">{"}"}</span>,
  ];

  return (
    <div className="overflow-hidden rounded-xl border border-line bg-panel shadow-2xl shadow-black/20">
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-coral" />
        <span className="h-3 w-3 rounded-full bg-amber" />
        <span className="h-3 w-3 rounded-full bg-mint" />
        <span className="ml-3 font-mono text-xs text-muted">zsh: ~/portfolio</span>
      </div>

      <div className="min-h-[21rem] p-5 font-mono text-[13px] leading-6 sm:text-sm sm:leading-7">
        <div className="break-all">
          <span className="text-mint">$ </span>
          {command.slice(0, shown)}
          {!typed && <span className="caret" />}
        </div>

        {typed && (
          <div className="mt-3">
            <motion.div
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-1"
            >
              <span className="text-mint">HTTP/1.1 200 OK</span>
              <span className="text-muted">  38ms</span>
            </motion.div>
            {lines.map((l, i) => (
              <motion.div
                key={i}
                initial={reduce ? false : { opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 + i * 0.1, duration: 0.25 }}
              >
                {l}
              </motion.div>
            ))}
            <motion.div
              className="mt-3"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + lines.length * 0.1 }}
            >
              <span className="text-mint">$ </span>
              <span className="caret" />
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
