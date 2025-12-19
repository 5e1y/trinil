import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Epipen: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="m10 17-2.5 2.5a2.12 2.12 0 0 1-3 0M10 17l-3-3m3 3a.707.707 0 0 0 1 0l1.5-1.5M7 14l-2.5 2.5a2.12 2.12 0 0 0 0 3M7 14a.707.707 0 0 1 0-1l9.293-9.293a1 1 0 0 1 1.414 0l2.586 2.586a1 1 0 0 1 0 1.414L16.5 11.5m-12 8-1 1m9-5-1-1m1 1 2-2m0 0-1-1m1 1 2-2m0 0-1-1"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Epipen.displayName = 'Epipen';
