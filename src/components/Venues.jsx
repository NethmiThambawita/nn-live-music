import { motion } from 'framer-motion';
import { MapPin, Sun, Sparkles } from 'lucide-react';
import FloatingNotes from './FloatingNotes';

const VENUES = [
  {
    name: 'Hikkaduwa Cinnamon Resort',
    place: 'Hikkaduwa, Sri Lanka',
    tag: 'Resident Performances',
  },
  {
    name: 'Kosgoda Sheraton Hotel',
    place: 'Kosgoda, Sri Lanka',
    tag: 'Resident Performances',
  },
];

export default function Venues() {
  return (
    <section id="venues" className="relative py-28 md:py-36 px-6 bg-[var(--stage-2)] overflow-hidden">
      <FloatingNotes variant="sparse" />
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[0.35em] text-xs text-[var(--gold)] mb-4">Where We Play</p>
          <h2 className="font-display text-4xl md:text-6xl text-[var(--ink)]">
            Trusted by <span className="text-shimmer">Leading Resorts</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {VENUES.map((v, i) => (
            <motion.div
              key={v.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-8 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_top_right,_rgba(232,185,105,0.12),_transparent_60%)]" />
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--gold)] mb-4">
                <span className="w-2 h-2 rounded-full bg-[var(--gold-bright)] animate-pulse" />
                {v.tag}
              </div>
              <h3 className="font-display text-3xl text-[var(--ink)] mb-2">{v.name}</h3>
              <p className="flex items-center gap-2 text-sm text-[var(--ink-dim)]">
                <MapPin size={14} className="text-[var(--gold)]" />
                {v.place}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trincomalee summer residency highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative rounded-2xl border border-[var(--gold)]/30 bg-gradient-to-r from-[var(--brass)]/15 via-[var(--gold)]/10 to-transparent p-8 md:p-10 overflow-hidden"
        >
          <div className="absolute -right-10 -bottom-10 opacity-10">
            <Sun size={180} className="text-[var(--gold-bright)]" />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
            <div className="flex-shrink-0 flex items-center gap-3 text-[var(--gold-bright)]">
              <Sparkles size={28} className="animate-glow" />
              <span className="uppercase tracking-[0.25em] text-xs">Mid-Year Summer Residency</span>
            </div>
            <div>
              <h3 className="font-display text-3xl md:text-4xl text-[var(--ink)] mb-2">
                Trincomalee Hotels
              </h3>
              <p className="text-[var(--ink-dim)] max-w-2xl">
                Every summer, N&nbsp;&amp;&nbsp;N takes the stage across Trincomalee&rsquo;s
                hotel scene &mdash; bringing saxophone, violin, vocals &amp; guitar and
                flute performances to the island&rsquo;s east coast.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
