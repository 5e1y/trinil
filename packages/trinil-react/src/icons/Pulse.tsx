import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Pulse: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M2.5 12.5h3.792a1 1 0 0 0 .943-.667L9.922 4.22a.33.33 0 0 1 .635.039l3.387 15.485a.325.325 0 0 0 .627.027l2.21-7.07a1 1 0 0 1 .954-.702H21.5"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Pulse.displayName = 'Pulse';
