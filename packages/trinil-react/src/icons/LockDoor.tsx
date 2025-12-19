import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const LockDoor: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M14 12h-2m5 1.1V4a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h6m3-7.9q.485-.1 1-.1a5 5 0 1 1-4 8m3-7.9a5.002 5.002 0 0 0-3 7.9m2.5-3.5v-1a1.5 1.5 0 0 1 3 0v1m-3 0h3m-3 0a.5.5 0 0 0-.5.5v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1a.5.5 0 0 0-.5-.5"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

LockDoor.displayName = 'LockDoor';
