import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Route: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M15 5.5a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm0 0H8.25a3.25 3.25 0 1 0 0 6.5h8.5a3.25 3.25 0 0 1 0 6.5H8m0 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Route.displayName = 'Route';
