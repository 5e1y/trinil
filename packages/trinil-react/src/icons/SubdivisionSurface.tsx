import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const SubdivisionSurface: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="m14.25 11.437 3.375-1.968M9.8 11.466 6.5 9.541M12 15v3.375M3 9.223v5.554a3 3 0 0 0 1.488 2.591l6 3.5a3 3 0 0 0 3.024 0l6-3.5A3 3 0 0 0 21 14.777V9.223a3 3 0 0 0-1.488-2.591l-6-3.5a3 3 0 0 0-3.024 0l-6 3.5A3 3 0 0 0 3 9.223"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
SubdivisionSurface.displayName = 'SubdivisionSurface';
