const CLIENTS = [
  'Hikkaduwa Cinnamon Resort',
  'Kosgoda Sheraton Hotel',
  'Trincomalee Summer Residency',
];

export default function ClientsMarquee() {
  const loop = [...CLIENTS, ...CLIENTS];
  return (
    <section className="relative border-y border-white/5 bg-[var(--stage-2)] py-6 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee w-max">
        {loop.map((c, i) => (
          <span
            key={i}
            className="mx-8 flex items-center gap-3 text-sm md:text-base tracking-[0.15em] uppercase text-[var(--ink-dim)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
            Now Performing &mdash; {c}
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--stage-2)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--stage-2)] to-transparent" />
    </section>
  );
}
