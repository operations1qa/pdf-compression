import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PdfCompressTool from "@/components/PdfCompressTool";
import { SEO_LANDING_LINKS, SITE_DESCRIPTION, SITE_TITLE, TOOL_PATH } from "@/lib/constants";

export default function CompressPdfView() {
  return (
    <main className="bg-atmosphere min-h-screen">
      <JsonLd
        name={SITE_TITLE}
        description={SITE_DESCRIPTION}
        path={TOOL_PATH}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Compress PDF", path: TOOL_PATH },
        ]}
      />

      <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <header className="mb-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-teal-800">
            Free PDF compression tool
          </p>
          <h1 className="font-display text-4xl leading-[1.05] tracking-tight text-slate-900 sm:text-5xl">
            Compress PDF Online — Free PDF Compressor
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Reduce PDF file size in seconds. Upload a PDF, click Compress PDF,
            and download a lighter file for email, uploads, and sharing — no
            signup required.
          </p>
        </header>

        <div id="tool">
          <PdfCompressTool />
        </div>

        <section className="mt-12 space-y-6">
          <h2 className="font-display text-2xl tracking-tight text-slate-900">
            How to compress a PDF file
          </h2>
          <ol className="list-decimal space-y-2 pl-5 text-slate-600">
            <li>Upload your PDF (up to 50MB).</li>
            <li>Click Compress PDF and wait for processing.</li>
            <li>Download the compressed PDF when it’s ready.</li>
          </ol>

          <h2 className="font-display text-2xl tracking-tight text-slate-900">
            PDF compression guides
          </h2>
          <ul className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            {SEO_LANDING_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex rounded-lg border border-slate-200 bg-white/80 px-3 py-2 text-sm font-medium text-teal-800 transition hover:border-teal-300 hover:bg-teal-50"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
