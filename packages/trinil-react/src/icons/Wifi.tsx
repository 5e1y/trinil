import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Wifi: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M5 12c3.866-3.866 10.134-3.866 14 0M7 15a7.07 7.07 0 0 1 10 0M3 9c4.97-4.97 13.03-4.97 18 0m-8.25 9a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Wifi.displayName = 'Wifi';
