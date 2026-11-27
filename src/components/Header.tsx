"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { BtnAvion } from "./BtnAvion";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const [activeHref, setActiveHref] = useState<string>("#inicio");

  const closeMenu = () => setMobileOpen(false);

  useEffect(() => {
    const onScroll = () => {
      setIsCompact(window.scrollY > 36);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = siteConfig.navLinks.map((link) =>
      link.href.replace("#", "")
    );
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 w-full transition-all duration-300 ${
        isCompact || mobileOpen
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-[0_6px_24px_rgba(16,45,82,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          isCompact ? "py-2.5" : "py-3.5"
        }`}
      >
        {/* Logo */}
        <a
          href="#inicio"
          onClick={closeMenu}
          className="flex items-center gap-3 group shrink-0"
          aria-label="Traveldom Soluciones — Ir al inicio"
        >
          <div
            className={`relative overflow-hidden rounded-[var(--radius-sm)] border bg-white shadow-xs transition-transform duration-300 ${
              isCompact || mobileOpen
                ? "h-9 w-9 scale-95 border-slate-100"
                : "h-11 w-11 scale-100 border-white/40"
            }`}
          >
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
            <span
              className={`font-[family-name:var(--font-poppins)] text-lg font-bold tracking-tight transition-colors ${
                isCompact || mobileOpen
                  ? "text-[#102D52] group-hover:text-[#0E9AA7]"
                  : "text-white drop-shadow-[0_1px_6px_rgba(6,24,48,0.6)] group-hover:text-[#E3B963]"
              }`}
            >
              Traveldom
            </span>
            <span
              className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${
                isCompact || mobileOpen
                  ? "text-[#C9A66B]"
                  : "text-[#E3B963] drop-shadow-[0_1px_4px_rgba(6,24,48,0.6)]"
              }`}
            >
              Soluciones
            </span>
          </div>
        </a>

        {/* Navegación Desktop con estado activo */}
        <nav
          aria-label="Navegación principal"
          className="hidden lg:flex items-center gap-7"
        >
          {siteConfig.navLinks.map((item) => {
            const isActive = activeHref === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative py-1 text-sm font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:transition-all ${
                  isCompact || mobileOpen
                    ? isActive
                      ? "text-[#0E9AA7] font-semibold after:w-full after:bg-[#0E9AA7]"
                      : "text-[#1a2433] hover:text-[#0E9AA7] after:w-0 hover:after:w-full after:bg-[#0E9AA7]"
                    : isActive
                      ? "text-white font-semibold after:w-full after:bg-[#E3B963]"
                      : "text-white/90 hover:text-white after:w-0 hover:after:w-full after:bg-[#E3B963]"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Botón CTA + Toggle Móvil */}
        <div className="flex items-center gap-3">
          <BtnAvion
            href="#contacto"
            variant={isCompact || mobileOpen ? "oscuro" : "secundario"}
            intensity="completa"
            className={`hidden sm:inline-flex !px-5 !py-2.5 !min-h-[42px] !text-sm ${
              isCompact || mobileOpen
                ? ""
                : "!border-white/50 !bg-white/12 !text-white backdrop-blur-md hover:!bg-white/22 hover:!border-white"
            }`}
          >
            Cotiza tu viaje
          </BtnAvion>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={
              mobileOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"
            }
            className={`inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] border transition-colors lg:hidden ${
              isCompact || mobileOpen
                ? "border-slate-200 text-[#102D52] hover:bg-[#E6F7F8]"
                : "border-white/35 bg-white/10 text-white hover:bg-white/20"
            }`}
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
            {siteConfig.navLinks.map((item) => {
              const isActive = activeHref === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-[var(--radius-sm)] px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-[#E6F7F8] text-[#0E9AA7] font-semibold"
                      : "text-[#102D52] hover:bg-[#E6F7F8] hover:text-[#0E9AA7]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <BtnAvion
              href="#contacto"
              onClick={closeMenu}
              variant="oscuro"
              intensity="completa"
              className="mt-2 w-full"
            >
              Cotiza tu viaje
            </BtnAvion>
          </nav>
        </div>
      )}
    </header>
  );
}
