"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    let destroyed = false;
    let cleanup: (() => void) | undefined;

    void import("lenis").then(({ default: Lenis }) => {
      if (destroyed) return;
      const lenis = new Lenis({
        duration: 1.2,
        smoothWheel: true,
      });
      let rafId = 0;
      function raf(time: number) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);
      cleanup = () => {
        cancelAnimationFrame(rafId);
        lenis.destroy();
      };
    });

    return () => {
      destroyed = true;
      cleanup?.();
    };
  }, []);

  return null;
}