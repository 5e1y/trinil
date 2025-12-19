import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Newspaper: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M19.75 19H4.5A1.5 1.5 0 0 1 3 17.5V6a1 1 0 0 1 1-1h13.5a1 1 0 0 1 1 1v1m1.25 12c-.69 0-1.25-.56-1.25-1.25V7m1.25 12c.69 0 1.25-.56 1.25-1.25V8a1 1 0 0 0-1-1h-1.5m-5.5.5h2.5M13 10h3m-3 2.5h1.5m-9-4.9v4.8a.1.1 0 0 0 .1.1h4.8a.1.1 0 0 0 .1-.1V7.6a.1.1 0 0 0-.1-.1H5.6a.1.1 0 0 0-.1.1Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Newspaper.displayName = 'Newspaper';
