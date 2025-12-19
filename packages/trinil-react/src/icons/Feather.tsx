import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Feather: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M20 8.404c-1.167 1.834-3.263 5.382-7.5 7.5-1.554.777-3.51 1.286-5.383 1.596M20 8.404c.667.5 1.175 1.95 0 5-.952 2.471-2.81 4.769-6.005 6.278a.96.96 0 0 1-.946-.078l-.893-.596a.1.1 0 0 0-.156.083v.688c0 .43-.276.826-.704.865-1.484.136-3.424-.659-4.18-3.144M20 8.404C19.5 8 16.5 10 14.5 11c-4.754 2.377-8.267 2-7.383 6.5m0 0c-1.501.248-2.577.369-3.617.398M3.5 6c.727 1.091 2.575 2.105 4.252 1.67m0 0c.63-.162 1.235-.528 1.748-1.17 2-2.5-.696-4.608-2-2-.452.904-.291 2.115.252 3.17Zm0 0C8.411 8.95 9.63 10 11 10"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Feather.displayName = 'Feather';
