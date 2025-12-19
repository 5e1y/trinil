import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const ArrowExpandVertical: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="m3 12 3.5 3.5M3 12l3.5-3.5M3 12h6.5M21 12l-3.5-3.5M21 12l-3.5 3.5M21 12h-6.5M12 19.5v-15"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

ArrowExpandVertical.displayName = 'ArrowExpandVertical';
