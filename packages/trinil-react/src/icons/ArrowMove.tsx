import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const ArrowMove: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="m21 12-3-3m3 3-3 3m3-3h-6.5M12 21l3-3m-3 3-3-3m3 3v-6.5M3 12l3 3m-3-3 3-3m-3 3h6.5M12 3 9 6m3-3 3 3m-3-3v6.5"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

ArrowMove.displayName = 'ArrowMove';
