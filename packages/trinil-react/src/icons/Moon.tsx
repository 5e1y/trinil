import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Moon: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M10.5 21.75c5.385 0 9.75-4.365 9.75-9.75s-4.365-9.75-9.75-9.75a9.7 9.7 0 0 0-5.778 1.896c-.478.352-.065 1.104.528 1.104a6.75 6.75 0 1 1 0 13.5c-.593 0-1.006.752-.528 1.104A9.7 9.7 0 0 0 10.5 21.75"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Moon.displayName = 'Moon';
