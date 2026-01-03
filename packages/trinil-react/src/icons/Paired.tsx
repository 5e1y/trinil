import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Paired: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M4.5 10.516A4.875 4.875 0 0 0 7.125 19.5h4.5a4.875 4.875 0 1 0 0-9.75h-.375m1.5 4.5h-.375A4.876 4.876 0 0 1 7.5 9.375 4.875 4.875 0 0 1 12.375 4.5h4.5a4.875 4.875 0 0 1 2.625 8.984"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Paired.displayName = 'Paired';
