import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Spellcheck: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="m7.667 13 3.017-9.051a1.388 1.388 0 0 1 2.632 0L16.333 13m-8.666 0h8.666m-8.666 0-1.5 4.5M16.333 13l1.5 4.5m2.581 2.586L20 20.5a1.414 1.414 0 0 1-2 0 1.41 1.41 0 0 0-2 0 1.414 1.414 0 0 1-2 0 1.414 1.414 0 0 0-2 0 1.414 1.414 0 0 1-2 0 1.414 1.414 0 0 0-2 0 1.4 1.4 0 0 1-1 .414 1.4 1.4 0 0 1-1-.414 1.414 1.414 0 0 0-2 0l-.414.414"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Spellcheck.displayName = 'Spellcheck';
