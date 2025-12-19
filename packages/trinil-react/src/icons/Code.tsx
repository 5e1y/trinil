import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Code: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="m16.5 7.5 4.43 4.43a.1.1 0 0 1 0 .14L16.5 16.5M14 3.5l-4 17m-2.5-4-4.43-4.43a.1.1 0 0 1 0-.14L7.5 7.5"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Code.displayName = 'Code';
