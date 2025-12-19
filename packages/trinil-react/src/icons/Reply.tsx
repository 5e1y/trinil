import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Reply: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M16 13a3 3 0 0 0-3-3H8m0 0 2.5-2.5M8 10l2.5 2.5M9 4.5h6a6 6 0 0 1 2.651 11.384c-.38.188-.652.559-.588.978.09.59.307 1.432.837 2.031.062.07.1.16.1.253a.34.34 0 0 1-.354.346c-2.565-.118-3.805-1.506-4.325-2.35-.226-.366-.611-.642-1.042-.642H9a6 6 0 0 1 0-12Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Reply.displayName = 'Reply';
