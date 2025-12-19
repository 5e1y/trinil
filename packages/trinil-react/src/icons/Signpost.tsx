import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Signpost: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M11 21v-9m0 0h5.586a1 1 0 0 0 .707-.293l2-2a1 1 0 0 0 0-1.414l-2-2A1 1 0 0 0 16.586 6H11m0 6H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5m0 0V3"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Signpost.displayName = 'Signpost';
