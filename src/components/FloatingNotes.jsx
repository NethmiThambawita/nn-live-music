const notes = [
  { top: '12%', left: '8%', size: 34, delay: '0s', slow: false, emoji: '🎷' },
  { top: '68%', left: '5%', size: 26, delay: '1.2s', slow: true, emoji: '🎻' },
  { top: '20%', left: '90%', size: 30, delay: '0.6s', slow: true, emoji: '🎸' },
  { top: '76%', left: '89%', size: 32, delay: '2s', slow: false, emoji: '🎷' },
  { top: '46%', left: '5%', size: 22, delay: '0.3s', slow: true, emoji: '🎵' },
  { top: '85%', left: '52%', size: 24, delay: '1.6s', slow: false, emoji: '🪈' },
  { top: '8%', left: '52%', size: 20, delay: '0.9s', slow: true, emoji: '🎶' },
  { top: '38%', left: '94%', size: 22, delay: '1.4s', slow: false, emoji: '🎻' },
];

export default function FloatingNotes({ className = '' }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {notes.map((n, i) => (
        <span
          key={i}
          className={`absolute opacity-70 drop-shadow-[0_0_12px_rgba(232,185,105,0.35)] ${n.slow ? 'animate-drift-slow' : 'animate-drift'}`}
          style={{ top: n.top, left: n.left, fontSize: n.size, animationDelay: n.delay, lineHeight: 1 }}
        >
          {n.emoji}
        </span>
      ))}
    </div>
  );
}
