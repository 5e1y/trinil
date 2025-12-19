import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Navigation: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="m5.493 17.515 5.613-11.226a1 1 0 0 1 1.788 0l5.613 11.226c.386.77-.32 1.635-1.152 1.413l-5.097-1.36a1 1 0 0 0-.516 0l-5.097 1.36c-.833.222-1.538-.643-1.152-1.413Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Navigation.displayName = 'Navigation';
