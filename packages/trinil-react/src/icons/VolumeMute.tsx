import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const VolumeMute: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="m15 9 3 3m0 0 3 3m-3-3-3 3m3-3 3-3m-9-3.616v13.232a.384.384 0 0 1-.597.32l-4.151-2.768A1 1 0 0 0 6.697 16H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1.697a1 1 0 0 0 .555-.168l4.151-2.768a.384.384 0 0 1 .597.32Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

VolumeMute.displayName = 'VolumeMute';
