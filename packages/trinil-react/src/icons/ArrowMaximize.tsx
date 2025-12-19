import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const ArrowMaximize: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M20 4h-5.5M20 4v5.5M20 4l-5 5m5 11v-5.5m0 5.5h-5.5m5.5 0-5-5M4 20h5.5M4 20v-5.5M4 20l5-5M4 4v5.5M4 4h5.5M4 4l5 5"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

ArrowMaximize.displayName = 'ArrowMaximize';
