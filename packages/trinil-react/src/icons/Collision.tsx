import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Collision: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="m15 17 1 2m1-4 2 1M9 7 8 5M7 9 5 8m8 8a5 5 0 1 0-10 0 5 5 0 0 0 10 0Zm8-8a5 5 0 1 0-10 0 5 5 0 0 0 10 0Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Collision.displayName = 'Collision';
