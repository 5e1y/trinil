import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Wheelchair: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M3 4h1.5a2 2 0 0 1 2 2v3.506M19.5 17v-2a2 2 0 0 0-2-2h-2.136m4.136 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-4.136-4A5.752 5.752 0 0 0 6.5 9.506M15.364 13q.135.604.136 1.25a5.75 5.75 0 1 1-9-4.744M11 14.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Wheelchair.displayName = 'Wheelchair';
