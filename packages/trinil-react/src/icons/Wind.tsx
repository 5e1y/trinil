import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Wind: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M3 14h14c2.21 0 4-1.829 4-4.038C21 7.795 19.243 6 17.075 6c-.984 0-1.903.492-2.449 1.31l-.126.19M3 16h10a2 2 0 1 1 0 4h-.293c-.453 0-.887-.18-1.207-.5m-6-14 .126-.19A2.94 2.94 0 0 1 8.076 4C10.242 4 12 5.794 12 7.962 12 10.172 10.21 12 8 12H3"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Wind.displayName = 'Wind';
