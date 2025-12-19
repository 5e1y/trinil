import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Scissors: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M19.5 4.5 9.121 14.879m0 0a3 3 0 1 0-4.243 4.243 3 3 0 0 0 4.243-4.243ZM19.5 19.5 9.121 9.121m0 0a3 3 0 1 0-4.243-4.243 3 3 0 0 0 4.243 4.243Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Scissors.displayName = 'Scissors';
