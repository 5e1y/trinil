import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Euro: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M7.5 10V8a5 5 0 0 1 10 0m-10 2v4.5m0-4.5H5m2.5 0H13m-5.5 4.5V16a5 5 0 0 0 10 0m-10-1.5H5m2.5 0H13"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Euro.displayName = 'Euro';
