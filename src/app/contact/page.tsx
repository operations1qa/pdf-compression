import type { Metadata } from "next";
import Link from "next/link";

const APP_NAME = "Free PDF Compressor";
const DOMAIN = "https://pdf-compression-ten.vercel.app";
const CONTACT_EMAIL = "georgetsiogas902@gmail.com";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${APP_NAME} for support or questions.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="bg-atmosphere min-h-[calc(100vh-8rem)]">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <h1 className="font-display text-4xl tracking-tight text-slate-900">
          Contact
        </h1>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm sm:p-8">
          <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
            If you need support or have questions, contact us.
          </p>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-6 inline-flex min-h-12 items-center justify-center rounded-xl bg-teal-700 px-6 text-sm font-semibold text-white shadow-lg shadow-teal-900/15 transition hover:bg-teal-800"
          >
            Email {CONTACT_EMAIL}
          </a>

          <p className="mt-4 text-sm text-slate-500">
            Website:{" "}
            <a
              href={DOMAIN}
              className="font-semibold text-teal-800 hover:text-teal-950"
            >
              {DOMAIN}
            </a>
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
