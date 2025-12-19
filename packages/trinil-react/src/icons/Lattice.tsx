import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Lattice: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M18 10a1.5 1.5 0 1 0-1.296-2.256M18 10a1.5 1.5 0 0 1-1.296-.744M18 10v4m0 0a1.5 1.5 0 0 0-1.296 2.256M18 14a1.5 1.5 0 1 1-1.296 2.256M12 17.5a1.5 1.5 0 0 1 1.296.744M12 17.5a1.5 1.5 0 0 0-1.296.744M12 17.5v-4m0 0a1.5 1.5 0 0 0 1.296-2.256M12 13.5a1.5 1.5 0 0 1-1.296-2.256M6 10a1.5 1.5 0 1 1 1.296-2.256M6 10a1.5 1.5 0 0 0 1.296-.744M6 10v4m0 0a1.5 1.5 0 1 0 1.296 2.256M6 14a1.5 1.5 0 0 1 1.296 2.256m3.408-5.012a1.5 1.5 0 0 1 2.592 0m-2.592 0L7.296 9.256m6 1.988 3.408-1.988m-3.408 8.988a1.5 1.5 0 1 1-2.592 0m2.592 0 3.408-1.988m-6 1.988-3.408-1.988m0-7a1.49 1.49 0 0 0 0-1.512m0 0 3.408-1.988m2.592 0a1.5 1.5 0 1 0-2.592 0m2.592 0a1.5 1.5 0 0 1-2.592 0m2.592 0 3.408 1.988m0 0a1.5 1.5 0 0 0 0 1.512"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Lattice.displayName = 'Lattice';
