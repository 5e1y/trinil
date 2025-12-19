import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Elevator: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M8.5 10.5v.5m0-.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Zm0 .5v3.5m0-3.5a3.62 3.62 0 0 1 1.992 3M8.5 11a3.62 3.62 0 0 0-1.992 3m1.992.5-.3.4c-.711.948-1.124 1.916-1.19 3.6m1.49-4 .227.338c.662.99 1.043 1.975 1.104 3.662M15.5 6v12m0-12-2 2m2-2 2 2m-2 10 2-2m-2 2-2-2m-9-12.5h15a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1v-15a1 1 0 0 1 1-1Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Elevator.displayName = 'Elevator';
