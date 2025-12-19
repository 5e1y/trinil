import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Spinner: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M12 2v4m10 6h-4m-6 10v-4M2 12h4m11-8.66-2 3.464M20.66 17l-3.464-2M7 20.66l2-3.464M3.34 7l3.464 2M20.66 7l-3.464 2M17 20.66l-2-3.464M3.34 17l3.464-2M7 3.34l2 3.464"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Spinner.displayName = 'Spinner';
