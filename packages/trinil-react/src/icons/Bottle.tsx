import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Bottle: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M10 6 8.293 7.707A1 1 0 0 0 8 8.414v2.35a1 1 0 0 0 .106.447l.17.342a1 1 0 0 1 0 .894l-.17.342a1 1 0 0 0-.106.447V20a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6.764a1 1 0 0 0-.106-.447l-.17-.342a1 1 0 0 1 0-.894l.17-.342a1 1 0 0 0 .106-.447v-2.35a1 1 0 0 0-.293-.707L14 6m-4 0V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2m-4 0h4"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Bottle.displayName = 'Bottle';
