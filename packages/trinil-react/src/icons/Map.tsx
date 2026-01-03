import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Map: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M8.25 3.75 2.333 6.709a.15.15 0 0 0-.083.134v13.164a.15.15 0 0 0 .217.134L8.25 17.25m0-13.5v13.5m0-13.5 7.5 3m-7.5 10.5 7.5 3m0-13.5 5.783-2.891a.15.15 0 0 1 .217.134v13.164a.15.15 0 0 1-.083.134L15.75 20.25m0-13.5v13.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Map.displayName = 'Map';
