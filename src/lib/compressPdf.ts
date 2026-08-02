import { PDFDocument } from "pdf-lib";

export async function compressPdfBytes(input: Uint8Array): Promise<Uint8Array> {
  const source = await PDFDocument.load(input, {
    ignoreEncryption: true,
    updateMetadata: false,
  });

  const output = await PDFDocument.create();
  const indices = source.getPageIndices();
  const copied = await output.copyPages(source, indices);
  copied.forEach((page) => output.addPage(page));

  output.setTitle("");
  output.setAuthor("");
  output.setSubject("");
  output.setKeywords([]);
  output.setProducer("");
  output.setCreator("");

  return output.save({ useObjectStreams: true });
}
