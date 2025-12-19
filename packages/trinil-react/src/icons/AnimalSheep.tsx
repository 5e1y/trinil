import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const AnimalSheep: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M21 11c0-1.47-.804-2.863-1.934-3.305a.105.105 0 0 1-.067-.101L19 7.5a3 3 0 0 0-4.932-2.295.105.105 0 0 1-.136 0A3 3 0 0 0 12 4.5c-.736 0-1.41.265-1.932.705a.105.105 0 0 1-.136 0 3 3 0 0 0-4.931 2.389.105.105 0 0 1-.067.101C3.804 8.137 3 9.53 3 11s.804 2.863 1.934 3.305a.105.105 0 0 1 .067.101L5 14.5c0 .889.386 1.687 1 2.236M21 11c0 1.47-.804 2.863-1.934 3.305a.105.105 0 0 0-.067.101L19 14.5c0 .889-.386 1.687-1 2.236M21 11v6M7 10v3.5a1.5 1.5 0 0 0 3 0V10m-3 0-1.5 1M7 10h3m0 0 1.5 1m6.5 5.736a3 3 0 0 1-2 .764c-.736 0-1.41-.265-1.932-.705A.1.1 0 0 0 14 16.77m4-.034V20M6 16.736c.53.475 1.232.764 2 .764.736 0 1.41-.265 1.932-.705A.1.1 0 0 1 10 16.77m-4-.034V20m8 0v-3.23M10 20v-3.23m4 0a.1.1 0 0 0-.068.025A3 3 0 0 1 12 17.5c-.736 0-1.41-.265-1.932-.705A.1.1 0 0 0 10 16.77"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

AnimalSheep.displayName = 'AnimalSheep';
