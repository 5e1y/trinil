import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const PersonInfo: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M9 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 0h1c1.313 0 2.429.844 2.836 2.018.18.522-.284.982-.836.982H6.17c-.552 0-1.016-.46-.835-.982A3 3 0 0 1 8.171 13.5zm6-4h3.5M15 12h3.5M15 14.5h2M3 18V6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

PersonInfo.displayName = 'PersonInfo';
