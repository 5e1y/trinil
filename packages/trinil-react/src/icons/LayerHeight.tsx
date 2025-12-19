import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const LayerHeight: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M18 19V5m0 0-2.5 2.5M18 5l2.5 2.5M10 19a1 1 0 1 0 0-2H3m7 2h.5m-.5 0H3m7.5 0a2.5 2.5 0 0 0 0-5H3m7.5 5h.5a4 4 0 1 0 0-8H3"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

LayerHeight.displayName = 'LayerHeight';
