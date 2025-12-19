import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const EyeOpen: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M20.637 12.531c-4.252 5.843-13.022 5.843-17.274 0a.9.9 0 0 1 0-1.062c4.252-5.843 13.022-5.843 17.274 0 .23.317.23.745 0 1.062ZM8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z" clip-rule="evenodd"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

EyeOpen.displayName = 'EyeOpen';
