import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const TrashEmpty: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="m6 9 .924 11.083A1 1 0 0 0 7.92 21h8.16a1 1 0 0 0 .996-.917L18 9M6 9H4.5M6 9h12m0 0h1.5M15 11.5l-.5 7m-5.5-7 .5 7m2.5-7v7m-5-12L5.5 6M8 4 7 3m9 1 1-1m0 3.5 1.5-.5"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

TrashEmpty.displayName = 'TrashEmpty';
