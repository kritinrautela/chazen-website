// Chazen's signature line-art motifs: a moon-gate ring (echoing both a
// traditional Chinese garden threshold and the rim of a Jian Zhan cup) and a
// ripple divider (a stone's circles on water). Both are pure vector line art —
// no imagery dependency — used sparingly per the brand guide's "graphic
// restraint" rule (Part IV, Section 41): support meaning, never decorate.

export function MoonGateMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 600 600"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="300" cy="300" r="272" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.55" />
      <circle cx="300" cy="300" r="240" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.28" />
      <circle cx="300" cy="300" r="1.5" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

export function RippleDivider({ className, label }: { className?: string; label?: string }) {
  return (
    <div className={`chazen-ripple-divider${className ? ` ${className}` : ""}`} role="separator" aria-hidden="true">
      <svg viewBox="0 0 960 64" preserveAspectRatio="none" focusable="false">
        <line x1="0" y1="32" x2="410" y2="32" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        <line x1="550" y1="32" x2="960" y2="32" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        <circle cx="480" cy="32" r="9" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.75" />
        <circle cx="480" cy="32" r="20" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.45" />
        <circle cx="480" cy="32" r="31" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.22" />
      </svg>
      {label ? <span>{label}</span> : null}
    </div>
  );
}
