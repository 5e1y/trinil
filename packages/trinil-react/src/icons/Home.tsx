import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Home: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M19.53 8.206a1 1 0 0 1 .47.848V19a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9.054a1 1 0 0 1 .47-.848l7-4.375a1 1 0 0 1 1.06 0z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Home.displayName = 'Home';
