import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const GraphBarsLarge: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M2.25 3.75v15a1.5 1.5 0 0 0 1.5 1.5h18m-16.5-3h3v-6h-3zm6 0v-9h3v9zm6 0h3V3.75h-3z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
GraphBarsLarge.displayName = 'GraphBarsLarge';
