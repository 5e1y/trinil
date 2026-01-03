import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const BakeAnimation: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M6.75 3H4.5A1.5 1.5 0 0 0 3 4.5v2.25M17.25 3h2.25A1.5 1.5 0 0 1 21 4.5v2.25M3 17.25v2.25A1.5 1.5 0 0 0 4.5 21h2.25m.748-3.803.002.053a.75.75 0 1 1-.002-.053m0 0a5.26 5.26 0 0 0 4.02-2.998m0 0a2.25 2.25 0 0 1 .963-4.397m-.962 4.397q.233.05.481.051a2.25 2.25 0 0 0 .481-4.448m4.02-3L16.5 6.75a.75.75 0 1 1 .002.053m0 0a5.26 5.26 0 0 0-4.02 3M18.375 22.5v-4.125m0 0V14.25m0 4.125H22.5m-4.125 0H14.25"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
BakeAnimation.displayName = 'BakeAnimation';
