import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const MaterialSlot: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M21 6.75V4.5A1.5 1.5 0 0 0 19.5 3h-2.25M6.75 3H4.5A1.5 1.5 0 0 0 3 4.5v2.25m0 10.5v2.25A1.5 1.5 0 0 0 4.5 21h2.25m10.5 0h2.25a1.5 1.5 0 0 0 1.5-1.5v-2.25M15.75 12A3.75 3.75 0 0 1 12 15.75m0 3a6.75 6.75 0 1 1 0-13.5 6.75 6.75 0 0 1 0 13.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
MaterialSlot.displayName = 'MaterialSlot';
