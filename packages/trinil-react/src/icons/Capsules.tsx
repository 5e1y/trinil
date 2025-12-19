import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Capsules: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M5 20V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1Zm5-2H8.5a1 1 0 1 1 0-2H10a1 1 0 1 1 0 2Zm5.5 0H14a1 1 0 1 1 0-2h1.5a1 1 0 1 1 0 2ZM10 13H8.5a1 1 0 1 1 0-2H10a1 1 0 1 1 0 2Zm5.5 0H14a1 1 0 1 1 0-2h1.5a1 1 0 1 1 0 2ZM10 8H8.5a1 1 0 1 1 0-2H10a1 1 0 1 1 0 2Zm5.5 0H14a1 1 0 1 1 0-2h1.5a1 1 0 1 1 0 2Z" clip-rule="evenodd"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Capsules.displayName = 'Capsules';
