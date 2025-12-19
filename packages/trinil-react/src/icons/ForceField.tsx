import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const ForceField: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M17.595 4A14.43 14.43 0 0 1 20 12c0 2.957-.885 5.707-2.405 8m-6.97-16A9.5 9.5 0 0 1 15 12a9.5 9.5 0 0 1-4.374 8M4 16.771A5 5 0 1 0 4 7.23M7 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

ForceField.displayName = 'ForceField';
