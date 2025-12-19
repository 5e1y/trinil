import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Adhesive: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M15 9.5c0 1.38-2.686 2.5-6 2.5s-6-1.12-6-2.5m12 0C15 8.12 12.314 7 9 7m6 2.5v5M9 7C5.686 7 3 8.12 3 9.5M9 7h10.698a1 1 0 0 1 .967 1.258l-1.467 5.5a1 1 0 0 1-.966.742H15m-12-5v5C3 15.88 5.686 17 9 17s6-1.12 6-2.5M9 10c.828 0 1.5-.224 1.5-.5S9.828 9 9 9s-1.5.224-1.5.5.672.5 1.5.5Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Adhesive.displayName = 'Adhesive';
