import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const ListNumbered: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M10.5 12h9m-9-7h9m-9 14h9M4.5 3h1.4a.1.1 0 0 1 .1.1V7m1.5 6.5H4.6c-.055 0-.1-.045-.095-.1a.93.93 0 0 1 .413-.674l2.029-1.331A1.32 1.32 0 0 0 6.18 9H6a1.5 1.5 0 0 0-1.5 1.5m2 7.5H6m.5 0 .317-.158a1.236 1.236 0 0 0-.553-2.342H6a1.5 1.5 0 0 0-1.415 1M6.5 18l.317.158a1.236 1.236 0 0 1-.553 2.342H6a1.5 1.5 0 0 1-1.415-1"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

ListNumbered.displayName = 'ListNumbered';
