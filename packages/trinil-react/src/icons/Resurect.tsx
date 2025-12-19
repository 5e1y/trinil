import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Resurect: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M7 12.25h1.996a.525.525 0 0 0 .496-.334l1.414-3.806A.17.17 0 0 1 11.07 8c.082 0 .153.054.17.13l1.783 7.742a.17.17 0 0 0 .167.128.17.17 0 0 0 .163-.114l1.163-3.535a.52.52 0 0 1 .502-.351H17m4 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Resurect.displayName = 'Resurect';
