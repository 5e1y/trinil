import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Server: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M12 10.5h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v3.5a1 1 0 0 0 1 1zm0 0v3m-6-6V8m3-.5V8m-3 8v.5m3-.5v.5m3-3H4a1 1 0 0 0-1 1V18a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Server.displayName = 'Server';
