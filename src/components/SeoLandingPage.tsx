import Link from "next/link";
import type { ReactNode } from "react";
import { TOOL_PATH } from "@/lib/constants";

type Props = {
  h1: string;
  intro: string;
  children: ReactNode;
};

export default function SeoLandingPage({ h1, intro, children }: Props) {
  return (
    <main className="bg-atmosphere min-h-[calc(100vh-8rem)]">
      <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <header className="mb-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-teal-800">
            Free PDF tool
          </p>
          <h1 className="font-display text-4xl tracking-tight text-slate-900 sm:text-5xl">
            {h1}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            {intro}
          </p>
          <Link
            href={TOOL_PATH}
            className="mt-6 inline-flex min-h-12 items-center justify-center rounded-xl bg-teal-700 px-6 text-sm font-semibold text-white shadow-lg shadow-teal-900/15 transition hover:bg-teal-800"
          >
            Use the free PDF compressor
          </Link>
        </header>

        <article className="space-y-5 rounded-2xl border border-slate-200 bg-white/80 p-6 text-base leading-relaxed text-slate-600 shadow-sm sm:p-8 [&_h2]:font-display [&_h2]:text-xl [&_h2]:text-slate-900 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
          {children}
        </article>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={TOOL_PATH}
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-slate-900 px-6 text-sm font-semibold text-amber-300 transition hover:bg-slate-800"
          >
            Compress PDF now
          </Link>
          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
