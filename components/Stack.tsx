import { profile, stack } from "@/data/portfolio";
import { Heading, Section } from "./Section";

const q = (s: string) => `"${s}"`;

export default function Stack() {
  return (
    <Section id="stack">
      <Heading>The tools I reach for.</Heading>

      <div className="mt-12 overflow-x-auto rounded-xl border border-line bg-panel p-6 font-mono text-sm leading-8 md:p-8">
        <div className="text-muted">{"{"}</div>
        <div className="pl-5">
          <span className="text-sky">{q("name")}</span>
          <span className="text-muted">: </span>
          <span className="text-mint">{q(profile.handle + "-portfolio")}</span>
          <span className="text-muted">,</span>
        </div>
        <div className="pl-5">
          <span className="text-sky">{q("dependencies")}</span>
          <span className="text-muted">: {"{"}</span>
        </div>

        {Object.entries(stack).map(([group, items], gi, arr) => (
          <div key={group} className="flex flex-wrap items-baseline gap-x-2 pl-10">
            <span className="text-lilac">{q(group)}</span>
            <span className="text-muted">: [</span>
            {items.map((it, i) => (
              <span key={it} className="whitespace-nowrap">
                <span className="rounded px-1 text-mint transition-colors hover:bg-mint/15">{q(it)}</span>
                {i < items.length - 1 && <span className="text-muted">,</span>}
              </span>
            ))}
            <span className="text-muted">]{gi < arr.length - 1 ? "," : ""}</span>
          </div>
        ))}

        <div className="pl-5 text-muted">{"},"}</div>
        <div className="pl-5">
          <span className="text-sky">{q("scripts")}</span>
          <span className="text-muted">: {"{"}</span>
        </div>
        <div className="pl-10">
          <span className="text-lilac">{q("hire")}</span>
          <span className="text-muted">: </span>
          <a className="text-amber underline-offset-4 hover:underline" href={`mailto:${profile.email}`}>
            {q("mail " + profile.email)}
          </a>
        </div>
        <div className="pl-5 text-muted">{"}"}</div>
        <div className="text-muted">{"}"}</div>
      </div>
    </Section>
  );
}
