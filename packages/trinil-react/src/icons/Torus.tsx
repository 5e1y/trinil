import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Torus: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M15 12.054c-.597.509-1.536.946-3 .946s-2.403-.437-3-.946m6 0c.83-.708 1-1.554 1-1.554m-1 1.554s-.229-1.554-3-1.554-3 1.554-3 1.554M8 10.5s.17.846 1 1.554M21 12c0 3.866-4.03 7-9 7s-9-3.134-9-7 4.03-7 9-7 9 3.134 9 7Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Torus.displayName = 'Torus';
