import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const ToothCross: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M13.533 3.41c2.62-1.448 5.57 1.167 4.86 4.308l-1.105 3.369a19 19 0 0 0-.548 2.073m-3.207-9.75a3.14 3.14 0 0 1-3.066 0c-2.62-1.448-5.57 1.167-4.86 4.308l.926 4.092c.403 1.335.911 5.147.911 5.147l.194 3.142c.1 1.173 1.637 1.213 1.788.046.195-1.511 1.07-3.66 1.801-4.954.357-.63 1.189-.63 1.546 0 .183.324.371.67.556 1.022m.204-12.803c-.965.533-3.355 2.086-3.355 4.445m6.562 5.305a5 5 0 1 1-3.411 3.053m3.41-3.053a5.01 5.01 0 0 0-3.41 3.053M18 18l1.5-1.5M18 18l1.5 1.5M18 18l-1.5 1.5M18 18l-1.5-1.5"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

ToothCross.displayName = 'ToothCross';
