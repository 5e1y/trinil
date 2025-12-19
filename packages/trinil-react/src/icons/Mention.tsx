import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Mention: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M15.525 14c-.298 1.417.475 2.5 1.475 2.5 1.655 0 3.122-1.174 3.784-3.523.18-.64.216-1.312.216-1.977a8 8 0 0 0-8-8h-1a9 9 0 1 0 5 16.485M15.524 14l.407-1.926M15.525 14l.384-1.816.021-.11M15.526 14l.123-.588m.283-1.338.01-.055m-.01.055.964-4.574m-1.247 5.912.292-1.393m-.292 1.393A3.886 3.886 0 1 1 8.05 11.77l.274-1.232a3.88 3.88 0 0 1 7.615 1.48m0 0L16.573 9"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Mention.displayName = 'Mention';
