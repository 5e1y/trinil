import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const HouseSmall: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M10.5 21H9a1 1 0 0 1-1-1V7m2.5 14v-6a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v2.5m-3 3.5h3m0 0H15a1 1 0 0 0 1-1V7m-2.5 14v-3.5M8 7l3.293-3.293a1 1 0 0 1 1.414 0L15 6M8 7 6 9m10-2 2 2m-2-2-1-1m-1.5 11.5h-1M15 6V3.5m-3 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

HouseSmall.displayName = 'HouseSmall';
