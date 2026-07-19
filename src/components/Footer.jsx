function Facebook(props) {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" {...props}>
      <path d="M13.5 21v-8.1h2.72l.41-3.15h-3.13V7.75c0-.91.25-1.53 1.56-1.53h1.67V3.4A22 22 0 0 0 14.2 3.2c-2.35 0-3.96 1.44-3.96 4.07v2.48H7.5v3.15h2.74V21z" />
    </svg>
  );
}
function Instagram(props) {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}
function Youtube(props) {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" {...props}>
      <rect x="2.5" y="6" width="19" height="12" rx="4" fill="none" stroke="currentColor" strokeWidth={1.8} />
      <path d="M10.5 9.5v5l4.5-2.5z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-6 py-10">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="font-display text-xl text-[var(--gold-bright)]">N &amp; N</span>
          <span className="text-[10px] tracking-[0.3em] uppercase text-[var(--ink-dim)]">
            Live Music &amp; Entertainment
          </span>
        </div>

        <p className="text-xs text-[var(--ink-dim)] text-center">
          &copy; {new Date().getFullYear()} N &amp; N Live Music &amp; Entertainment. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a href="#" aria-label="Facebook" className="text-[var(--ink-dim)] hover:text-[var(--gold-bright)] transition-colors">
            <Facebook size={18} />
          </a>
          <a href="#" aria-label="Instagram" className="text-[var(--ink-dim)] hover:text-[var(--gold-bright)] transition-colors">
            <Instagram size={18} />
          </a>
          <a href="#" aria-label="YouTube" className="text-[var(--ink-dim)] hover:text-[var(--gold-bright)] transition-colors">
            <Youtube size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
