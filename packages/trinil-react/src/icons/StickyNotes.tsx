import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const StickyNotes: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M9.75 21h6a1.5 1.5 0 0 0 1.5-1.5V8.25a1.5 1.5 0 0 0-1.5-1.5H4.5A1.5 1.5 0 0 0 3 8.25v6M9.75 21v-5.25a1.5 1.5 0 0 0-1.5-1.5H3M9.75 21 3 14.25m3.2-10.5A1.5 1.5 0 0 1 7.5 3h12A1.5 1.5 0 0 1 21 4.5v11.25a1.5 1.5 0 0 1-.75 1.3"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
StickyNotes.displayName = 'StickyNotes';
