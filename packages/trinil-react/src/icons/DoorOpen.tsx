import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const DoorOpen: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M14 19v.674a1 1 0 0 1-1.275.962l-5-1.429A1 1 0 0 1 7 18.246V4a1 1 0 0 1 .49-.86M14 19V5.754a1 1 0 0 0-.725-.961L7.49 3.14M14 19h2a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H8a1 1 0 0 0-.51.14M12 13.429l-1-.286"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

DoorOpen.displayName = 'DoorOpen';
