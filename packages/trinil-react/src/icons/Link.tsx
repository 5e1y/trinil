import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Link: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M7.5 12h9m-3.441-2c.295-1.218 1.673-2 3.441-2h1c2 0 3.5 1.5 3.5 3.5v1c0 2-1.5 3.5-3.5 3.5h-1c-1.768 0-3.146-.782-3.441-2m-2.118-4C10.646 8.782 9.268 8 7.5 8h-1C4.5 8 3 9.5 3 11.5v1c0 2 1.5 3.5 3.5 3.5h1c1.768 0 3.146-.782 3.441-2"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Link.displayName = 'Link';
