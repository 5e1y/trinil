import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const ArrowRotateLeft: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M20 12A8 8 0 0 0 5.577 7.23m0 0L5.5 3m.077 4.23H10M4 12a8 8 0 0 0 14.423 4.77m0 0L18.5 21m-.077-4.23H14"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

ArrowRotateLeft.displayName = 'ArrowRotateLeft';
