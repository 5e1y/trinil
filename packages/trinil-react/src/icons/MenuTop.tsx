import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const MenuTop: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M21 10V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3m18 0v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7m18 0H3"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

MenuTop.displayName = 'MenuTop';
