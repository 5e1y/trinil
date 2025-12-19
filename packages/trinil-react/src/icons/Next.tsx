import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Next: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M19 20.5v-17M5 6.392v11.216a1 1 0 0 0 1.563.826l8.225-5.608a1 1 0 0 0 0-1.652L6.563 5.566A1 1 0 0 0 5 6.392Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Next.displayName = 'Next';
