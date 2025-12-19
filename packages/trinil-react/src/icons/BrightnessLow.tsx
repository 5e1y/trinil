import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const BrightnessLow: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M12 6V5m6 7h1m-7 6v1m-6-7H5m11.243-4.243.707-.707m-.707 9.193.707.707m-9.193-.707-.707.707m.707-9.193L7.05 7.05M16 12a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

BrightnessLow.displayName = 'BrightnessLow';
