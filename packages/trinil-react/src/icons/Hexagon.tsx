import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Hexagon: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M11.5 3.289a1 1 0 0 1 1 0l6.794 3.922a1 1 0 0 1 .5.866v7.846a1 1 0 0 1-.5.866L12.5 20.71a1 1 0 0 1-1 0L4.706 16.79a1 1 0 0 1-.5-.866V8.077a1 1 0 0 1 .5-.866z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Hexagon.displayName = 'Hexagon';
