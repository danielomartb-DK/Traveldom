"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_1px_12px_rgba(16,45,82,0.04)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#inicio"
          onClick={closeMenu}
          className="flex items-center gap-3 group shrink-0"
          aria-label="Traveldom Soluciones — Ir al inicio"
        >
          <div className="relative h-11 w-11 overflow-hidden rounded-lg border border-slate-100 bg-white shadow-xs">
            <Image
              src="/images/logo-traveldom.jpg"
              alt="Logotipo de Traveldom Soluciones"
              fill
              sizes="44px"
              className="object-contain p-0.5"
              priority
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-[family-name:var(--font-poppins)] text-lg font-bold tracking-tight text-[#102D52] group-hover:text-[#1D5B91] transition-colors">
              Traveldom
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C9A66B]">
              Soluciones
            </span>
          </div>
        </a>

        {/* Navegación Desktop */}
        <nav
          aria-label="Navegación principal"
          className="hidden lg:flex items-center gap-7"
        >
          {siteConfig.navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#1a2433] transition-colors hover:text-[#1D5B91] relative py-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#C9A66B] after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Botón CTA + Toggle Móvil */}
        <div className="flex items-center gap-3">
          <a
            href="#contacto"
            className="hidden sm:inline-flex items-center gap-2 rounded-md bg-[#102D52] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#1D5B91]"
          >
            <span>Cotiza tu viaje</span>
            <ArrowRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-[#102D52] transition-colors hover:bg-[#EAF4FC] lg:hidden"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-slate-100 bg-white lg:hidden"
        >
          <nav
            aria-label="Navegación móvil"
            className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6"
          >
            {siteConfig.navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-[#102D52] transition-colors hover:bg-[#EAF4FC] hover:text-[#1D5B91]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={closeMenu}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-[#102D52] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1D5B91]"
            >
              <span>Cotiza tu viaje</span>
              <ArrowRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

