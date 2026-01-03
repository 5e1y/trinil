import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Stopwatch: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M12 5.25v-3m0 3c1.983 0 3.802.7 5.224 1.865M12 5.25c-1.982 0-3.802.7-5.224 1.865a8.25 8.25 0 1 0 10.449 0M12 2.25H9m3 0h3M8.25 12 12 15l4.5-3.75m.724-4.135L18.75 5.25"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Stopwatch.displayName = 'Stopwatch';
