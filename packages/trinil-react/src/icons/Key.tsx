import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Key: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M7.5 11.25a5.25 5.25 0 1 0 4.386 2.364L17.25 8.25l2.25 2.25 2.25-2.25L19.5 6 21 4.5l-2.25-2.25-9.353 9.353A5.2 5.2 0 0 0 7.5 11.25m-.75 5.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5" clip-rule="evenodd"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Key.displayName = 'Key';
