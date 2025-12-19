import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const UserGroup: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M15 15c0 1.567-.6 2.994-1.584 4.062M15 15c1.747 0 3.32-.746 4.416-1.938M15 15a5.98 5.98 0 0 0-1.523-3.995M9 9a6 6 0 0 0-4.416 10.062M9 9a6 6 0 1 1 10.416 4.062M9 9c1.78 0 3.378.775 4.477 2.005M9 17a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0 0h1.333c1.391 0 2.583.852 3.083 2.062M9 17H7.667c-1.391 0-2.583.852-3.083 2.062m8.832 0A5.98 5.98 0 0 1 9 21a5.98 5.98 0 0 1-4.416-1.938M15 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0 0h1.333c1.391 0 2.583.852 3.083 2.062M15 11h-1.333q-.096 0-.19.005"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

UserGroup.displayName = 'UserGroup';
