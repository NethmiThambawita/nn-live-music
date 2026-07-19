import { motion } from 'framer-motion';
import { PlayCircle, ImagePlus } from 'lucide-react';
import { IconSaxophone, IconViolin, IconVocalsGuitar, IconFlute } from './InstrumentIcons';

const TILES = [
  { icon: IconSaxophone, label: 'Sunset Sax Set', grad: 'from-[#5a3a1e] to-[#1a1206]' },
  { icon: IconVocalsGuitar, label: 'Acoustic Evening', grad: 'from-[#3a2a52] to-[#160f24]' },
  { icon: IconViolin, label: 'Ceremony Strings', grad: 'from-[#402a1c] to-[#160f0a]' },
  { icon: IconFlute, label: 'Poolside Flute', grad: 'from-[#2a3a3f] to-[#0d1416]' },
  { icon: IconVocalsGuitar, label: 'Live at Kosgoda', grad: 'from-[#4a2f1a] to-[#160e07]' },
  { icon: IconSaxophone, label: 'Trinco Summer Nights', grad: 'from-[#33244a] to-[#120c1e]' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-28 md:py-36 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[0.35em] text-xs text-[var(--gold)] mb-4">Gallery</p>
          <h2 className="font-display text-4xl md:text-6xl text-[var(--ink)]">
            Moments <span className="text-shimmer">On Stage</span>
          </h2>
          <p className="mt-5 text-[var(--ink-dim)] max-w-xl mx-auto flex items-center justify-center gap-2 text-sm">
            <ImagePlus size={16} className="text-[var(--gold)]" />
            Photo &amp; video reel coming soon &mdash; placeholders shown below
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {TILES.map(({ icon: Icon, label, grad }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className={`group relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br ${grad} border border-white/10 flex items-center justify-center cursor-pointer`}
            >
              <Icon className="w-10 h-10 md:w-14 md:h-14 text-[var(--gold)]/40 group-hover:text-[var(--gold)]/60 transition-colors" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
                <PlayCircle className="text-[var(--gold-bright)]" size={34} />
                <span className="text-xs tracking-wide text-[var(--ink)]">{label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
