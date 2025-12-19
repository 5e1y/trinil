import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Graph: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M6 8.5h2.838a3 3 0 0 1 2.846 2.051l.18.542m0 0 1.673 5.018c.575 1.725 2.908 1.98 3.843.422a2.13 2.13 0 0 1 1.825-1.033H20m-8.136-4.407-1.977 3.042A3 3 0 0 1 7.372 15.5H6m5.864-4.407 2.749-4.228A3 3 0 0 1 17.128 5.5H20M4 4v15a1 1 0 0 0 1 1h15"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Graph.displayName = 'Graph';
