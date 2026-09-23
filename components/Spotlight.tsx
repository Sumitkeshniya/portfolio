"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

/** Soft light that follows the cursor. Ignored on touch devices. */
export default function Spotlight() {
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const sx = useSpring(x, { stiffness: 120, damping: 20, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 120, damping: 20, mass: 0.4 });

  useEffect(() => {
    const move = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  const background = useMotionTemplate`radial-gradient(420px circle at ${sx}px ${sy}px, rgb(var(--sky) / 0.11), transparent 70%)`;

  return <motion.div aria-hidden className="pointer-events-none fixed inset-0 z-0" style={{ background }} />;
}
