import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const ListNumbered: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M10.5 3.75h11.25M10.5 12h11.25M10.5 20.25h11.25M2.25 3.75l2.25-1.5v7.5m0 0h2.25m-2.25 0H2.25m4.5 12h-4.5l3.879-3.879a2.121 2.121 0 0 0-1.5-3.621H4.5a2.25 2.25 0 0 0-2.25 2.25"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
ListNumbered.displayName = 'ListNumbered';
