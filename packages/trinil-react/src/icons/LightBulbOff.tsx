import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const LightBulbOff: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M10.5 18v.5a1.5 1.5 0 0 0 3 0V18m-3 0h3m-3 0a.5.5 0 0 1-.5-.5v-2.881c0-.076-.03-.15-.082-.205-.654-.686-1.43-1.265-1.997-2.024A4.62 4.62 0 0 1 7 9.622C7 7.069 9 5 12 5s5 2.07 5 4.622a4.62 4.62 0 0 1-.92 2.768c-.568.759-1.344 1.338-1.998 2.024a.3.3 0 0 0-.082.205V17.5a.5.5 0 0 1-.5.5"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

LightBulbOff.displayName = 'LightBulbOff';
