// Minimal gold line-art icons matching the site's engraved-brass aesthetic.
const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function IconSaxophone(props) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M18 6h6a3 3 0 0 1 3 3v3h7a5 5 0 0 1 5 5v3a5 5 0 0 1-5 5h-6v10a6 6 0 1 1-4-5.66" />
      <path d="M18 6v22" />
      <circle cx="16" cy="34" r="2.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconViolin(props) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <circle cx="24" cy="8" r="2.4" />
      <path d="M24 10.4v13.6" />
      <path d="M20 24c-3 3-3 7 0 9-3 2-3 7 0 9 2 2 5 3 4 6 0 2 1.8 3 4 3s4-1 4-3c-1-3 2-4 4-6 3-2 3-7 0-9 3-2 3-6 0-9-2.5-2.5-6-1.4-8-1.4S22.5 21.5 20 24Z" />
      <path d="M21.5 30q-1.4 2 0 4M26.5 34q1.4 2 0 4" />
    </svg>
  );
}

export function IconVocalsGuitar(props) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <rect x="20.5" y="5" width="7" height="4.5" rx="1.2" />
      <path d="M19 6.5h-2.5M29 6.5h2.5M19 9h-2.5M29 9h2.5" />
      <path d="M24 9.5v13" />
      <path d="M17 22c-2.5 3-2.5 6.5 0 9-3 2-3 7.5 1.5 10.5 3 2 8.5 2 11.5 0 4.5-3 4.5-8.5 1.5-10.5 2.5-2.5 2.5-6 0-9-2.5-2-6-2-7.25-2S19.5 20 17 22Z" />
      <circle cx="24" cy="32" r="3.4" />
    </svg>
  );
}

export function IconFlute(props) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M8 30 34 12" />
      <circle cx="12.3" cy="27.2" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="16.6" cy="24.3" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="20.9" cy="21.4" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="25.2" cy="18.5" r="1.1" fill="currentColor" stroke="none" />
      <path d="M30 15.3 40 22a4 4 0 1 1-5.7 5.7L28 18" />
    </svg>
  );
}
