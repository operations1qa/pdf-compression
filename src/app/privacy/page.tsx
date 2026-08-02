import type { Metadata } from "next";
import Link from "next/link";

const APP_NAME = "Free PDF Compressor";
const DOMAIN = "https://pdf-compression-ten.vercel.app";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${APP_NAME}.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="bg-atmosphere min-h-[calc(100vh-8rem)]">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <h1 className="font-display text-4xl tracking-tight text-slate-900">
          Privacy Policy
        </h1>

        <div className="mt-6 space-y-5 rounded-2xl border border-slate-200 bg-white/80 p-6 text-base leading-relaxed text-slate-600 shadow-sm sm:p-8">
          <p>
            This Privacy Policy explains how{" "}
            <strong className="text-slate-800">{APP_NAME}</strong> (“we”, “us”)
            handles information when you use{" "}
            <a
              href={DOMAIN}
              className="font-semibold text-teal-800 hover:text-teal-950"
            >
              {DOMAIN}
            </a>
            .
          </p>

          <h2 className="font-display text-xl text-slate-900">
            Files you upload
          </h2>
          <p>
            When you use the PDF compression tool, the PDF you upload is
            processed in memory only so we can compress it and return the
            result to your browser. PDFs are never stored on our servers after
            processing is complete.
          </p>

          <h2 className="font-display text-xl text-slate-900">
            Personal data
          </h2>
          <p>
            We do not sell personal data. We do not use uploaded PDFs for
            advertising, training, or resale.
          </p>

          <h2 className="font-display text-xl text-slate-900">Contact</h2>
          <p>
            If you have questions about this Privacy Policy, please visit our{" "}
            <Link
              href="/contact"
              className="font-semibold text-teal-800 hover:text-teal-950"
            >
              Contact
            </Link>{" "}
            page.
          </p>

          <p className="text-sm text-slate-500">
            Last updated: {new Date().getFullYear()}
          </p>
        </div>

        <p className="mt-8 text-sm text-slate-500">
          <Link
            href="/"
            className="font-semibold text-teal-800 transition hover:text-teal-950"
          >
            ← Back to homepage
          </Link>
        </p>
      </div>
    </main>
  );
}
