import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Cloth3d: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      vectorEffect="non-scaling-stroke"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label={ariaLabel}
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="m3.716 7.856 3.999-3.6A1 1 0 0 1 8.384 4h1.044c.043 0 .081.027.098.067.126.29.729 1.433 2.474 1.433s2.348-1.142 2.474-1.433A.11.11 0 0 1 14.572 4h1.044a1 1 0 0 1 .67.257l3.999 3.599a1 1 0 0 1 .099 1.384L19.2 10.659a1 1 0 0 1-1.475.067l-.555-.555a.1.1 0 0 0-.17.07V19a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1L7 10.241a.1.1 0 0 0-.17-.07l-.556.555a1 1 0 0 1-1.475-.067l-1.183-1.42a1 1 0 0 1 .1-1.383Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Cloth3d.displayName = 'Cloth3d';
