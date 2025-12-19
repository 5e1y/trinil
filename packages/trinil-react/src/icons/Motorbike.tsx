import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Motorbike: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="m16.5 11-3.2 4.114a1 1 0 0 1-.79.386H9m7.5-4.5.584 1.642M16.5 11h2c.552 0 1.01-.452.9-.993a4.99 4.99 0 0 0-3.805-3.875M16.5 11c-.667-2.001-3.269-2.51-4.67-.933A2.78 2.78 0 0 1 9.759 11H7.842m9.242 1.642q.436-.14.916-.142a3 3 0 1 1-.916.142ZM9 15.5a2.995 2.995 0 0 0-1.863-2.777M9 15.5a3 3 0 1 1-1.863-2.777m0 0L7.842 11m0 0H3.5"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Motorbike.displayName = 'Motorbike';
