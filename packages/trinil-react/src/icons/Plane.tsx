import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Plane: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="m3.125 11.917 8.32-5.547a1 1 0 0 1 1.11 0l8.32 5.547a.1.1 0 0 1 0 .166l-8.32 5.547a1 1 0 0 1-1.11 0l-8.32-5.547a.1.1 0 0 1 0-.166Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Plane.displayName = 'Plane';
