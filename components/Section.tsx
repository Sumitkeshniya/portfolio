import type { ReactNode } from "react";

export function Section({ id, children }: { id: string; children: ReactNode }) {
  return (
    <section id={id} className="relative z-10 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function Heading({ children }: { children: ReactNode }) {
  return (
    <h2 className="max-w-3xl text-3xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
      {children}
    </h2>
  );
}
