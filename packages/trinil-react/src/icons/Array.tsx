import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Array: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M5.4 20.5H3.6a.1.1 0 0 1-.1-.1v-9.8a.1.1 0 0 1 .1-.1h1.8a.1.1 0 0 1 .1.1v9.8a.1.1 0 0 1-.1.1ZM10.4 18.5H8.6a.1.1 0 0 1-.1-.1V8.1a.1.1 0 0 1 .1-.1h1.8a.1.1 0 0 1 .1.1v10.3a.1.1 0 0 1-.1.1ZM15.4 16h-1.8a.1.1 0 0 1-.1-.1V6.1a.1.1 0 0 1 .1-.1h1.8a.1.1 0 0 1 .1.1v9.8a.1.1 0 0 1-.1.1ZM20.4 13.5h-1.8a.1.1 0 0 1-.1-.1V3.6a.1.1 0 0 1 .1-.1h1.8a.1.1 0 0 1 .1.1v9.8a.1.1 0 0 1-.1.1Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Array.displayName = 'Array';
