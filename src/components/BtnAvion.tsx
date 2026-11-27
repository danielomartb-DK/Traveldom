"use client";

import { useEffect, type CSSProperties, type ReactNode } from "react";

export type BtnAvionVariant =
  | "primario"
  | "oscuro"
  | "turquesa"
  | "whatsapp"
  | "gmail"
  | "secundario";

interface BtnAvionProps {
  children: ReactNode;
  variant?: BtnAvionVariant;
  intensity?: "completa" | "ligera";
  href?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
}

const SPARKLES: Array<{ left: string; top: string; d: string; dy: string }> = [
  { left: "14%", top: "28%", d: ".32s", dy: "-.8rem" },
  { left: "30%", top: "66%", d: ".48s", dy: ".75rem" },
  { left: "48%", top: "24%", d: ".64s", dy: "-.75rem" },
  { left: "66%", top: "64%", d: ".80s", dy: ".8rem" },
  { left: "84%", top: "30%", d: ".98s", dy: "-.75rem" },
];

/**
 * Declara el <symbol id="icono-avion"> una sola vez en el DOM y registra
 * un único listener delegado para activar y reiniciar el vuelo en hover, clic y teclado.
 */
export function AvionDefsAndController() {
  useEffect(() => {
    const timers = new WeakMap<HTMLElement, number>();
    const entranceTimers = new WeakMap<HTMLElement, number>();
    const lastAutoFlight = new WeakMap<HTMLElement, number>();

    const triggerFlight = (btn: HTMLElement, x?: number, y?: number) => {
      const hasWave = x !== undefined && y !== undefined;
      if (hasWave) {
        btn.style.setProperty("--x", `${x}px`);
        btn.style.setProperty("--y", `${y}px`);
      }

      btn.classList.remove("volando", "onda");
      btn.classList.add("reinicio");
      void btn.offsetWidth;
      btn.classList.remove("reinicio");
      btn.classList.add("volando");
      if (hasWave && !btn.classList.contains("btn-avion--ligera")) {
        btn.classList.add("onda");
      }

      const prevTimer = timers.get(btn);
      if (prevTimer) window.clearTimeout(prevTimer);
      const nextTimer = window.setTimeout(() => {
        btn.classList.remove("volando", "onda");
      }, 2200);
      timers.set(btn, nextTimer);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const btn = target?.closest<HTMLElement>(".btn-avion");
      if (!btn) return;
      const related = e.relatedTarget as Node | null;
      if (related && btn.contains(related)) return;
      triggerFlight(btn);
    };

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const btn = target?.closest<HTMLElement>(".btn-avion");
      if (!btn) return;
      const rect = btn.getBoundingClientRect();
      const x = e.detail ? e.clientX - rect.left : rect.width / 2;
      const y = e.detail ? e.clientY - rect.top : rect.height / 2;
      triggerFlight(btn, x, y);
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("click", handleClick);

    // En dispositivos táctiles (Android/iOS sin hover), activar el vuelo cuando el botón entra en pantalla
    const isTouchDevice = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let io: IntersectionObserver | null = null;
    let mo: MutationObserver | null = null;

    if (isTouchDevice && !prefersReducedMotion && "IntersectionObserver" in window) {
      const observedButtons = new WeakSet<HTMLElement>();

      io = new IntersectionObserver(
        (entries) => {
          const now = Date.now();
          for (const entry of entries) {
            const btn = entry.target as HTMLElement;
            const pendingEntrance = entranceTimers.get(btn);

            if (!entry.isIntersecting) {
              if (pendingEntrance) {
                window.clearTimeout(pendingEntrance);
                entranceTimers.delete(btn);
              }
              continue;
            }

            const lastTime = lastAutoFlight.get(btn) ?? 0;
            if (now - lastTime < 3500) continue;

            if (pendingEntrance) window.clearTimeout(pendingEntrance);
            const t = window.setTimeout(() => {
              lastAutoFlight.set(btn, Date.now());
              triggerFlight(btn);
              entranceTimers.delete(btn);
            }, 260);
            entranceTimers.set(btn, t);
          }
        },
        { threshold: 0.35 }
      );

      const observeNewButtons = () => {
        document.querySelectorAll<HTMLElement>(".btn-avion").forEach((btn) => {
          if (!observedButtons.has(btn)) {
            observedButtons.add(btn);
            io?.observe(btn);
          }
        });
      };

      observeNewButtons();
      mo = new MutationObserver(observeNewButtons);
      mo.observe(document.body, { childList: true, subtree: true });
    }

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("click", handleClick);
      io?.disconnect();
      mo?.disconnect();
    };
  }, []);

  return (
    <svg
      width="0"
      height="0"
      style={{ position: "absolute" }}
      aria-hidden="true"
      focusable="false"
    >
      <symbol id="icono-avion" viewBox="0 0 24 24">
        <path d="M21 12c0-.8-.7-1.5-1.5-1.5H14L9 3H7l2.5 7.5H5L3.5 9H2l1 3-1 3h1.5L5 13.5h4.5L7 21h2l5-7.5h5.5c.8 0 1.5-.7 1.5-1.5z" />
      </symbol>
    </svg>
  );
}

/**
 * Botón reutilizable con animación de avión.
 * - intensity="completa": avión + ecos + destellos + sombra + onda al clic (CTAs principales)
 * - intensity="ligera": solo avión principal con estela (botones repetidos)
 */
export function BtnAvion({
  children,
  variant = "primario",
  intensity = "ligera",
  href,
  target,
  rel,
  type = "button",
  onClick,
  className = "",
  ariaLabel,
}: BtnAvionProps) {
  const isComplete = intensity === "completa";
  const classes = [
    "btn-avion",
    `btn-avion--${variant}`,
    !isComplete ? "btn-avion--ligera" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const innerContent = (
    <>
      {isComplete && <span className="brillo" aria-hidden="true" />}

      {isComplete && (
        <span className="chispas" aria-hidden="true">
          {SPARKLES.map((s, idx) => (
            <i
              key={idx}
              style={
                {
                  left: s.left,
                  top: s.top,
                  "--d": s.d,
                  "--dy": s.dy,
                } as CSSProperties
              }
            />
          ))}
        </span>
      )}

      <span className="texto">{children}</span>

      {isComplete && (
        <>
          <span className="vuelo eco e2" aria-hidden="true">
            <span className="altura">
              <svg className="avion" viewBox="0 0 24 24" focusable="false">
                <use href="#icono-avion" />
              </svg>
            </span>
          </span>
          <span className="vuelo eco e1" aria-hidden="true">
            <span className="altura">
              <svg className="avion" viewBox="0 0 24 24" focusable="false">
                <use href="#icono-avion" />
              </svg>
            </span>
          </span>
        </>
      )}

      <span className="vuelo" aria-hidden="true">
        {isComplete && <span className="sombra" />}
        <span className="altura">
          <svg className="avion" viewBox="0 0 24 24" focusable="false">
            <use href="#icono-avion" />
          </svg>
        </span>
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        aria-label={ariaLabel}
        className={classes}
      >
        {innerContent}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={classes}
    >
      {innerContent}
    </button>
  );
}
