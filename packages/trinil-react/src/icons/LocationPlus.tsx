import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const LocationPlus: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M18 18v-2.5m0 2.5h2.5M18 18v2.5m0-2.5h-2.5m2.876-4.986a5 5 0 0 0-5.125 6.556m5.125-6.556a5 5 0 1 1-5.125 6.556m5.125-6.556c.361-.947.526-1.967.475-2.998l-.026-.524a6.833 6.833 0 0 0-13.65 0l-.026.524a7.39 7.39 0 0 0 1.818 5.232l4.28 4.892a1 1 0 0 0 1.506 0l.498-.57M15 10a3 3 0 1 0-6 0 3 3 0 0 0 6 0Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

LocationPlus.displayName = 'LocationPlus';
