import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Presentation: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M20 17h2m-2 0V7a1 1 0 0 0-1-1h-5.417M20 17h-2.444M2 17h2m0 0V7a1 1 0 0 1 1-1h5.417M4 17h2.444m11.112 0L19 21m-1.444-4H6.444m0 0L5 21m8.583-15-.913-2.53a.712.712 0 0 0-1.34 0L10.417 6m3.166 0h-3.166"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Presentation.displayName = 'Presentation';
