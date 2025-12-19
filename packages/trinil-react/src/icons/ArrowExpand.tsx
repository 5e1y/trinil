import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const ArrowExpand: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="m12 21 3.5-3.5M12 21l-3.5-3.5M12 21v-6.5M12 3 8.5 6.5M12 3l3.5 3.5M12 3v6.5m7.5 2.5h-15"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

ArrowExpand.displayName = 'ArrowExpand';
