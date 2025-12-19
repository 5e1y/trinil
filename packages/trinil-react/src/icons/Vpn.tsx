import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Vpn: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M18 9a6 6 0 0 0-6-6m6 6a6 6 0 0 1-6 6m6-6h-3.666M12 3a6 6 0 0 0-6 6m6-6a8.86 8.86 0 0 1 2.334 6M12 3a8.86 8.86 0 0 0-2.334 6M12 15a6 6 0 0 1-6-6m6 6a8.86 8.86 0 0 0 2.334-6M12 15a8.86 8.86 0 0 1-2.334-6M12 15v2M6 9h3.666m4.668 0H9.666M10 19a2 2 0 1 0 4 0m-4 0a2 2 0 0 1 2-2m-2 2H4m10 0a2 2 0 0 0-2-2m2 2h6"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Vpn.displayName = 'Vpn';
