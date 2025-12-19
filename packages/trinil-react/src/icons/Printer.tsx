import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Printer: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M6 10H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2m0-8v1.4a.1.1 0 0 0 .1.1h11.8a.1.1 0 0 0 .1-.1V10M6 10V5a1 1 0 0 1 1-1h7.046a1 1 0 0 1 .454.109M18 10h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2m0-8V8.376A1 1 0 0 0 17.927 8M18 18v-2.4a.1.1 0 0 0-.1-.1H6.1a.1.1 0 0 0-.1.1V18m12 0v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-1M17.927 8a1 1 0 0 0-.174-.283l-2.954-3.375a1 1 0 0 0-.299-.233M17.927 8H15.5a1 1 0 0 1-1-1V4.109"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Printer.displayName = 'Printer';
