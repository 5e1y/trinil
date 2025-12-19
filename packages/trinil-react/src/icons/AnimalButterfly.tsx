import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const AnimalButterfly: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M13.5 4v5m0 0v.5m0-.5a5 5 0 0 1 5-5h1a1 1 0 0 1 1 1v3a5 5 0 0 1-5 5H14m-.5-3.5V13m0-3.5a1.5 1.5 0 0 0-3 0m3 3.5v2m0-2h.5m-.5 2v1.5a1.5 1.5 0 0 1-3 0V15m3 0a5 5 0 0 0 5 5 .5.5 0 0 0 .5-.5V18a5 5 0 0 0-5-5m-3.5 2v-2m0 2a5 5 0 0 1-5 5 .5.5 0 0 1-.5-.5V18a5 5 0 0 1 5-5m.5 0V9.5m0 3.5H10m.5-3.5V9m0 0a5 5 0 0 0-5-5h-1a1 1 0 0 0-1 1v3a5 5 0 0 0 5 5H10m.5-4V4"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

AnimalButterfly.displayName = 'AnimalButterfly';
