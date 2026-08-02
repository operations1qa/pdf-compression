export const SITE_NAME = "Free PDF Compressor";
export const SITE_TITLE =
  "Compress PDF Online Free — Reduce PDF File Size";
export const SITE_DESCRIPTION =
  "Free PDF compression tool to compress PDF online and reduce PDF file size. Upload a PDF, compress it, and download a smaller file — no signup.";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://pdf-compression-ten.vercel.app";

export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "";

export const PDF_MAX_FILE_BYTES = 50 * 1024 * 1024;

export const SEO_LANDING_LINKS = [
  { href: "/compress-pdf-online", label: "Compress PDF online" },
  { href: "/free-pdf-compressor", label: "Free PDF compressor" },
  { href: "/reduce-pdf-file-size", label: "Reduce PDF file size" },
] as const;

export const TOOL_PATH = "/compress-pdf";
