import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Hospital: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M9 21H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-3m-6 0v-5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5m-6 0h3m3 0h-3m0 0v-5.89M10.4 7.5H8.6a.1.1 0 0 0-.1.1v2.8a.1.1 0 0 0 .1.1h1.8a.1.1 0 0 1 .1.1v1.8a.1.1 0 0 0 .1.1h2.8a.1.1 0 0 0 .1-.1v-1.8a.1.1 0 0 1 .1-.1h1.8a.1.1 0 0 0 .1-.1V7.6a.1.1 0 0 0-.1-.1h-1.8a.1.1 0 0 1-.1-.1V5.6a.1.1 0 0 0-.1-.1h-2.8a.1.1 0 0 0-.1.1v1.8a.1.1 0 0 1-.1.1Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Hospital.displayName = 'Hospital';
