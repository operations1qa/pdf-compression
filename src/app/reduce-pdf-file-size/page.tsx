import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import SeoLandingPage from "@/components/SeoLandingPage";
import { SITE_URL } from "@/lib/constants";

const title = "Reduce PDF File Size Online — Free Compressor";
const description =
  "Reduce PDF file size online for free. Shrink large PDFs for email, forms, and sharing with a simple upload-and-download tool.";
const path = "/reduce-pdf-file-size";

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

export default function ReducePdfFileSizePage() {
  return (
    <>
      <JsonLd
        name={title}
        description={description}
        path={path}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Reduce PDF File Size", path },
        ]}
      />
      <SeoLandingPage
        h1="Reduce PDF File Size Without Losing the Document"
        intro="Large PDF? Reduce PDF file size online before you send it. Our free compressor helps you create a smaller file that is easier to upload and share."
      >
        <h2>How to reduce PDF file size</h2>
        <ul>
          <li>Upload the original PDF</li>
          <li>Run compression</li>
          <li>Compare the new size</li>
          <li>Download and share the smaller file</li>
        </ul>
        <h2>Why PDFs get too large</h2>
        <p>
          Scans, embedded images, and exported slide decks often create heavy
          PDFs. Reducing file size makes them practical for everyday use.
        </p>
        <h2>Tips for better results</h2>
        <ul>
          <li>Start with an unlocked PDF</li>
          <li>Keep a backup of the original</li>
          <li>Re-compress only if you still need a smaller file</li>
        </ul>
      </SeoLandingPage>
    </>
  );
}
