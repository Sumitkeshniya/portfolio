import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-line px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 font-mono text-xs text-muted">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>Built with Next.js, Tailwind CSS and Framer Motion</span>
      </div>
    </footer>
  );
}
