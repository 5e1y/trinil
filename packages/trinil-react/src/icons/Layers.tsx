import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Layers: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="m15.375 12 5.397 2.398a.385.385 0 0 1 0 .704l-8.366 3.717a1 1 0 0 1-.812 0l-8.366-3.717a.385.385 0 0 1 0-.704L8.625 12m6.75 0-2.969 1.32a1 1 0 0 1-.812 0L8.625 12m6.75 0L20.772 9.6a.385.385 0 0 0 0-.703L12.406 5.18a1 1 0 0 0-.812 0L3.228 8.898a.385.385 0 0 0 0 .703L8.625 12"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Layers.displayName = 'Layers';
