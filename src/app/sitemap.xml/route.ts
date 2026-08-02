const BASE =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://pdf-compression-ten.vercel.app";

const URLS = [
  `${BASE}/`,
  `${BASE}/compress-pdf`,
  `${BASE}/compress-pdf-online`,
  `${BASE}/free-pdf-compressor`,
  `${BASE}/reduce-pdf-file-size`,
] as const;

export function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${URLS.map(
  (url) => `  <url>
    <loc>${url}</loc>
  </url>`,
).join("\n")}
</urlset>
`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
