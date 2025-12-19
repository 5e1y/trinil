import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Credit: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M20 11A8 8 0 0 0 5.577 6.23m0 0L5.5 2m.077 4.23H10M4 13a8 8 0 0 0 14.423 4.77m0 0L18.5 22m-.077-4.23H14M9.5 11v2m0-2h-1m1 0H12m-2.5 0a2.5 2.5 0 0 1 4.95-.5M9.5 13h-1m1 0H12m-2.5 0a2.5 2.5 0 0 0 4.95.5"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Credit.displayName = 'Credit';
