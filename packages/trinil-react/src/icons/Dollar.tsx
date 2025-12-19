import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Dollar: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M12 20c.523 0 1.027-.062 1.5-.182 2.029-.513 3.5-2.08 3.5-4.318a3.05 3.05 0 0 0-2.451-2.99L12 12m0 8a5.002 5.002 0 0 1-5-5m5 5v1.5m0-1.5v-8m0-8c-.523 0-1.027.062-1.5.182C8.471 4.695 7 6.262 7 8.5a3.05 3.05 0 0 0 2.451 2.99L12 12m0-8a5.002 5.002 0 0 1 5 5m-5-5v8m0-8V2.5"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Dollar.displayName = 'Dollar';
