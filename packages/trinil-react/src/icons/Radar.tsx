import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Radar: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M12 13a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Zm0 0v8m2.5-6.169a5 5 0 1 0-5 0m6.258 2.16a7.5 7.5 0 1 0-7.48.021"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Radar.displayName = 'Radar';
