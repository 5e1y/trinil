import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const SnapGrid: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M2.25 17.25v4.5h4.5m-4.5-4.5v-4.5h4.5m-4.5 4.5h4.5m4.5 0v-4.5h-4.5m4.5 4.5v4.5h-4.5m4.5-4.5h-4.5m0 0v-4.5m0 4.5v4.5M16.875 9.375 14.25 12l2.625 2.625L19.5 12m-2.625-2.625a1.591 1.591 0 0 0-2.25-2.25m2.25 2.25L19.5 12m-4.875-4.875L12 9.75 9.375 7.125 12 4.5m2.625 2.625L12 4.5m7.5 7.5.697-.697a5.303 5.303 0 1 0-7.5-7.5L12 4.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
SnapGrid.displayName = 'SnapGrid';
