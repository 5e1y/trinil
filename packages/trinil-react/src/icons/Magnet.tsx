import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Magnet: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M14 15v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4m-6 0v-2.5a2 2 0 1 0-4 0V15m4 0h6m0 0v-3a8 8 0 1 0-16 0v3m6 0v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4m6 0H4"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Magnet.displayName = 'Magnet';
