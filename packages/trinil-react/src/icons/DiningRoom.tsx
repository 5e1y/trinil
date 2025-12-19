import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const DiningRoom: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M9 19v-5.5m0 0h4m-4 0H5m6.5 5.5v-2a1 1 0 0 1 1-1H15m0 0v-5m0 5v3m-8.5 0v-2a1 1 0 0 0-1-1H3m0 0v-5m0 5v3m8.5-11.5v2.9a.1.1 0 0 1-.1.1H6.6a.1.1 0 0 1-.1-.1V7.5a2.5 2.5 0 1 1 5 0Zm6.225 3.309.75-1.748A.1.1 0 0 1 18.565 9h1.368a.1.1 0 0 1 .092.06l.674 1.573a3 3 0 0 1-.636 3.303.22.22 0 0 1-.154.064h-1.128a.68.68 0 0 1-.48-.199 2.72 2.72 0 0 1-.577-2.992ZM20 14h-1.5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1H20a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

DiningRoom.displayName = 'DiningRoom';
