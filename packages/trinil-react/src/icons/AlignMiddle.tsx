import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const AlignMiddle: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M4.5 12H7m0 0h3.5M7 12v6.5a1 1 0 0 0 1 1h1.5a1 1 0 0 0 1-1V12M7 12V5.5a1 1 0 0 1 1-1h1.5a1 1 0 0 1 1 1V12m0 0h3m0 0H17m-3.5 0v3.5a1 1 0 0 0 1 1H16a1 1 0 0 0 1-1V12m-3.5 0V8.5a1 1 0 0 1 1-1H16a1 1 0 0 1 1 1V12m0 0h2.5"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

AlignMiddle.displayName = 'AlignMiddle';
