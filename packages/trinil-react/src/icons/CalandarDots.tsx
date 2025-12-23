import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const CalandarDots: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M4 9V7a2 2 0 0 1 2-2h1M4 9v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9M4 9h16m0 0V7a2 2 0 0 0-2-2h-1m0 0V3.5M17 5H7m10 0v1.5M7 5V3.5M7 5v1.5m0 6v.5m5-.5v.5m-2.5-.5v.5m5-.5v.5m2.5-.5v.5M7 16v.5m5-.5v.5M9.5 16v.5m5-.5v.5M17 16v.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
CalandarDots.displayName = 'CalandarDots';
