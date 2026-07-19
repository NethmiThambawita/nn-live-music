import { motion } from 'framer-motion';
import { ChevronDown, PlayCircle } from 'lucide-react';
import FloatingNotes from './FloatingNotes';

const BAR_HEIGHTS = [40, 70, 50, 90, 60, 35, 80, 55, 65, 45];

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#241a30_0%,_#07070a_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,_rgba(232,185,105,0.12),_transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,_rgba(111,79,176,0.18),_transparent_40%)]" />
      <FloatingNotes />

      {/* stage light beams */}
      <div className="absolute -top-20 left-1/4 w-40 h-[140%] bg-gradient-to-b from-[var(--gold)]/10 to-transparent rotate-12 blur-2xl animate-glow" />
      <div className="absolute -top-20 right-1/4 w-40 h-[140%] bg-gradient-to-b from-[var(--violet)]/15 to-transparent -rotate-12 blur-2xl animate-glow" style={{ animationDelay: '1.5s' }} />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="uppercase tracking-[0.4em] text-xs md:text-sm text-[var(--gold)] mb-6"
        >
          Live Instrumental &amp; Vocal Entertainment
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="font-display text-5xl sm:text-6xl md:text-8xl leading-[1.05] text-shimmer"
        >
          N &amp; N Live Music
          <br />
          &amp; Entertainment
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-base md:text-lg text-[var(--ink-dim)] max-w-2xl mx-auto leading-relaxed"
        >
          Saxophone, Violin, Vocals &amp; Guitar, and Flute — soulful live
          performances curated for Sri Lanka&rsquo;s finest resorts, hotels
          and private events.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-5"
        >
          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-[var(--brass)] to-[var(--gold-bright)] px-8 py-3.5 text-sm md:text-base font-medium text-[#1a1206] shadow-[0_0_30px_rgba(232,185,105,0.35)] hover:shadow-[0_0_45px_rgba(232,185,105,0.55)] transition-shadow"
          >
            Book a Performance
          </a>
          <a
            href="#gallery"
            className="flex items-center gap-2 text-sm md:text-base text-[var(--ink)] hover:text-[var(--gold-bright)] transition-colors"
          >
            <PlayCircle size={22} className="text-[var(--gold-bright)]" />
            Watch Highlights
          </a>
        </motion.div>

        {/* equalizer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-16 flex items-end justify-center gap-1.5 h-16 mx-auto w-fit"
        >
          {BAR_HEIGHTS.map((h, i) => (
            <span
              key={i}
              className="eq-bar w-1.5 md:w-2 rounded-full bg-gradient-to-t from-[var(--brass)] to-[var(--gold-bright)]"
              style={{ height: `${h}%`, animationDelay: `${i * 0.09}s` }}
            />
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#artists"
        aria-label="Scroll to artists"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { delay: 1.2, duration: 0.6 }, y: { repeat: Infinity, duration: 2, ease: 'easeInOut' } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--gold)]"
      >
        <ChevronDown size={28} />
      </motion.a>
    </section>
  );
}
