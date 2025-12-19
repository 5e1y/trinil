import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const CameraRangefinder: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M21 9v8.5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h5a1 1 0 0 0 1-1 1 1 0 0 1 1-1h5M21 9V6.5a1 1 0 0 0-1-1h-4M21 9h-4.9a.1.1 0 0 1-.1-.1V5.5m-8.5 0H4m8.25 11a3.25 3.25 0 1 1 0-6.5 3.25 3.25 0 0 1 0 6.5Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

CameraRangefinder.displayName = 'CameraRangefinder';
