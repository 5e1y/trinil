import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Opacity: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M11 3.055a9 9 0 1 1-.147 17.873M6.5 4.876a9 9 0 0 1 2-1.17M3.761 8.372a9 9 0 0 1 .976-1.688m-1.695 4.44a9 9 0 0 0 .006 1.814m1.71 4.405a9 9 0 0 1-.997-1.714m4.572 4.593a9 9 0 0 1-1.65-.96"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Opacity.displayName = 'Opacity';
