import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const MaterialSlot: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M10.965 15.863a3.99 3.99 0 0 0 3.736-.913m1.162-1.915a4 4 0 0 1-.1.318M21 7V4a1 1 0 0 0-1-1h-3M7 3H4a1 1 0 0 0-1 1v3m0 10v3a1 1 0 0 0 1 1h3m14-4v3a1 1 0 0 1-1 1h-3m.794-7.447a5.998 5.998 0 1 1-11.588-3.105 5.998 5.998 0 0 1 11.588 3.105Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

MaterialSlot.displayName = 'MaterialSlot';
