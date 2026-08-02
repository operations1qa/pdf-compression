# Free PDF Compressor

Separate microtool app (Next.js 14) for compressing PDFs online.

## Location

`Desktop/microapps/pdf compression`

## Run locally

```bash
cd "/Users/1qa/Desktop/microapps/pdf compression"
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000/compress-pdf](http://localhost:3000/compress-pdf)

## Main routes

- `/` and `/compress-pdf` — tool
- `/compress-pdf-online`
- `/free-pdf-compressor`
- `/reduce-pdf-file-size`
- `/api/compress-pdf`
- `/sitemap.xml`
- `/robots.txt`

## Deploy

Import this folder as its own Vercel project. Set `NEXT_PUBLIC_SITE_URL` to your production URL after deploy.
