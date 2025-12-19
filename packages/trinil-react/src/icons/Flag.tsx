import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Flag: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M5 21v-6m0 0V5.387a1 1 0 0 1 1.316-.948l.429.143c1.77.59 3.697.479 5.387-.309a7.3 7.3 0 0 1 5.569-.244l.64.232A1 1 0 0 1 19 5.2v8.917a.97.97 0 0 1-1.299.91 7.3 7.3 0 0 0-5.569.245 7.3 7.3 0 0 1-5.387.309z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Flag.displayName = 'Flag';
