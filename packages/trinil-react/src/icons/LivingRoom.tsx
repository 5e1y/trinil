import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const LivingRoom: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M5 9.5c-1.162 0-1.793-.625-1.983-.967a.1.1 0 0 1-.008-.069l.972-3.888a.1.1 0 0 1 .097-.076h1.844a.1.1 0 0 1 .097.076l.972 3.888a.1.1 0 0 1-.008.069c-.19.342-.821.967-1.983.967Zm0 0v10m13.727-4h-.25a.75.75 0 0 0-.75.75.75.75 0 0 1-.75.75h-5.719a.75.75 0 0 1-.75-.75.75.75 0 0 0-.75-.75h-.03m9 0h.772a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8.727a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1m9 0v-2a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v2M15.5 8h4a1 1 0 0 0 1-1V5.5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1V7a1 1 0 0 0 1 1Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

LivingRoom.displayName = 'LivingRoom';
