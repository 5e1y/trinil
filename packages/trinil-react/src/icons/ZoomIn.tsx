import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const ZoomIn: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M8.197 15.803A7.5 7.5 0 1 0 18.804 5.196 7.5 7.5 0 0 0 8.196 15.804m0 0L3 21M13.5 6.75v3.75m0 0v3.75m0-3.75h3.75m-3.75 0H9.75"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
ZoomIn.displayName = 'ZoomIn';
