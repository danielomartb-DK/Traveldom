import {
  FileCheck2,
  Building2,
  Languages,
  ShieldCheck,
  Plane,
  Landmark,
  Compass,
} from "lucide-react";

type PlaceholderIcon =
  | "FileCheck2"
  | "Building2"
  | "Languages"
  | "ShieldCheck"
  | "Plane"
  | "Landmark"
  | "Compass";

interface VisualPlaceholderProps {
  fileName: string;
  caption: string;
  icon?: PlaceholderIcon;
  variant?: "navy" | "corporate" | "gold";
  className?: string;
}

const iconMap = {
  FileCheck2,
  Building2,
  Languages,
  ShieldCheck,
  Plane,
  Landmark,
  Compass,
};

const variantStyles = {
  navy: "from-[#102D52] via-[#174172] to-[#1D5B91]",
  corporate: "from-[#1D5B91] via-[#164A7A] to-[#102D52]",
  gold: "from-[#102D52] via-[#1A4373] to-[#23588C]",
};

/**
 * Placeholder visual corporativo para secciones sin fotografía provista,
 * respetando la paleta oficial de Traveldom Soluciones e identificando el recurso sugerido.
 */
export function VisualPlaceholder({
  fileName,
  caption,
  icon = "Compass",
  variant = "navy",
  className = "",
}: VisualPlaceholderProps) {
  const Icon = iconMap[icon];

  return (
    <div
      role="img"
      aria-label={`${caption} (recurso visual: ${fileName})`}
      className={`relative overflow-hidden bg-gradient-to-br ${variantStyles[variant]} text-white select-none ${className}`}
    >
      {/* Patrón geométrico sutil */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #EAF4FC 1px, transparent 1px), radial-gradient(circle at 80% 80%, #C9A66B 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -right-8 -top-8 h-32 w-32 rounded-full border border-[#C9A66B]/30"
      />
      <div
        aria-hidden="true"
        className="absolute -left-10 -bottom-10 h-36 w-36 rounded-full border border-[#EAF4FC]/20"
      />

      <div className="relative z-10 flex h-full w-full flex-col justify-between p-5">
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-[#C9A66B] backdrop-blur-xs">
            <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
          </span>
          <span className="rounded-full border border-white/20 bg-[#102D52]/60 px-2.5 py-1 font-mono text-[11px] tracking-tight text-[#EAF4FC]">
            {fileName}
          </span>
        </div>

        <div className="mt-4">
          <div className="mb-1.5 h-0.5 w-8 bg-[#C9A66B]" />
          <p className="text-xs font-medium leading-relaxed text-[#EAF4FC]/95">
            {caption}
          </p>
        </div>
      </div>
    </div>
  );
}

