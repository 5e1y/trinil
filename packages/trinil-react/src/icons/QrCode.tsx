import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const QrCode: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M20.5 6.5v-2a1 1 0 0 0-1-1h-2m-11 0h-2a1 1 0 0 0-1 1v2m17 11v2a1 1 0 0 1-1 1h-2m-11 0h-2a1 1 0 0 1-1-1v-2m7.5-6h-.9a.1.1 0 0 0-.1.1v.8a.1.1 0 0 1-.1.1H8.1a.1.1 0 0 0-.1.1V15m10-6h-2.9a.1.1 0 0 1-.1-.1V6m3 3V7a1 1 0 0 0-1-1h-2m3 3v3m-3-6h-3.5M6 9V7a1 1 0 0 1 1-1h2M6 9v6m0-6h2m-2 6v2a1 1 0 0 0 1 1h2m-3-3h2m1 3v-2.9a.1.1 0 0 0-.1-.1H8m1 3h2.5M9 6v2.9a.1.1 0 0 1-.1.1H8m1-3h2.5m0 0v2m0 0H13m-1.5 0v1m-.5 5.5v.5m.5 3v-1m0 1h4m0 0H17a1 1 0 0 0 1-1v-2m-2.5 3v-1M13 10.5h.5M18 12v3m0-3h-2.5m2.5 3h-1.5m-1-4v1m0 0v.9a.1.1 0 0 1-.1.1h-2.3a.1.1 0 0 0-.1.1v1.8a.1.1 0 0 0 .1.1h.9M8 9v1"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

QrCode.displayName = 'QrCode';
