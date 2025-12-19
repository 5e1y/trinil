import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Curve: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M10.5 7.124V9.5a1 1 0 0 1-1 1H7.124M10.5 7.124A15.93 15.93 0 0 1 20 4m-9.5 3.124a.624.624 0 0 0-.624-.624H7.5a1 1 0 0 0-1 1v2.376c0 .345.28.624.624.624M4 20c0-3.557 1.16-6.843 3.124-9.5"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Curve.displayName = 'Curve';
