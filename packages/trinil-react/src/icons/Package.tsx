import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Package: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="m7.5 10 4.5 2.5M7.5 10l9-5m-9 5L3.14 7.578M12 12.5v8.856m0-8.856 8.86-4.922M16.5 5l3.986 2.214a1 1 0 0 1 .374.364M16.5 5l-4.014-2.23a1 1 0 0 0-.972 0l-8 4.444a1 1 0 0 0-.374.364M12 21.356a1 1 0 0 1-.486-.126l-8-4.444A1 1 0 0 1 3 15.912V8.088a1 1 0 0 1 .14-.51M12 21.356a1 1 0 0 0 .486-.126l8-4.444a1 1 0 0 0 .514-.874V8.088a1 1 0 0 0-.14-.51"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Package.displayName = 'Package';
