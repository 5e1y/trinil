import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const ArrowsVertical: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="m12 2.25-4.5 4.5m4.5-4.5 4.5 4.5M12 2.25v19.5m0 0 4.5-4.5m-4.5 4.5-4.5-4.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
ArrowsVertical.displayName = 'ArrowsVertical';
