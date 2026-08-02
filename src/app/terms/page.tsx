import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${SITE_NAME}.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main className="bg-atmosphere min-h-[calc(100vh-8rem)]">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <h1 className="font-display text-4xl text-slate-900">Terms of Service</h1>
        <div className="mt-6 space-y-4 rounded-2xl border border-slate-200 bg-white/80 p-6 text-slate-600 sm:p-8">
          <p>
            {SITE_NAME} at {SITE_URL} is provided “as is” with no guarantees of
            uptime or compression results. You are responsible for the files you
            upload. Do not use the tool for illegal content or abuse.
          </p>
          <p>
            We may update these terms by posting changes on this page.
          </p>
        </div>
        <p className="mt-8">
          <Link href="/" className="font-semibold text-teal-800">
            ← Back to homepage
          </Link>
        </p>
      </div>
    </main>
  );
}
