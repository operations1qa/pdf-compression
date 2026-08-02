import type { Metadata } from "next";
import CompressPdfView from "@/components/CompressPdfView";
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL, TOOL_PATH } from "@/lib/constants";

export const metadata: Metadata = {
  title: { absolute: SITE_TITLE },
  description: SITE_DESCRIPTION,
  alternates: { canonical: TOOL_PATH },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: `${SITE_URL}${TOOL_PATH}`,
    type: "website",
  },
  keywords: [
    "compress pdf",
    "pdf compressor",
    "compress pdf online",
    "free pdf compressor",
    "reduce pdf file size",
  ],
};

export default function CompressPdfPage() {
  return <CompressPdfView />;
}
