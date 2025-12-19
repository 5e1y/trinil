import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const WifiLock: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M3 9c4.97-4.97 13.03-4.97 18 0M5 12c3.866-3.866 10.134-3.866 14 0m-2.5 5.5v-1a1.5 1.5 0 0 1 3 0v1m-3 0h3m-3 0a.5.5 0 0 0-.5.5v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1a.5.5 0 0 0-.5-.5m-4.16-3.735a5 5 0 1 1 5.32 8.47 5 5 0 0 1-5.32-8.47Zm0 0A7.07 7.07 0 0 0 7 15m5.75 3a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

WifiLock.displayName = 'WifiLock';
