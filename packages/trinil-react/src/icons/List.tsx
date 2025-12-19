import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const List: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M10.5 12h9m-9-7h9m-9 14h9m-14 0A.75.75 0 1 1 4 19a.75.75 0 0 1 1.5 0Zm0-14A.75.75 0 1 1 4 5a.75.75 0 0 1 1.5 0Zm0 7A.75.75 0 1 1 4 12a.75.75 0 0 1 1.5 0Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

List.displayName = 'List';
