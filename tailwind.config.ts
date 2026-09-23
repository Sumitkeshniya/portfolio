import type { Config } from "tailwindcss";

// Colours are CSS variables (see app/globals.css) so light/dark themes just work.
const c = (v: string) => `rgb(var(--${v}) / <alpha-value>)`;

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: c("bg"),
        panel: c("panel"),
        line: c("line"),
        text: c("text"),
        muted: c("muted"),
        lilac: c("lilac"),
        coral: c("coral"),
        amber: c("amber"),
        sky: c("sky"),
        mint: c("mint"),
      },
      fontFamily: {
        sans: ['"Bricolage Grotesque"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
