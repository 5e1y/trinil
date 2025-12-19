import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Corsor: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M12 6v12m0-12a2.64 2.64 0 0 1 2.562-2H16m-4 2a2.64 2.64 0 0 0-2.562-2H8m4 14a2.64 2.64 0 0 1-2.562 2H8m4-2a2.64 2.64 0 0 0 2.562 2H16"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Corsor.displayName = 'Corsor';
