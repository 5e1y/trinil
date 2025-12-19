import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const UvMap: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M21 12a8.96 8.96 0 0 1-1.204 4.5 9.05 9.05 0 0 1-3.296 3.296 9 9 0 0 1-2 .852M21 12a8.96 8.96 0 0 0-1.204-4.5A9.05 9.05 0 0 0 16.5 4.204a9 9 0 0 0-2-.852M21 12c0 1.333-1.8 4-9 4s-9-2.667-9-4m0 0c0 1.64.438 3.176 1.204 4.5A9.05 9.05 0 0 0 7.5 19.796 8.96 8.96 0 0 0 12 21c.867 0 1.706-.123 2.5-.352M3 12c0-1.64.438-3.176 1.204-4.5A9.04 9.04 0 0 1 7.5 4.204 8.96 8.96 0 0 1 12 3c.867 0 1.706.123 2.5.352m0 0C12.333 2.902 8 4 8 12s4.333 9.099 6.5 8.648"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

UvMap.displayName = 'UvMap';
