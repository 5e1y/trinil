import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Deform: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M6 11V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m0 14v-1a6 6 0 0 1 6-6h1a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-1C11.373 7 6 12.373 6 19v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Deform.displayName = 'Deform';
