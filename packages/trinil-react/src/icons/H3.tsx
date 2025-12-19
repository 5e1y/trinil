import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const H3: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M5 4.5V12m0 0v7.5M5 12h9m0 0V4.5m0 7.5v7.5m5-2.5h-.5m.5 0 .317-.158a1.236 1.236 0 0 0-.553-2.342H18.5a1.5 1.5 0 0 0-1.415 1M19 17l.317.158a1.236 1.236 0 0 1-.553 2.342H18.5a1.5 1.5 0 0 1-1.415-1"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

H3.displayName = 'H3';
