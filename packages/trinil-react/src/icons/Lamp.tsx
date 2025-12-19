import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Lamp: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M12.072 11h6.509a.42.42 0 0 0 .389-.575l-2.719-6.796A1 1 0 0 0 15.323 3H8.677a1 1 0 0 0-.928.629L5.03 10.425a.42.42 0 0 0 .39.575h3.116m3.536 0v10m0-10H8.536m3.536 10H17m-4.928 0H7m1.536-10v5"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Lamp.displayName = 'Lamp';
