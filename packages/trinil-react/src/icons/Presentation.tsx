import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Presentation: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M2.25 18h1.5m0 0V7.5A1.5 1.5 0 0 1 5.25 6h4.846M3.75 18h2.654m13.846 0h1.5m-1.5 0V7.5a1.5 1.5 0 0 0-1.5-1.5h-4.846m6.346 12h-2.654m0 0 1.154 3.75M17.596 18H6.404m0 0L5.25 21.75M10.096 6l.933-3.033a1.016 1.016 0 0 1 1.942 0L13.904 6m-3.808 0h3.808"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Presentation.displayName = 'Presentation';
