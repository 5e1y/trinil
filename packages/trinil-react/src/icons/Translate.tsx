import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Translate: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M14 8V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h4m4.5-.5h3m0 0H17m-1.5 0-.375-1.5M17 13.5h1.5m-1.5 0c0 1.228-.377 2.834-1.48 3.89m0 0c-.662-.598-1.08-1.326-1.327-1.89m1.328 1.89c-.604.578-1.425.992-2.521 1.089m2.52-1.09A4.24 4.24 0 0 0 18 18.477M5.714 10l1.461-4.09a1.37 1.37 0 0 1 2.61.084L10.356 8m-4.643 2H8m-2.286 0-.535 1.5M20 21h-9a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1Z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Translate.displayName = 'Translate';
