import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Union: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M16 8V5a1 1 0 0 0-.293-.707M16 8h3c.276 0 .526.112.707.293M16 8l-8 8m0 0H5a1 1 0 0 1-.707-.293M8 16v3c0 .276.112.526.293.707M12 4h3c.276 0 .526.112.707.293M12 4l-8 8m8-8H8m-4 8v3c0 .276.112.526.293.707M4 12V8m0 0V5a1 1 0 0 1 1-1h3M4 8l4-4m12 8V9a1 1 0 0 0-.293-.707M20 12l-8 8m8-8v4m-8 4H9a1 1 0 0 1-.707-.293M12 20h4m0 0h3a1 1 0 0 0 1-1v-3m-4 4 4-4M8.293 19.707 19.707 8.293m-4-4L4.293 15.707"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Union.displayName = 'Union';
