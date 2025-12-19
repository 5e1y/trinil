import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Coupon: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="m15.5 8.5-7 7m1-7.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm5 5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM3.586 15.414l-.293.293a1 1 0 0 0-.293.707V18a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-1.586a1 1 0 0 0-.293-.707l-.293-.293a4.83 4.83 0 0 1 0-6.828l.293-.293A1 1 0 0 0 21 7.586V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v1.586a1 1 0 0 0 .293.707l.293.293a4.83 4.83 0 0 1 0 6.828Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Coupon.displayName = 'Coupon';
