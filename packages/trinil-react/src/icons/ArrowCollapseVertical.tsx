import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const ArrowCollapseVertical: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M21.5 12H15m0 0 3.5 3.5M15 12l3.5-3.5M2.5 12H9m0 0L5.5 8.5M9 12l-3.5 3.5m6.5-11v15"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

ArrowCollapseVertical.displayName = 'ArrowCollapseVertical';
