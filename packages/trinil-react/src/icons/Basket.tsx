import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Basket: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M7 9H4a1 1 0 0 0-1 1v.115A13 13 0 0 0 3.594 14M7 9h5M7 9v.779A20 20 0 0 0 7.45 14M7 9a4.5 4.5 0 0 1 4.5-4.5h1A4.5 4.5 0 0 1 17 9m0 0h3a1 1 0 0 1 1 1v.115A13 13 0 0 1 20.406 14M17 9h-5m5 0v.779A20 20 0 0 1 16.55 14M7 19.5l-.192-.192A13 13 0 0 1 3.594 14M7 19.5h5m-5 0h1.631c.4 0 .659-.42.48-.777A20 20 0 0 1 7.452 14M12 9v5m2.5 5.5h2.227c.174 0 .341-.07.464-.192A13 13 0 0 0 20.406 14M14.5 19.5H12m2.5 0 .389-.777A20 20 0 0 0 16.549 14M12 19.5V14m0 0h4.55M12 14H7.45m0 0H3.595m12.955 0h3.857"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Basket.displayName = 'Basket';
