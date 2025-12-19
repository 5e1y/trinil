import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Boat: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M3 10.5h12m0 0h4a.93.93 0 0 1 .712 1.53l-5.746 6.823M15 10.5l-2.97-3.465A.1.1 0 0 0 11.954 7h-1.892l-.016-.001c-.062-.01-.093-.08-.131-.13l-1.33-1.738c-.038-.05-.069-.12-.131-.13L8.438 5H3m0 8v.5m2.5-.5v.5M8 13v.5m2.5-.5v.5m3.466 5.353a2.1 2.1 0 0 1-.466-.353 2.12 2.12 0 0 0-3 0 2.12 2.12 0 0 1-3 0 2.12 2.12 0 0 0-3 0 2.12 2.12 0 0 1-1.5.621m10.966-.268A2.12 2.12 0 0 0 16.5 18.5a2.12 2.12 0 0 1 3 0c.414.414.957.621 1.5.621"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Boat.displayName = 'Boat';
