import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Pen: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="m17.5 11.5 2.293-2.293a1 1 0 0 0 0-1.414l-3.586-3.586a1 1 0 0 0-1.414 0L12.5 6.5m5 5-5-5m5 5c1.29 2.838-.353 6.144-3.393 6.83l-9.07 2.048a1 1 0 0 1-.927-.268L4 20m8.5-13.5c-2.838-1.29-6.144.352-6.83 3.393l-2.049 9.07a1 1 0 0 0 .269.927L4 20m0 0 5.586-5.586m0 0a2 2 0 1 1 2.829-2.829 2 2 0 0 1-2.83 2.83Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Pen.displayName = 'Pen';
