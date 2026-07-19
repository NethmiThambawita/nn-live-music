import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const LINKS = [
  { href: '#artists', label: 'Artists' },
  { href: '#venues', label: 'Venues' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Booking' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        scrolled ? 'bg-[#07070a]/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 flex items-center justify-between h-20">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="font-display text-2xl md:text-3xl tracking-wide text-[var(--gold-bright)]">
            N&nbsp;&amp;&nbsp;N
          </span>
          <span className="hidden sm:block text-[10px] tracking-[0.3em] uppercase text-[var(--ink-dim)] mt-1">
            Live Music
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-wide text-[var(--ink-dim)] hover:text-[var(--gold-bright)] transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--gold)] transition-all group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-[var(--gold)]/60 px-5 py-2 text-sm text-[var(--gold-bright)] hover:bg-[var(--gold)] hover:text-[#1a1206] transition-colors"
          >
            Enquire Now
          </a>
        </nav>

        <button
          className="md:hidden text-[var(--gold-bright)]"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden bg-[#07070a]/95 backdrop-blur-md border-b border-white/5 px-6 pb-6 flex flex-col gap-4"
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[var(--ink-dim)] hover:text-[var(--gold-bright)] py-2 text-sm tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
