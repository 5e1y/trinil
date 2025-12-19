import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Anchor: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="m12 21 1.215-1.215A2.68 2.68 0 0 1 15.11 19a2.448 2.448 0 0 0 2.414-2.85l-.493-2.956a.1.1 0 0 1 .144-.106L19 14m-7 7-1.215-1.215A2.68 2.68 0 0 0 8.89 19a2.448 2.448 0 0 1-2.415-2.85l.493-2.956a.1.1 0 0 0-.144-.106L5 14m7 7V10m0-3v3m0-3a1.5 1.5 0 0 0 1.5-1.5v-1a1.5 1.5 0 0 0-3 0v1A1.5 1.5 0 0 0 12 7Zm0 3h4m-4 0H8"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Anchor.displayName = 'Anchor';
