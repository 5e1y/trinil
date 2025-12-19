import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Bus: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M9.5 17a2 2 0 1 0 4 0m-4 0a2 2 0 1 1 4 0m-4 0H3m10.5 0h3m-3 0V9a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v8M3 5.5h14a2 2 0 0 1 2 2V8m0 0v8a1 1 0 0 1-1 1h-1.5M19 8h1a1 1 0 0 1 1 1v3M3 12h7a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H3"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Bus.displayName = 'Bus';
