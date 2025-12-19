import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Warehouse: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M6 20H3.1a.1.1 0 0 1-.1-.1V8.065a.1.1 0 0 1 .06-.091l8.9-3.956a.1.1 0 0 1 .08 0l8.9 3.956a.1.1 0 0 1 .06.091V19.9a.1.1 0 0 1-.1.1H18M6 20v-5m0 5h4m8 0h-3m3 0v-4M6 15v-4.9a.1.1 0 0 1 .1-.1h11.8a.1.1 0 0 1 .1.1V16M6 15h3.9a.1.1 0 0 1 .1.1v2.4m0 2.5v-2.5m0 2.5h2.5M10 17.5h2.4a.1.1 0 0 1 .1.1V20m0 0H15m0 0v-3.9a.1.1 0 0 1 .1-.1H18"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Warehouse.displayName = 'Warehouse';
