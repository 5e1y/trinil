import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const LetterOpen: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M21.75 8.25v10.5a1.5 1.5 0 0 1-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5V8.25m19.5 0-1.5.808m1.5-.808-1.5-.75m-18 .75 1.5.808m-1.5-.808 1.5-.75m16.5 1.558V7.5m0 1.558L12 13.5 3.75 9.058m0 0V7.5m0 0V3.75h16.5V7.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
LetterOpen.displayName = 'LetterOpen';
