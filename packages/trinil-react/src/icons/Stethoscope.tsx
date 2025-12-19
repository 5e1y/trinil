import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Stethoscope: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="m10 5 1.445-.964A1 1 0 0 1 13 4.868V11a5 5 0 0 1-5 5M6 5l-1.445-.964A1 1 0 0 0 3 4.868V11a5 5 0 0 0 5 5m0 0v.236A3.764 3.764 0 0 0 11.764 20a6.736 6.736 0 0 0 6.736-6.736V12m0 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Stethoscope.displayName = 'Stethoscope';
