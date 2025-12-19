import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const UserGroupPlus: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M9 9a6 6 0 0 0-4.416 10.062M9 9a6 6 0 1 1 10.416 4.062M9 9c1.78 0 3.378.775 4.477 2.005M9 17a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0 0h1.333c1.1 0 2.076.533 2.683 1.355M9 17H7.667c-1.391 0-2.583.852-3.083 2.062m0 0A5.98 5.98 0 0 0 9 21a5.98 5.98 0 0 0 4.174-1.69M15 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0 0h1.333c1.391 0 2.583.852 3.083 2.062M15 11h-1.333q-.096 0-.19.005m5.939 2.057-.105.112m-5.834-2.169a6 6 0 0 1 1.45 3.051M18 18v-2.5m0 2.5h2.5M18 18v2.5m0-2.5h-2.5m3.81-4.826a5 5 0 0 0-4.384.882m4.385-.882a5 5 0 1 1-6.137 6.137m0 0a5.01 5.01 0 0 1 1.752-5.255"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

UserGroupPlus.displayName = 'UserGroupPlus';
