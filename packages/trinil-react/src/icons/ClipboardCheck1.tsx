import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const ClipboardCheck1: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M8.5 4.5V4a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v.5m-7 0V6a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V4.5m-7 0H6a1 1 0 0 0-1 1V20a1 1 0 0 0 1 1h8m1.5-16.5H18a1 1 0 0 1 1 1v7.6m4 4.9a5 5 0 0 1-5 5m5-5a5 5 0 0 0-4-4.9m4 4.9a5 5 0 0 0-5-5m0 10a5 5 0 0 1-4-2m4 2a5 5 0 0 1-5-5m0 0a5 5 0 0 1 5-5m-5 5c0 1.126.372 2.164 1 3m4-8q.515 0 1 .1M18 18l1.5-1.5M18 18l1.5 1.5M18 18l-1.5 1.5M18 18l-1.5-1.5"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

ClipboardCheck1.displayName = 'ClipboardCheck1';
