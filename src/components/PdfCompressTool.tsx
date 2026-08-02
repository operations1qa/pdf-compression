"use client";

import LoadingSpinner from "@/components/LoadingSpinner";
import PdfUploadZone from "@/components/PdfUploadZone";
import { usePdfCompression } from "@/hooks/usePdfCompression";
import { formatBytes } from "@/lib/validatePdf";

export default function PdfCompressTool() {
  const {
    file,
    fileName,
    fileSize,
    isLoading,
    error,
    success,
    fallback,
    downloadUrl,
    downloadName,
    originalSize,
    compressedSize,
    setFile,
    compress,
    reset,
  } = usePdfCompression();

  return (
    <div className="w-full">
      <PdfUploadZone
        disabled={isLoading}
        onFile={setFile}
        fileName={fileName}
        fileSize={fileSize}
      />

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={compress}
          disabled={!file || isLoading}
          className="inline-flex min-h-12 items-center justify-center rounded-xl bg-teal-700 px-6 text-sm font-semibold text-white shadow-lg shadow-teal-900/15 transition hover:bg-teal-800 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none"
        >
          {isLoading ? <LoadingSpinner label="Compressing PDF…" /> : "Compress PDF"}
        </button>
        {file ? (
          <button
            type="button"
            onClick={reset}
            disabled={isLoading}
            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-50"
          >
            Clear
          </button>
        ) : null}
      </div>

      {error ? (
        <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          {error}
        </div>
      ) : null}

      {fallback ? (
        <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900" role="status">
          {fallback}
        </div>
      ) : null}

      {success ? (
        <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900" role="status">
          {success}
          {originalSize != null && compressedSize != null ? (
            <span className="mt-1 block text-emerald-800/80">
              Original {formatBytes(originalSize)} → Compressed {formatBytes(compressedSize)}
            </span>
          ) : null}
        </div>
      ) : null}

      {downloadUrl ? (
        <div className="mt-6">
          <a
            href={downloadUrl}
            download={downloadName || "compressed.pdf"}
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-slate-900 px-6 text-sm font-semibold text-amber-300 transition hover:bg-slate-800"
          >
            Download compressed PDF
          </a>
        </div>
      ) : null}
    </div>
  );
}
