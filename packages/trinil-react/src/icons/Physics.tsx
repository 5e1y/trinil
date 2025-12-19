import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Physics: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M21 12a9 9 0 1 1-3.78-7.333m0 0a1.5 1.5 0 1 0 2.289 1.938 1.5 1.5 0 0 0-2.29-1.939ZM14.12 14.12A3 3 0 1 1 9.88 9.88a3 3 0 0 1 4.242 4.242Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Physics.displayName = 'Physics';
