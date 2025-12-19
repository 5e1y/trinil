import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Phone1: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M9.545 6.846a1 1 0 0 1-.105 1.29l-.697.697a.206.206 0 0 0-.028.256 20 20 0 0 0 6.136 6.136c.081.052.188.04.256-.028l.695-.695a1 1 0 0 1 1.293-.103l2.286 1.653c.366.265.508.74.3 1.14-.26.497-.675 1.177-1.244 1.746-1.035 1.035-2.568 1.455-3.906.86-4.292-1.907-7.848-5.483-10.184-10.247-.692-1.41-.31-3.083.801-4.194A5.3 5.3 0 0 1 6.89 4.198c.363-.148.758.006.986.324z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Phone1.displayName = 'Phone1';
