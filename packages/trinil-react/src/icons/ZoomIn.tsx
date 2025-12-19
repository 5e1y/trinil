import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const ZoomIn: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="m4 20 4.904-4.904m0 0a6.5 6.5 0 1 1 9.192-9.192 6.5 6.5 0 0 1-9.192 9.192Zm4.692-4.692V7m0 3.404V14m0-3.596H17m-3.404 0H10"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

ZoomIn.displayName = 'ZoomIn';
