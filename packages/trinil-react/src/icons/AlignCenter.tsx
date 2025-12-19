import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const AlignCenter: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M12 4.5V7m0 0v3.5M12 7H5.5a1 1 0 0 0-1 1v1.5a1 1 0 0 0 1 1H12M12 7h6.5a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1H12m0 0v3m0 0V17m0-3.5H8.5a1 1 0 0 0-1 1V16a1 1 0 0 0 1 1H12m0-3.5h3.5a1 1 0 0 1 1 1V16a1 1 0 0 1-1 1H12m0 0v2.5"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

AlignCenter.displayName = 'AlignCenter';
