import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import SeoLandingPage from "@/components/SeoLandingPage";
import { SITE_URL } from "@/lib/constants";

const title = "Free PDF Compressor — No Signup Required";
const description =
  "Free PDF compressor to reduce PDF file size instantly. Compress documents online with no account and download a lighter PDF.";
const path = "/free-pdf-compressor";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}${path}`,
    type: "website",
  },
};

export default function FreePdfCompressorPage() {
  return (
    <>
      <JsonLd
        name={title}
        description={description}
        path={path}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Free PDF Compressor", path },
        ]}
      />
      <SeoLandingPage
        h1="Free PDF Compressor — Shrink Files Fast"
        intro="Looking for a free PDF compressor? Use this tool to reduce PDF size without creating an account. Upload, compress, and download in a few clicks."
      >
        <h2>What a free PDF compressor does</h2>
        <p>
          A free PDF compressor rewrites your document to use less storage so
          files are easier to send and store.
        </p>
        <h2>When to use a free PDF compressor</h2>
        <ul>
          <li>Email attachment size limits</li>
          <li>Job application portals</li>
          <li>Cloud storage cleanup</li>
          <li>Faster website or LMS uploads</li>
        </ul>
        <h2>Free vs desktop software</h2>
        <p>
          Desktop tools can be powerful, but a free online compressor is enough
          for most everyday PDFs and works without installers.
        </p>
      </SeoLandingPage>
    </>
  );
}
