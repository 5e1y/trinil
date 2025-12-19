import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Proxy: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M10 17.5a2 2 0 1 0 4 0m-4 0a2 2 0 0 1 2-2m-2 2H2.5m11.5 0a2 2 0 0 0-2-2m2 2h7.5m-9.5-2V11m0 0h8a1 1 0 0 0 1-1V6.5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1V10a1 1 0 0 0 1 1zM6 7.5V9m3-1.5V9"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Proxy.displayName = 'Proxy';
