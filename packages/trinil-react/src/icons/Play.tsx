import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Play: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="m6.751 2.456 14.255 8.246a1.5 1.5 0 0 1 0 2.597l-14.255 8.25A1.5 1.5 0 0 1 4.5 20.25V3.754a1.5 1.5 0 0 1 2.251-1.298"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Play.displayName = 'Play';
