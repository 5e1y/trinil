import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const CloudSnowRain: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M12.535 9a4.01 4.01 0 0 1 2.375-1.85M10 7.535a4.012 4.012 0 0 0-2.899-.434m7.809.05Q15.43 7 16 7a4 4 0 0 1 0 8H8a4 4 0 0 1-.899-7.899m7.809.05A4.001 4.001 0 0 0 7.1 7.1M10 18l.5 2m4-1.5 1-1m-1 1 1 1m-1-1-1 1m1-1-1-1m5 .5.5 2M6 18.5l1-1m-1 1 1 1m-1-1-1 1m1-1-1-1"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

CloudSnowRain.displayName = 'CloudSnowRain';
