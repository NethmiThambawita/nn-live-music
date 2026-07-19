import { Music, Music2, Music3, Music4 } from 'lucide-react';

const icons = [Music, Music2, Music3, Music4];

const notes = [
  { top: '12%', left: '8%', size: 28, delay: '0s', slow: false },
  { top: '68%', left: '4%', size: 20, delay: '1.2s', slow: true },
  { top: '22%', left: '92%', size: 24, delay: '0.6s', slow: true },
  { top: '78%', left: '90%', size: 32, delay: '2s', slow: false },
  { top: '45%', left: '15%', size: 16, delay: '0.3s', slow: true },
  { top: '85%', left: '55%', size: 20, delay: '1.6s', slow: false },
  { top: '10%', left: '55%', size: 18, delay: '0.9s', slow: true },
];

export default function FloatingNotes({ className = '' }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {notes.map((n, i) => {
        const Icon = icons[i % icons.length];
        return (
          <Icon
            key={i}
            className={`absolute text-[var(--gold)] opacity-20 ${n.slow ? 'animate-drift-slow' : 'animate-drift'}`}
            style={{ top: n.top, left: n.left, width: n.size, height: n.size, animationDelay: n.delay }}
          />
        );
      })}
    </div>
  );
}
