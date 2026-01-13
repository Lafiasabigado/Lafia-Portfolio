"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement | null>(null);
  const raf = useRef<number | null>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateEnabled = () => {
      setEnabled(!media.matches);
    };

    updateEnabled();

    const onChange = () => updateEnabled();
    media.addEventListener?.("change", onChange);

    return () => {
      media.removeEventListener?.("change", onChange);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const el = ref.current;
    if (!el) return;

    const onMove = (e: PointerEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * 0.12;
      current.current.y += (target.current.y - current.current.y) * 0.12;

      el.style.setProperty("--x", `${current.current.x}px`);
      el.style.setProperty("--y", `${current.current.y}px`);

      raf.current = window.requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf.current = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf.current) window.cancelAnimationFrame(raf.current);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
      style={{
        background:
          "radial-gradient(600px circle at var(--x) var(--y), rgba(99, 102, 241, 0.10), transparent 45%)",
      }}
    />
  );
}
