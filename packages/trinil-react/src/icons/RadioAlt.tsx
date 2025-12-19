import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const RadioAlt: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M16.5 8.5H4a1 1 0 0 0-1 1V18a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9.5a1 1 0 0 0-1-1zm0 0 4-4m-4 4-4-4m1.5 11h3.5m0 0h1m-1 0V14m0 1.5V17m-6-3.25a3.25 3.25 0 1 0-6.5 0 3.25 3.25 0 0 0 6.5 0Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

RadioAlt.displayName = 'RadioAlt';
