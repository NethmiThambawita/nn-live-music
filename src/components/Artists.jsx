import { motion } from 'framer-motion';
import { IconSaxophone, IconViolin, IconVocalsGuitar, IconFlute } from './InstrumentIcons';
import FloatingNotes from './FloatingNotes';

const ARTISTS = [
  {
    icon: IconSaxophone,
    title: 'Saxophone',
    blurb: 'Smoky, soulful lines that drift over dinner sets and sunset cocktail hours alike.',
  },
  {
    icon: IconViolin,
    title: 'Violin',
    blurb: 'Elegant strings for ceremonies, lobby ambience, and romantic candlelit evenings.',
  },
  {
    icon: IconVocalsGuitar,
    title: 'Vocals & Guitar',
    blurb: 'Warm acoustic vocals and guitar covers spanning classics, jazz, and island favourites.',
  },
  {
    icon: IconFlute,
    title: 'Flute',
    blurb: 'Light, airy melodies perfect for beachfront brunches and relaxed poolside afternoons.',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Artists() {
  return (
    <section id="artists" className="relative py-28 md:py-36 px-6 overflow-hidden">
      <FloatingNotes variant="sparse" />
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[0.35em] text-xs text-[var(--gold)] mb-4">Our Sound</p>
          <h2 className="font-display text-4xl md:text-6xl text-[var(--ink)]">
            Four Instruments, <span className="text-shimmer">One Stage</span>
          </h2>
          <p className="mt-5 text-[var(--ink-dim)] max-w-xl mx-auto">
            Mix and match live acts tailored to your venue, event size, and mood.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {ARTISTS.map(({ icon: Icon, title, blurb }) => (
            <motion.div
              key={title}
              variants={item}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-8 text-left overflow-hidden transition-colors hover:border-[var(--gold)]/40"
            >
              <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-[var(--gold)]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <Icon className="w-12 h-12 text-[var(--gold-bright)] mb-6 relative z-10" />
              <h3 className="font-display text-2xl text-[var(--ink)] mb-2 relative z-10">{title}</h3>
              <p className="text-sm text-[var(--ink-dim)] leading-relaxed relative z-10">{blurb}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
