import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Curve: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M3 21c0-4.162 1.413-7.994 3.784-11.043m0 0a2.25 2.25 0 1 1 3.173-3.173M6.784 9.957a2.25 2.25 0 0 0 3.173-3.173m0 0A17.92 17.92 0 0 1 21 3"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Curve.displayName = 'Curve';
