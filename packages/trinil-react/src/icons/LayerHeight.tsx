import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const LayerHeight: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M2.25 20.25h6m0 0a1.5 1.5 0 0 0 0-3h-6m6 3h1.5m0 0a3 3 0 1 0 0-6h-7.5m7.5 6h1.5a4.5 4.5 0 1 0 0-9h-9m16.5 9V3.75m0 0-3 3m3-3 3 3"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
LayerHeight.displayName = 'LayerHeight';
