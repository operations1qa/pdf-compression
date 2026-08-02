"use client";

import { useCallback, useRef, useState } from "react";
import { PDF_MAX_FILE_BYTES } from "@/lib/constants";
import { formatBytes } from "@/lib/validatePdf";

type Props = {
  disabled?: boolean;
  onFile: (file: File) => void;
  fileName?: string | null;
  fileSize?: number | null;
};

export default function PdfUploadZone({
  disabled,
  onFile,
  fileName,
  fileSize,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFiles = useCallback(
    (files: FileList | null) => {
      const file = files?.[0];
      if (file) onFile(file);
    },
    [onFile],
  );

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label="Upload PDF"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          inputRef.current?.click();
        }
      }}
      onClick={() => !disabled && inputRef.current?.click()}
      onDragEnter={(e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!disabled) setIsDragging(true);
      }}
      onDragOver={(e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!disabled) setIsDragging(true);
      }}
      onDragLeave={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
      }}
      onDrop={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
        if (!disabled) handleFiles(e.dataTransfer.files);
      }}
      className={[
        "relative flex min-h-[220px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed px-6 py-10 text-center transition",
        isDragging
          ? "scale-[1.01] border-teal-500 bg-teal-50/80"
          : "border-slate-300 bg-white/70 hover:border-teal-400 hover:bg-teal-50/40",
        disabled ? "pointer-events-none opacity-60" : "",
      ].join(" ")}
    >
      <input
        ref={inputRef}
        type="file"
        accept="application/pdf,.pdf"
        className="sr-only"
        disabled={disabled}
        onChange={(e) => {
          handleFiles(e.target.files);
          e.target.value = "";
        }}
      />
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-amber-300 shadow-lg shadow-slate-900/10">
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 3v5h5" />
        </svg>
      </div>
      <p className="font-display text-xl tracking-tight text-slate-900 sm:text-2xl">
        Drop your PDF here
      </p>
      <p className="mt-2 max-w-sm text-sm text-slate-600">
        or click to browse · PDF only · up to{" "}
        {Math.floor(PDF_MAX_FILE_BYTES / (1024 * 1024))}MB
      </p>
      {fileName ? (
        <p className="mt-4 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
          {fileName}
          {typeof fileSize === "number" ? ` · ${formatBytes(fileSize)}` : ""}
        </p>
      ) : null}
    </div>
  );
}
