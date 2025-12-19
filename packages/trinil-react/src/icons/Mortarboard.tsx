import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Mortarboard: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M6 10.833 3.228 9.601a.385.385 0 0 1 0-.703l8.366-3.718a1 1 0 0 1 .812 0l8.365 3.718a.385.385 0 0 1 0 .703L18 10.833m-12 0v5.276a.94.94 0 0 0 .272.672c3.172 3.128 8.284 3.128 11.456 0A.94.94 0 0 0 18 16.11v-5.276m-12 0 2 .89m10-.89-5.594 2.486a1 1 0 0 1-.812 0L8 11.722m0 0L13 9m-5 2.722V15.5"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Mortarboard.displayName = 'Mortarboard';
