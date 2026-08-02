import Link from "next/link";
import { SEO_LANDING_LINKS, SITE_NAME, TOOL_PATH } from "@/lib/constants";

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/contact", label: "Contact" },
] as const;

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200/80 bg-white/40 px-4 py-8 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 text-sm text-slate-500">
        <p className="max-w-3xl leading-relaxed text-slate-600">
          This free PDF compressor helps you compress PDF online and reduce PDF
          file size for email, uploads, and sharing. Use our free PDF compression
          tool to shrink documents quickly — no signup required.
        </p>
        <nav aria-label="Tools and guides" className="flex flex-wrap gap-x-4 gap-y-2">
          <Link href={TOOL_PATH} className="text-slate-600 transition hover:text-teal-800">
            Compress PDF
          </Link>
          {SEO_LANDING_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-slate-600 transition hover:text-teal-800">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col items-start justify-between gap-4 border-t border-slate-200/70 pt-6 sm:flex-row sm:items-center">
          <p>{SITE_NAME}</p>
          <nav aria-label="Legal" className="flex flex-wrap gap-x-4 gap-y-2">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-slate-600 transition hover:text-teal-800">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
