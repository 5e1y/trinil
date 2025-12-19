import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Watch: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M17 7.101A6.98 6.98 0 0 1 19 12a6.98 6.98 0 0 1-2 4.899m0-9.798A6.98 6.98 0 0 0 12 5c-1.959 0-3.73.804-5 2.101m10 0V4a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v3.101m0 0A6.98 6.98 0 0 0 5 12c0 1.907.763 3.636 2 4.899m10 0A6.98 6.98 0 0 1 12 19a6.98 6.98 0 0 1-5-2.101m10 0V20a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-3.101M16 10l-3.943 2.957a.1.1 0 0 1-.116.004L9 11"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Watch.displayName = 'Watch';
