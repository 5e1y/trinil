import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const SubdivisionSurface: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M12 13.5v3.75M14.25 10l3.375-1.5M9.75 10 6.375 8.5m4.407-4.959-6 2.667A3 3 0 0 0 3 8.949v6.101a3 3 0 0 0 1.782 2.742l6 2.666a3 3 0 0 0 2.436 0l6-2.666A3 3 0 0 0 21 15.05v-6.1a3 3 0 0 0-1.782-2.742l-6-2.667a3 3 0 0 0-2.436 0Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

SubdivisionSurface.displayName = 'SubdivisionSurface';
