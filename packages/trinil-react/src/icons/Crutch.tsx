import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Crutch: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M19.5 15.367a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm0 0v-1a1 1 0 0 0-1-1H17m-12.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm0 0v-1a1 1 0 0 1 1-1H7M7 9H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2h.587c.575 0 1.116.27 1.46.73L7.25 6a2.5 2.5 0 0 0 2 1H20a1 1 0 0 1 0 2h-3M7 9l5 2.184M7 9h10m0 4.367-5-2.183m5 2.183H7m5-2.183L17 9m-5 2.184-5 2.183"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Crutch.displayName = 'Crutch';
