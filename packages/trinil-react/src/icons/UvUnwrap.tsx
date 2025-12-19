import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const UvUnwrap: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M16.5 8.5V11m0-2.5a1 1 0 0 1 1-1H20a1 1 0 0 1 1 1V11a1 1 0 0 1-1 1h-2.5a1 1 0 0 1-1-1m0-2.5a1 1 0 0 0-1-1H13a1 1 0 0 0-1 1m4.5 2.5a1 1 0 0 1-1 1H13a1 1 0 0 1-1-1m0-2.5V11m0-2.5a1 1 0 0 0-1-1m1 3.5a1 1 0 0 1-1 1M7.5 8.5V11m0-2.5a1 1 0 0 1 1-1m-1 1a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1V11a1 1 0 0 0 1 1h2.5a1 1 0 0 0 1-1m0 0a1 1 0 0 0 1 1m0-4.5H11m-2.5 0a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v2.5a1 1 0 0 1-1 1m0 4.5H8.5m2.5 0a1 1 0 0 1 1 1v2.5a1 1 0 0 1-1 1M8.5 12a1 1 0 0 0-1 1v2.5a1 1 0 0 0 1 1m0 0H11m-2.5 0a1 1 0 0 0-1 1V20a1 1 0 0 0 1 1H11a1 1 0 0 0 1-1v-2.5a1 1 0 0 0-1-1m3.5-2c.833.167 2.5.9 2.5 2.5s-1.333 2.667-2 3m0 0v-2m0 2h2"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

UvUnwrap.displayName = 'UvUnwrap';
