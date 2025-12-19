import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const WorldSpace: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M3.018 16.711 2.5 18.643m0 0 1.932.517M2.5 18.644 7 16.07m14 .64.518 1.932m0 0-1.932.517m1.932-.517-4.5-2.572M12 7.5V3m0 0-1.5 1.5M12 3l1.5 1.5m5.5 9a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

WorldSpace.displayName = 'WorldSpace';
