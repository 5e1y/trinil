import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const ArrowMaximize: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M21 3v6m0-6h-6m6 0-6 6M9 3H3m0 0v6m0-6 6 6m-6 6v6m0 0h6m-6 0 6-6m12 6v-6m0 6-6-6m6 6h-6"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
ArrowMaximize.displayName = 'ArrowMaximize';
