import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Sparkle: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M18 21.75A4.56 4.56 0 0 0 14.25 18 4.56 4.56 0 0 0 18 14.25 4.56 4.56 0 0 0 21.75 18 4.56 4.56 0 0 0 18 21.75M10.029 15.577 9.75 17.25l-.279-1.673a6.75 6.75 0 0 0-5.548-5.548L2.25 9.75l1.673-.279A6.75 6.75 0 0 0 9.47 3.923L9.75 2.25l.279 1.673a6.75 6.75 0 0 0 5.548 5.548l1.673.279-1.673.279a6.75 6.75 0 0 0-5.548 5.548"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Sparkle.displayName = 'Sparkle';
