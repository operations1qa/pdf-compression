import { PDF_MAX_FILE_BYTES } from "./constants";

export function validatePdfFile(file: File): string | null {
  if (!file) return "Please choose a PDF file.";

  const name = file.name.toLowerCase();
  const mimeOk =
    file.type === "application/pdf" || file.type === "application/x-pdf";
  const extOk = name.endsWith(".pdf");

  if (!mimeOk && !extOk) return "Only PDF files are supported.";
  if (file.size === 0) return "That file appears to be empty.";
  if (file.size > PDF_MAX_FILE_BYTES) {
    return `PDF is too large. Max size is ${Math.floor(PDF_MAX_FILE_BYTES / (1024 * 1024))}MB.`;
  }
  return null;
}

export function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}
