import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL, SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${SITE_NAME}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const email = CONTACT_EMAIL;
  return (
    <main className="bg-atmosphere min-h-[calc(100vh-8rem)]">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <h1 className="font-display text-4xl text-slate-900">Contact</h1>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white/80 p-6 sm:p-8">
          <p className="text-slate-600">
            If you need support or have questions, contact us.
          </p>
          {email ? (
            <a
              href={`mailto:${email}`}
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-xl bg-teal-700 px-6 text-sm font-semibold text-white"
            >
              Email {email}
            </a>
          ) : (
            <p className="mt-4 text-sm text-slate-500">
              Set NEXT_PUBLIC_CONTACT_EMAIL in your environment.
            </p>
          )}
          <p className="mt-4 text-xs text-slate-400">{SITE_URL}</p>
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
