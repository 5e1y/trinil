import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Recycle: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="m20.625 15.375.72 1.198a1.437 1.437 0 0 1-1.233 2.177H9.75m.375-14.625.74-1.232a1.325 1.325 0 0 1 2.27 0l5.24 8.732M5.25 18.75H3.888a1.437 1.437 0 0 1-1.232-2.177l5.219-8.698M9.75 18.75l3-3m-3 3 3 3m5.625-10.125L19.5 7.5m-1.125 4.125L14.25 10.5M7.875 7.875 9 12M7.875 7.875 3.75 9"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Recycle.displayName = 'Recycle';
