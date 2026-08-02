import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL, SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE_NAME}.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  const email = CONTACT_EMAIL;
  return (
    <main className="bg-atmosphere min-h-[calc(100vh-8rem)]">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <h1 className="font-display text-4xl text-slate-900">Privacy Policy</h1>
        <div className="mt-6 space-y-4 rounded-2xl border border-slate-200 bg-white/80 p-6 text-slate-600 sm:p-8">
          <p>
            {SITE_NAME} ({SITE_URL}) processes PDFs you upload so we can compress
            them. Files are handled in memory for the request and are not kept
            after processing finishes.
          </p>
          <p>
            We do not sell personal data. Contact:{" "}
            {email ? (
              <a className="font-semibold text-teal-800" href={`mailto:${email}`}>
                {email}
              </a>
            ) : (
              "the address on our Contact page"
            )}
            .
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
