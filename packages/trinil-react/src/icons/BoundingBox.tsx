import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const BoundingBox: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M19 6.5A1.5 1.5 0 1 0 17.5 5M19 6.5A1.5 1.5 0 0 1 17.5 5M19 6.5v11M17.5 5h-11m0 0A1.5 1.5 0 0 1 5 6.5M6.5 5A1.5 1.5 0 1 0 5 6.5m0 0v11M6.5 19A1.5 1.5 0 1 1 5 17.5M6.5 19A1.5 1.5 0 0 0 5 17.5M6.5 19h11m0 0a1.5 1.5 0 1 0 1.5-1.5M17.5 19a1.5 1.5 0 0 1 1.5-1.5"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

BoundingBox.displayName = 'BoundingBox';
