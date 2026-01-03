import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Gear: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M5.106 15.713a2.25 2.25 0 0 0 3.182 3.182l.243-.244q.582.305 1.219.506v.343a2.25 2.25 0 0 0 4.5 0v-.343a7.5 7.5 0 0 0 1.22-.506l.242.243a2.25 2.25 0 1 0 3.182-3.182l-.243-.243q.305-.582.506-1.219h.343a2.25 2.25 0 0 0 0-4.5h-.343a7.5 7.5 0 0 0-.506-1.22l.243-.242a2.25 2.25 0 1 0-3.182-3.182l-.243.243a7.5 7.5 0 0 0-1.219-.506V4.5a2.25 2.25 0 0 0-4.5 0v.343a7.5 7.5 0 0 0-1.22.506l-.242-.243a2.25 2.25 0 1 0-3.182 3.182l.243.243a7.5 7.5 0 0 0-.506 1.219H4.5a2.25 2.25 0 0 0 0 4.5h.343q.2.637.506 1.22z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Gear.displayName = 'Gear';
