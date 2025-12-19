import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const ArrowCollapse: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M12 21.5V15m0 0-3.5 3.5M12 15l3.5 3.5M12 2.5V9m0 0 3.5-3.5M12 9 8.5 5.5m11 6.5h-15"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

ArrowCollapse.displayName = 'ArrowCollapse';
