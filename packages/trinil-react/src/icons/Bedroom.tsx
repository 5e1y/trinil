import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Bedroom: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M3 18h10.5M3 18v-2.5M3 18v1.5M13.5 18v1.5m0-1.5v-1.5a1 1 0 0 0-1-1H3m0-4v4M16 17v1.5a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V17m-5 0h5m-5 0v-2.5m5 2.5v-2.5m-5 0v-7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v7m-5 0h5M8.5 7V4.6a.1.1 0 0 1 .1-.1h3.8a.1.1 0 0 1 .1.1v2.9m-4-.5v2.4a.1.1 0 0 0 .1.1h3.8a.1.1 0 0 0 .1-.1V7.5m-4-.5.156.078A5.57 5.57 0 0 0 12.5 7.5"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Bedroom.displayName = 'Bedroom';
