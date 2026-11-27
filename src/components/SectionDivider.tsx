interface SectionDividerProps {
  variant?: "wave" | "diagonal";
  fillColor?: string;
  bgColor?: string;
  flip?: boolean;
}

/**
 * Separador SVG estático entre secciones para romper la monotonía de bloques planos.
 */
export function SectionDivider({
  variant = "wave",
  fillColor = "#ffffff",
  bgColor = "transparent",
  flip = false,
}: SectionDividerProps) {
  return (
    <div
      aria-hidden="true"
      className="w-full overflow-hidden leading-none select-none pointer-events-none"
      style={{ backgroundColor: bgColor }}
    >
      {variant === "wave" ? (
        <svg
          viewBox="0 0 1440 56"
          preserveAspectRatio="none"
          className={`block h-5 w-full sm:h-7 lg:h-8 ${flip ? "rotate-180" : ""}`}
        >
          <path
            d="M0,28 C320,58 720,0 1440,34 L1440,56 L0,56 Z"
            fill={fillColor}
          />
        </svg>
      ) : (
        <svg
          viewBox="0 0 1440 48"
          preserveAspectRatio="none"
          className={`block h-5 w-full sm:h-6 lg:h-8 ${flip ? "rotate-180" : ""}`}
        >
          <polygon points="0,48 1440,0 1440,48" fill={fillColor} />
        </svg>
      )}
    </div>
  );
}
