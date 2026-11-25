import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { TopBar } from "./TopBar";
import { Footer } from "./Footer";
import { siteConfig } from "@/config/site";

interface LegalPageLayoutProps {
  title: string;
  eyebrow: string;
  children: React.ReactNode;
}

export function LegalPageLayout({
  title,
  eyebrow,
  children,
}: LegalPageLayoutProps) {
  return (
    <>
      <TopBar />
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="font-[family-name:var(--font-poppins)] text-lg font-bold text-[#102D52] hover:text-[#1D5B91]"
          >
            {siteConfig.name}
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-3.5 py-2 text-xs font-semibold text-[#102D52] transition-colors hover:bg-[#EAF4FC]"
          >
            <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
            <span>Volver al inicio</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 bg-[#F4F6F8] py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <article className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs sm:p-10">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1D5B91]">
              {eyebrow}
            </span>
            <h1 className="mt-2 font-[family-name:var(--font-poppins)] text-2xl font-bold text-[#102D52] sm:text-3xl">
              {title}
            </h1>
            <div className="mt-3 h-0.5 w-12 bg-[#C9A66B]" />

            <div className="mt-8 space-y-6 text-sm leading-relaxed text-slate-700 sm:text-base">
              {children}
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}

