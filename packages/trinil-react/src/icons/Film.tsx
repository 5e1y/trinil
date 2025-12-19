import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Film: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M17 7.5v9m0-9h-1.5m1.5 0h1m-1 9h1m-1 0h-1.5m2.5 0h2.5m-2.5 0V19m2.5-2.5h.4a.1.1 0 0 0 .1-.1V7.6a.1.1 0 0 0-.1-.1h-.4m0 9V19m-5-2.5H13m2.5 0V19M13 16.5h-2.5m2.5 0V19m-2.5-2.5H8m2.5 0V19M8 16.5H7m1 0V19m-1-2.5v-9m0 9H5.5m1.5-9H5.5m1.5 0h1m-5 0V5.1a.1.1 0 0 1 .1-.1h2.4M3 7.5v9m0-9h2.5m-2.5 9h2.5m-2.5 0v2.4a.1.1 0 0 0 .1.1h2.4m0-2.5V19m0-11.5V5m0 0H8m0 2.5V5m0 2.5h2.5M8 5h2.5m0 2.5V5m0 2.5H13M10.5 5H13m0 2.5V5m0 2.5h2.5M13 5h2.5m0 2.5V5m0 0H18m0 2.5V5m0 2.5h2.5M18 5h2.5m0 2.5V5m0 0h.5M5.5 19H8m0 0h2.5m0 0H13m0 0h2.5m0 0H18m0 0h2.5m.5 0h-.5"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Film.displayName = 'Film';
