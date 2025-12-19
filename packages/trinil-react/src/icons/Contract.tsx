import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Contract: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M16.5 17.5c-1.5 1-1.5.5-2.5 0-1.265-.633-1.556 1-2 0-.889-2-2.5-2-2.5 1m-2-5.5h8m-8-2.5h8M7.5 8h4m7.41 0a1 1 0 0 1 .09.414V20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.586a1 1 0 0 1 .414.09M18.91 8a1 1 0 0 0-.203-.293l-4.414-4.414A1 1 0 0 0 14 3.09M18.91 8H15a1 1 0 0 1-1-1V3.09"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Contract.displayName = 'Contract';
