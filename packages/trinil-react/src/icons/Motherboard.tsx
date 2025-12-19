import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Motherboard: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M16.5 5.5V11m-2-5.5V11M5 5V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-3M5 5v6.5M5 5h1.9a.1.1 0 0 1 .1.1v6.3a.1.1 0 0 1-.1.1H5m0 0V14m0 0v3m0-3h9m-9 3h9M9.6 7h2.3a.1.1 0 0 1 .1.1v2.3a.1.1 0 0 1-.1.1H9.6a.1.1 0 0 1-.1-.1V7.1a.1.1 0 0 1 .1-.1Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Motherboard.displayName = 'Motherboard';
