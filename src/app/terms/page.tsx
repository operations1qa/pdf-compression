import type { Metadata } from "next";
import Link from "next/link";

const APP_NAME = "Free PDF Compressor";
const DOMAIN = "https://pdf-compression-ten.vercel.app";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${APP_NAME}.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main className="bg-atmosphere min-h-[calc(100vh-8rem)]">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <h1 className="font-display text-4xl tracking-tight text-slate-900">
          Terms of Service
        </h1>

        <div className="mt-6 space-y-5 rounded-2xl border border-slate-200 bg-white/80 p-6 text-base leading-relaxed text-slate-600 shadow-sm sm:p-8">
          <p>
            These Terms of Service (“Terms”) govern your use of{" "}
            <strong className="text-slate-800">{APP_NAME}</strong> at{" "}
            <a
              href={DOMAIN}
              className="font-semibold text-teal-800 hover:text-teal-950"
            >
              {DOMAIN}
            </a>
            . By using the tool, you agree to these Terms.
          </p>

          <h2 className="font-display text-xl text-slate-900">
            Service provided “as is”
          </h2>
          <p>
            {APP_NAME} is provided on an “as is” and “as available” basis. We
            make no guarantees about uptime, compression amount, or fitness for
            a particular purpose.
          </p>

          <h2 className="font-display text-xl text-slate-900">
            Your responsibility
          </h2>
          <p>
            You are responsible for the PDFs you upload. Do not upload illegal,
            harmful, or abusive content, and do not use the service to abuse or
            disrupt the tool.
          </p>

          <h2 className="font-display text-xl text-slate-900">
            Limitation of liability
          </h2>
          <p>
            To the fullest extent permitted by law, we are not liable for any
            loss of data, profits, or other damages arising from your use of the
            service.
          </p>

          <h2 className="font-display text-xl text-slate-900">
            Changes to the terms
          </h2>
          <p>
            We may update these Terms by posting changes on this page. Continued
            use of the tool after changes are posted means you accept the
            revised Terms.
          </p>

          <h2 className="font-display text-xl text-slate-900">Contact</h2>
          <p>
            Questions about these Terms can be sent through our{" "}
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
