interface IconProps {
  className?: string;
}

export function HomeIcon({ className = "w-10 h-10" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
      <path d="M8 24 L24 10 L40 24" />
      <path d="M12 22 L12 38 L36 38 L36 22" />
      <path d="M20 38 L20 28 L28 28 L28 38" />
    </svg>
  );
}

export function BuildingIcon({ className = "w-10 h-10" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
      <rect x="10" y="8" width="28" height="32" />
      <line x1="10" y1="16" x2="38" y2="16" />
      <line x1="10" y1="24" x2="38" y2="24" />
      <line x1="10" y1="32" x2="38" y2="32" />
      <line x1="18" y1="8" x2="18" y2="40" />
      <line x1="30" y1="8" x2="30" y2="40" />
    </svg>
  );
}

export function InteriorIcon({ className = "w-10 h-10" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
      <path d="M8 38 L8 28 Q8 22 14 22 L34 22 Q40 22 40 28 L40 38" />
      <line x1="6" y1="38" x2="42" y2="38" />
      <path d="M6 22 L6 14" />
      <path d="M42 22 L42 14" />
      <line x1="16" y1="22" x2="16" y2="38" />
      <line x1="32" y1="22" x2="32" y2="38" />
    </svg>
  );
}

export function RenovationIcon({ className = "w-10 h-10" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
      <circle cx="24" cy="24" r="14" strokeDasharray="4 3" />
      <path d="M18 30 L18 18 L30 18 L30 30 Z" />
      <path d="M22 18 L22 14" />
      <path d="M26 18 L26 14" />
      <path d="M24 24 L24 24.01" strokeWidth="2" />
    </svg>
  );
}
