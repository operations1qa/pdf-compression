import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import SeoLandingPage from "@/components/SeoLandingPage";
import { SITE_URL } from "@/lib/constants";

const title = "Compress PDF Online Free — Fast PDF Shrink Tool";
const description =
  "Compress PDF online in seconds. Free tool to shrink PDF files for email and uploads — no signup, no install.";
const path = "/compress-pdf-online";

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

export default function CompressPdfOnlinePage() {
  return (
    <>
      <JsonLd
        name={title}
        description={description}
        path={path}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Compress PDF Online", path },
        ]}
      />
      <SeoLandingPage
        h1="Compress PDF Online with a Free Tool"
        intro="Need to compress PDF online without installing software? Upload your document, shrink it in the browser, and download a smaller PDF for email or uploads."
      >
        <h2>Why compress PDF online?</h2>
        <p>
          Online PDF compression lets you reduce file size from any device. It
          is ideal when attachments are too large for email limits or form
          uploads.
        </p>
        <h2>How to compress a PDF online</h2>
        <ul>
          <li>Open the free PDF compressor</li>
          <li>Upload your PDF file</li>
          <li>Click Compress PDF</li>
          <li>Download the smaller result</li>
        </ul>
        <h2>Best uses</h2>
        <p>
          Compress scanned documents, presentations exported as PDF, and image
          heavy reports before sharing.
        </p>
      </SeoLandingPage>
    </>
  );
}
