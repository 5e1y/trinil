import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Target1: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M12 2v3m0 0a7 7 0 0 1 7 7m-7-7a7 7 0 0 0-7 7m17 0h-3m0 0a7 7 0 0 1-7 7m0 3v-3m0 0a7 7 0 0 1-7-7m-3 0h3m10.5 0a3.5 3.5 0 1 0-7 0 3.5 3.5 0 0 0 7 0Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Target1.displayName = 'Target1';
