import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const StopwatchPlus: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M12 5.25v-3m0 3c1.983 0 3.802.7 5.224 1.865M12 5.25c-1.982 0-3.802.7-5.224 1.865A8.25 8.25 0 0 0 12 21.75m0-19.5H9m3 0h3M8.25 12 12 15l4.5-3.75m.724-4.135L18.75 5.25m-1.526 1.865a8.25 8.25 0 0 1 2.796 4.442M18.375 22.5v-4.125m0 0V14.25m0 4.125H22.5m-4.125 0H14.25"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
StopwatchPlus.displayName = 'StopwatchPlus';
