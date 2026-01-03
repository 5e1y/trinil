import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Component: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M6 15.75 2.25 12 6 8.25 9.75 12zM12 9.75 8.25 6 12 2.25 15.75 6zM12 21.75 8.25 18 12 14.25 15.75 18zM18 15.75 14.25 12 18 8.25 21.75 12z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Component.displayName = 'Component';
