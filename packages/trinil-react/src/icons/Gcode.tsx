import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Gcode: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M20.25 9.75h-6a1.5 1.5 0 0 1-1.5-1.5v-6m7.5 7.5-7.5-7.5m7.5 7.5v3m-7.5-10.5h-7.5a1.5 1.5 0 0 0-1.5 1.5v9m6.75 3.75-3 3 3 3m3 0 3-6m3 0 3 3-3 3M3.75 20.25h.75V21a1.5 1.5 0 0 1-3 0v-3a1.5 1.5 0 0 1 3 0"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Gcode.displayName = 'Gcode';
