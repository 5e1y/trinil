import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const FruitApple: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M13.895 7.63c2.698-.741 5.605.45 5.605 4.87 0 5.33-2.818 9.721-7.088 8.167a1.2 1.2 0 0 0-.824 0C7.318 22.22 4.5 17.83 4.5 12.5c0-5.5 4.5-6 7.5-4m1.895-.87A6.6 6.6 0 0 0 12 8.5m1.895-.87c1.569-1.066 2.227-2.633 2.226-3.823 0-.476-.467-.775-.927-.652C11.978 4.016 11.845 7.263 12 8.5m1.895-.87A6.6 6.6 0 0 1 12 8.5m0 0-2-4"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

FruitApple.displayName = 'FruitApple';
