export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center animate-fade-in">
      <span className="font-display text-[clamp(7rem,22vw,16rem)] leading-none text-film-500 select-none">
        404
      </span>

      <div className="w-14 h-px bg-film-500 mt-1 mb-6" />

      <h1 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text)] mb-2">
        Frame not found
      </h1>

      <p className="font-sans text-sm text-[var(--muted)] max-w-[22rem] mb-8">
         The page you&apos;re looking for doesn&apos;t exist.
      </p>

      <a
        href="/"
        className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[11px] font-heading font-semibold uppercase tracking-widest text-[var(--muted)] hover:text-film-600 hover:border-film-400 transition-all duration-200 shadow-sm"
      >
        ← Back to Reframe
      </a>
    </div>
  )
}
