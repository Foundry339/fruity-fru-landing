// lucide-react no longer ships brand/logo icons, so Instagram + TikTok are
// hand-drawn minimal glyphs here to match the rest of the icon set.
export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.5 2h-3v13.2a2.8 2.8 0 11-2-2.68V9.4a5.8 5.8 0 105.7 5.8V8.1a6.9 6.9 0 004.3 1.5V6.6A4.4 4.4 0 0116.5 2z" />
    </svg>
  );
}
