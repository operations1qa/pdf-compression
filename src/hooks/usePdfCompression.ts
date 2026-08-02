"use client";

import { useCallback, useState } from "react";
import { formatBytes, validatePdfFile } from "@/lib/validatePdf";

type PdfState = {
  file: File | null;
  fileName: string | null;
  fileSize: number | null;
  isLoading: boolean;
  error: string | null;
  success: string | null;
  fallback: string | null;
  downloadUrl: string | null;
  downloadName: string | null;
  originalSize: number | null;
  compressedSize: number | null;
};

const initial: PdfState = {
  file: null,
  fileName: null,
  fileSize: null,
  isLoading: false,
  error: null,
  success: null,
  fallback: null,
  downloadUrl: null,
  downloadName: null,
  originalSize: null,
  compressedSize: null,
};

export function usePdfCompression() {
  const [state, setState] = useState<PdfState>(initial);

  const reset = useCallback(() => {
    setState((prev) => {
      if (prev.downloadUrl) URL.revokeObjectURL(prev.downloadUrl);
      return initial;
    });
  }, []);

  const setFile = useCallback((file: File) => {
    const error = validatePdfFile(file);
    if (error) {
      setState((prev) => ({
        ...prev,
        error,
        success: null,
        fallback: null,
      }));
      return false;
    }

    setState((prev) => {
      if (prev.downloadUrl) URL.revokeObjectURL(prev.downloadUrl);
      return {
        ...initial,
        file,
        fileName: file.name,
        fileSize: file.size,
      };
    });
    return true;
  }, []);

  const compress = useCallback(async () => {
    const file = state.file;
    if (!file) {
      setState((prev) => ({ ...prev, error: "Upload a PDF first." }));
      return;
    }

    const validationError = validatePdfFile(file);
    if (validationError) {
      setState((prev) => ({ ...prev, error: validationError }));
      return;
    }

    setState((prev) => ({
      ...prev,
      isLoading: true,
      error: null,
      success: null,
      fallback: null,
    }));

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/compress-pdf", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        let message = "Compression failed. Please try another PDF.";
        try {
          const data = (await response.json()) as { error?: string };
          if (data.error) message = data.error;
        } catch {
          // ignore
        }
        setState((prev) => ({
          ...prev,
          isLoading: false,
          fallback: message,
        }));
        return;
      }

      const blob = await response.blob();
      const originalSize = Number(
        response.headers.get("X-Original-Size") || file.size,
      );
      const compressedSize = Number(
        response.headers.get("X-Compressed-Size") || blob.size,
      );
      const base = file.name.replace(/\.pdf$/i, "") || "document";
      const downloadName = `${base}-compressed.pdf`;
      const downloadUrl = URL.createObjectURL(blob);
      const saved = originalSize - compressedSize;
      const success =
        saved > 0
          ? `Success — reduced from ${formatBytes(originalSize)} to ${formatBytes(compressedSize)}.`
          : `Success — PDF re-saved (${formatBytes(compressedSize)}). Some PDFs are already optimized.`;

      setState((prev) => {
        if (prev.downloadUrl) URL.revokeObjectURL(prev.downloadUrl);
        return {
          ...prev,
          isLoading: false,
          downloadUrl,
          downloadName,
          originalSize,
          compressedSize,
          success,
          fallback: null,
          error: null,
        };
      });
    } catch {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        fallback:
          "We couldn’t compress that PDF. Check your connection and try again, or use a smaller file.",
      }));
    }
  }, [state.file]);

  return { ...state, setFile, compress, reset };
}
