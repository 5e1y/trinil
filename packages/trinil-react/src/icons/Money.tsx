import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Money: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M19.5 14h.5a1 1 0 0 0 1-1V6.5a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1V7m7.5 8v-2m-9 2v-2m4.5 3a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm6-6.5H4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Money.displayName = 'Money';
