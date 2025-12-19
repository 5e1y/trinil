import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Entrance: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M9 12.5V14m8 3h2.9a.1.1 0 0 1 .1.1v2.8a.1.1 0 0 1-.1.1h-5.8a.1.1 0 0 1-.1-.1v-2.8a.1.1 0 0 1 .1-.1zm0 0v-5m0-2.5h1a2 2 0 0 0 2-2v-1m-3 3V12m0-2.5v-4m0 6.5h-1a2 2 0 0 1-2-2v-.5M4 19.05V5.5a1 1 0 0 1 1-1h5.5a1 1 0 0 1 1 1v13.508a1 1 0 0 1-.992 1l-5.5.042a1 1 0 0 1-1.008-1Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Entrance.displayName = 'Entrance';
