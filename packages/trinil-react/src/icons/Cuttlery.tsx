import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Cuttlery: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M2.25 3.75v4.5a1.5 1.5 0 0 0 1.5 1.5m1.5-6v4.5a1.5 1.5 0 0 1-1.5 1.5m0 0v10.5m18-6V3.75a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5m0 0v6m-4.5-7.125a4.875 4.875 0 1 0-9.75 0 4.875 4.875 0 0 0 9.75 0"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Cuttlery.displayName = 'Cuttlery';
