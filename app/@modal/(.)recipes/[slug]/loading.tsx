export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/70 p-4 pt-16 sm:p-8 sm:pt-20">
      <div className="w-full max-w-[880px] bg-card border border-border rounded p-8 animate-pulse">
        <div className="h-3 w-24 bg-border rounded mb-4" />
        <div className="h-8 w-64 bg-border rounded mb-6" />
        <div className="h-4 w-full bg-border rounded mb-2" />
        <div className="h-4 w-3/4 bg-border rounded" />
      </div>
    </div>
  );
}
