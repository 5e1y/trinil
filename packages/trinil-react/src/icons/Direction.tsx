import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Direction: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M12 21h9V3H3v18zm0 0v-6.75m6-6h-3a3 3 0 0 0-3 3v3m6-6L15.75 6M18 8.25l-2.25 2.25M12 14.25H6m0 0L8.25 12M6 14.25l2.25 2.25"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Direction.displayName = 'Direction';
