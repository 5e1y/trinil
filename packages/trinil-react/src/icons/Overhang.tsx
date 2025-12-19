import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Overhang: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M18.293 5.707 5.707 18.293c-.63.63-1.707.184-1.707-.707V5a1 1 0 0 1 1-1h12.586c.89 0 1.337 1.077.707 1.707Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Overhang.displayName = 'Overhang';
