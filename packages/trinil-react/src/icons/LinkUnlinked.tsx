import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const LinkUnlinked: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M15.5 16h2c2 0 3.5-1.5 3.5-3.5v-1c0-2-1.5-3.5-3.5-3.5h-2m-7 8h-2c-2 0-3.5-1.5-3.5-3.5v-1C3 9.5 4.5 8 6.5 8h2M13 6.5l1-2m-3 2-1-2m3 13 1 2m-3-2-1 2"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

LinkUnlinked.displayName = 'LinkUnlinked';
