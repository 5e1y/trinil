import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Syringe: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M3.5 20.5 6 18m0 0h2.586a1 1 0 0 0 .707-.293L10 17m-4 1v-2.586a1 1 0 0 1 .293-.707L13.5 7.5m3 3 .238.238a11 11 0 0 1 2.06 2.859M16.5 10.5 15 9m1.5 1.5L14 13m-.5-5.5-.238-.238a11 11 0 0 0-2.859-2.06M13.5 7.5 15 9m0 0 4-4m0 0 2.5 2.5M19 5l-2.5-2.5M10 17l-1-1m1 1 2-2m0 0 2-2m-2 2-1-1m3-1-1-1"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Syringe.displayName = 'Syringe';
