import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Cash: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M3 7.5v9a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1ZM14.5 12a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Zm3.25-.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm-11.5 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z" clip-rule="evenodd"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Cash.displayName = 'Cash';
