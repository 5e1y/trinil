import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const H3: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M2.25 20.25V12m0 0V3.75m0 8.25h10.5m0 8.25V12m0 0V3.75m7.5 12.75h-.75m.75 0s1.5 0 1.5 1.875-2.25 1.875-2.25 1.875-2.25 0-2.25-1.875m3-1.875s1.5 0 1.5-1.875c0-1.918-2.25-1.875-2.25-1.875s-2.25 0-2.25 1.875"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
H3.displayName = 'H3';
