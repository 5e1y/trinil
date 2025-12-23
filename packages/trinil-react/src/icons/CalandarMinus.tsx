import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const CalandarMinus: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M4 9V7a2 2 0 0 1 2-2h1M4 9v9a2 2 0 0 0 2 2h7.416M4 9h16m0 0V7a2 2 0 0 0-2-2h-1m3 4v4.416M17 5V3.5M17 5H7m10 0v1.5M7 5V3.5M7 5v1.5m13 6.916A5 5 0 0 0 13.416 20M20 13.416A5.001 5.001 0 1 1 13.416 20m2.084-2h5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
CalandarMinus.displayName = 'CalandarMinus';
