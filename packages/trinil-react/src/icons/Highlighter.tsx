import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Highlighter: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M17 12v5.18a1 1 0 0 1-.804.98l-8 1.6A1 1 0 0 1 7 18.78V12m10 0H7m10 0a3 3 0 0 0 3-3V3.5M7 12a3 3 0 0 1-3-3V3.5"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Highlighter.displayName = 'Highlighter';
