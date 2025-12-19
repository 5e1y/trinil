import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const CalandarNumber: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M4 9V7a2 2 0 0 1 2-2h1M4 9v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9M4 9h16m0 0V7a2 2 0 0 0-2-2h-1m0 0V3.5M17 5H7m10 0v1.5M7 5V3.5M7 5v1.5m3 8h-.5m.5 0 .317-.158A1.236 1.236 0 0 0 9.764 12H9.5a1.5 1.5 0 0 0-1.415 1M10 14.5l.317.158A1.236 1.236 0 0 1 9.764 17H9.5a1.5 1.5 0 0 1-1.415-1M16 13.5v2a1.5 1.5 0 0 1-3 0v-2a1.5 1.5 0 0 1 3 0Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

CalandarNumber.displayName = 'CalandarNumber';
