import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const KeyframeHoldLinearIn: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M11.997 3.75h8.253a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-8.253m0-16.5h-1.629a1.5 1.5 0 0 0-1.06.44l-6.75 6.75a1.5 1.5 0 0 0 0 2.12l6.75 6.75a1.5 1.5 0 0 0 1.06.44h1.629m0-16.5v16.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
KeyframeHoldLinearIn.displayName = 'KeyframeHoldLinearIn';
