import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Pencil: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="m17.5 11.5 2.293-2.293a1 1 0 0 0 0-1.414l-3.586-3.586a1 1 0 0 0-1.414 0L12.5 6.5m5 5L11 18m6.5-6.5-5-5m0 0L6 13m5 5v-.56a2 2 0 0 0-2.392-1.962.073.073 0 0 1-.086-.086A2 2 0 0 0 6.56 13H6m5 5-3.5 1M6 13l-1 3.5M7.5 19l-3.327.95a.1.1 0 0 1-.124-.123L5 16.5M7.5 19A9 9 0 0 1 5 16.5"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Pencil.displayName = 'Pencil';
