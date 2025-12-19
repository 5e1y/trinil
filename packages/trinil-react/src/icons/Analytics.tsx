import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Analytics: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M8.904 15.096 4 20m4.904-4.904a6.5 6.5 0 1 1 9.192-9.192 6.5 6.5 0 0 1-9.192 9.192ZM16 13v-2.9a.1.1 0 0 0-.1-.1h-2.3a.1.1 0 0 0-.1.1M16 13h-2.5m2.5 0h1m-3.5-2.9V13m0-2.9V7.6a.1.1 0 0 0-.1-.1h-2.3a.1.1 0 0 0-.1.1V13m2.5 0H11m0 0h-1"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Analytics.displayName = 'Analytics';
