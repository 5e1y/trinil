import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Wheelchair: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M6 9.566a6 6 0 1 0 9.561 3.184M6 9.566a6.003 6.003 0 0 1 9.561 3.184M6 9.566V5.25a1.5 1.5 0 0 0-1.5-1.5H2.25m13.311 9h3.189a1.5 1.5 0 0 1 1.5 1.5v3m0 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m-9.75-3a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Wheelchair.displayName = 'Wheelchair';
