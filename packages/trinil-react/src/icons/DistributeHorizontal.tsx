import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const DistributeHorizontal: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M20 4.5v15M4 4.5v15M13.75 7v10a1 1 0 0 1-1 1h-1.5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.5a1 1 0 0 1 1 1Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

DistributeHorizontal.displayName = 'DistributeHorizontal';
