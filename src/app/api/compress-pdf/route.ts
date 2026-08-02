import { NextRequest, NextResponse } from "next/server";
import { compressPdfBytes } from "@/lib/compressPdf";
import { PDF_MAX_FILE_BYTES } from "@/lib/constants";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

function isPdf(file: File): boolean {
  const name = file.name.toLowerCase();
  return (
    file.type === "application/pdf" ||
    file.type === "application/x-pdf" ||
    name.endsWith(".pdf")
  );
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file || !(file instanceof File)) {
      return NextResponse.json(
        { error: 'No PDF uploaded. Send multipart field named "file".' },
        { status: 400 },
      );
    }

    if (!isPdf(file)) {
      return NextResponse.json(
        { error: "Only PDF files are supported." },
        { status: 400 },
      );
    }

    if (file.size === 0) {
      return NextResponse.json(
        { error: "Uploaded file is empty." },
        { status: 400 },
      );
    }

    if (file.size > PDF_MAX_FILE_BYTES) {
      return NextResponse.json(
        {
          error: `PDF exceeds ${Math.floor(PDF_MAX_FILE_BYTES / (1024 * 1024))}MB limit.`,
        },
        { status: 400 },
      );
    }

    const input = new Uint8Array(await file.arrayBuffer());
    const compressed = await compressPdfBytes(input);
    const base = file.name.replace(/\.pdf$/i, "") || "document";
    const filename = `${base}-compressed.pdf`;

    return new NextResponse(Buffer.from(compressed), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "X-Original-Size": String(file.size),
        "X-Compressed-Size": String(compressed.byteLength),
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "";
    return NextResponse.json(
      {
        error:
          /encrypt/i.test(message)
            ? "This PDF appears encrypted or protected and cannot be compressed."
            : "Compression failed. Please try another PDF.",
      },
      { status: 500 },
    );
  }
}
