import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Grid: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M12 4h7a1 1 0 0 1 1 1v7m-8-8H5a1 1 0 0 0-1 1v7m8-8v8m0 8H5a1 1 0 0 1-1-1v-7m8 8h7a1 1 0 0 0 1-1v-7m-8 8v-8m0 0H4m8 0h8"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Grid.displayName = 'Grid';
