import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const WindowsLogo: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M20 12v7.887a.1.1 0 0 1-.112.099L11.5 18.937M20 12V4.113a.1.1 0 0 0-.112-.099L11.5 5.062M20 12h-8.5M4 12V6.088a.1.1 0 0 1 .088-.099l7.412-.927M4 12v5.912a.1.1 0 0 0 .088.099l7.412.926M4 12h7.5m0 0V5.062m0 6.938v6.937"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

WindowsLogo.displayName = 'WindowsLogo';
