import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Road: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M5 21v-6C5 9.477 9.477 5 15 5h6m0 8h-6a2 2 0 0 0-2 2v6m-4 0v-2m0-2v-2m.341-2a6 6 0 0 1 1.004-1.786m1.515-1.328A6 6 0 0 1 14 9.083M16 9h2m2 0h1"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Road.displayName = 'Road';
