import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Nfc: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M7 8a5.657 5.657 0 0 1 0 8m6-14c5.523 5.523 5.523 14.477 0 20M11 4c4.418 4.418 4.418 11.582 0 16M9 6a8.485 8.485 0 0 1 0 12"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Nfc.displayName = 'Nfc';
