import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Crown: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M3 17v-6.958a.1.1 0 0 1 .03-.071l2.9-2.9a.1.1 0 0 1 .14 0L8.93 9.93a.1.1 0 0 0 .14 0l2.86-2.86a.1.1 0 0 1 .14 0l2.86 2.86a.1.1 0 0 0 .14 0l2.86-2.86a.1.1 0 0 1 .14 0l2.9 2.9a.1.1 0 0 1 .03.072V17a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Crown.displayName = 'Crown';
