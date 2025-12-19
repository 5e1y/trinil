import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const GraphBars: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M3 4.5V18a1 1 0 0 0 1 1h3m0 0v-4.5M7 19h4m0 0v-8.5m0 8.5h4m0 0v-6.5m0 6.5h4m2.5 0H19m0 0V6.5"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

GraphBars.displayName = 'GraphBars';
