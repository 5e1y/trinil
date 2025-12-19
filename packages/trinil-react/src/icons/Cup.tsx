import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Cup: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M7.117 3h9.766a1 1 0 0 1 .994 1.11l-1.778 16a1 1 0 0 1-.994.89h-6.21a1 1 0 0 1-.994-.89l-1.778-16A1 1 0 0 1 7.117 3Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Cup.displayName = 'Cup';
