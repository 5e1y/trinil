import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Copy: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M8 5v-.5a1 1 0 0 1 1-1h6.086a1 1 0 0 1 .707.293l3.414 3.414a1 1 0 0 1 .293.707V16.5a1 1 0 0 1-1 1H18m-12.5 3h9a1 1 0 0 0 1-1v-7.586a1 1 0 0 0-.293-.707l-3.414-3.414a1 1 0 0 0-.707-.293H5.5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Copy.displayName = 'Copy';
