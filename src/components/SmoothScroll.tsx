"use client";

import { useEffect } from "react";

/**
 * Suaviza el desplazamiento con la rueda del mouse/trackpad y enlaces internos (#)
 * mediante interpolación en requestAnimationFrame, respetando prefers-reduced-motion,
 * zoom y modales abiertos.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let currentY = window.scrollY;
    let targetY = window.scrollY;
    let rafId: number | null = null;
    let isTicking = false;

    const getMaxScroll = () =>
      Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

    const clamp = (value: number) => Math.max(0, Math.min(value, getMaxScroll()));

    const tick = () => {
      const diff = targetY - currentY;

      if (Math.abs(diff) < 0.5) {
        currentY = targetY;
        window.scrollTo(0, currentY);
        isTicking = false;
        rafId = null;
        return;
      }

      currentY += diff * 0.085;
      window.scrollTo(0, currentY);
      rafId = window.requestAnimationFrame(tick);
    };

    const startAnimation = () => {
      if (!isTicking) {
        isTicking = true;
        rafId = window.requestAnimationFrame(tick);
      }
    };

    const handleWheel = (event: WheelEvent) => {
      if (event.ctrlKey || event.metaKey) return;
      if (document.body.style.overflow === "hidden") return;

      const target = event.target as HTMLElement | null;
      if (target) {
        const tag = target.tagName;
        if (tag === "TEXTAREA" || tag === "SELECT") return;
        if (
          Math.abs(event.deltaX) > Math.abs(event.deltaY) ||
          (target.closest(".overflow-x-auto") && Math.abs(event.deltaX) > 0)
        ) {
          return;
        }
      }

      event.preventDefault();

      let delta = event.deltaY;
      if (event.deltaMode === 1) delta *= 32;
      else if (event.deltaMode === 2) delta *= window.innerHeight;

      if (!isTicking) {
        currentY = window.scrollY;
        targetY = window.scrollY;
      }

      targetY = clamp(targetY + delta * 1.1);
      startAnimation();
    };

    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!anchor) return;

      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;

      const destEl = document.querySelector<HTMLElement>(hash);
      if (!destEl) return;

      event.preventDefault();
      if (!isTicking) {
        currentY = window.scrollY;
      }

      const rect = destEl.getBoundingClientRect();
      const scrollMarginTop = parseFloat(
        window.getComputedStyle(destEl).scrollMarginTop || "0"
      );
      targetY = clamp(window.scrollY + rect.top - scrollMarginTop);
      startAnimation();
    };

    const handleNativeScroll = () => {
      if (!isTicking) {
        currentY = window.scrollY;
        targetY = window.scrollY;
      }
    };

    const handleResize = () => {
      targetY = clamp(targetY);
      currentY = clamp(currentY);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    document.addEventListener("click", handleAnchorClick);
    window.addEventListener("scroll", handleNativeScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      document.removeEventListener("click", handleAnchorClick);
      window.removeEventListener("scroll", handleNativeScroll);
      window.removeEventListener("resize", handleResize);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return null;
}
