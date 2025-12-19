import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Paperclip: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="m14.465 8.035-7.233 7.233A1.25 1.25 0 1 0 9 17.035l9-9A2.5 2.5 0 0 0 14.464 4.5l-9.353 9.353a3.75 3.75 0 0 0 5.303 5.304L18 11.57"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Paperclip.displayName = 'Paperclip';
