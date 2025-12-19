import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Key: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M15 11.5V15m0-3.5h2.5m-2.5 0h-5m7.5 0V14m0-2.5H20m0 0h1.5m-1.5 0V15m-10-3.5a3.5 3.5 0 1 0-7 0 3.5 3.5 0 0 0 7 0Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Key.displayName = 'Key';
