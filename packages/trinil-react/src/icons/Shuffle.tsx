import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Shuffle: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M20 17h-2.658a6 6 0 0 1-5.101-2.842L10.905 12M20 17l-3-3m3 3-3 3m-6.095-8L9.342 9.476A6.28 6.28 0 0 0 4 6.5m6.905 5.5 1.336-2.158A6 6 0 0 1 17.342 7H20m-9.095 5-1.563 2.524A6.28 6.28 0 0 1 4 17.5M20 7l-3 3m3-3-3-3"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Shuffle.displayName = 'Shuffle';
