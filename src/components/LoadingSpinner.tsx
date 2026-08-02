export default function LoadingSpinner({
  label = "Processing…",
}: {
  label?: string;
}) {
  return (
    <div className="inline-flex items-center gap-2" role="status" aria-live="polite">
      <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
      <span>{label}</span>
    </div>
  );
}
