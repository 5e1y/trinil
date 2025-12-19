import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const ShieldCross: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="m18 18 1.5-1.5M18 18l1.5 1.5M18 18l-1.5 1.5M18 18l-1.5-1.5m2.442-3.411a5 5 0 0 0-5.37 7.237m5.37-7.237A5.002 5.002 0 0 1 18 23a5 5 0 0 1-4.427-2.674m5.369-7.237q.058-.506.058-1.024V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v8.065a9 9 0 0 0 5.455 8.273l1.151.493a1 1 0 0 0 .788 0l1.151-.493.028-.012"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

ShieldCross.displayName = 'ShieldCross';
