import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Car: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M15 16.5H9m6 0a2 2 0 1 0 4 0m-4 0a2 2 0 1 1 4 0m-10 0a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0m14 0h1a1 1 0 0 0 1-1v-3.059a2 2 0 0 0-1.367-1.897l-1.24-.413a1 1 0 0 1-.578-.501l-1.539-3.077A1 1 0 0 0 15.382 6H5.618a1 1 0 0 0-.894.553l-.035.069A16 16 0 0 0 3 13.777V15.5a1 1 0 0 0 1 1h1"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Car.displayName = 'Car';
