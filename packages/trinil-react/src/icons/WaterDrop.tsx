import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const WaterDrop: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="m7.041 10.525 4.877-6.91a.1.1 0 0 1 .164 0l4.877 6.91a6.33 6.33 0 0 1 1.147 3.277l.012.21a6.129 6.129 0 1 1-12.236 0l.012-.21a6.33 6.33 0 0 1 1.147-3.277Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

WaterDrop.displayName = 'WaterDrop';
