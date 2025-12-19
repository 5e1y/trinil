import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const EyeOff: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M14.22 8.671a4 4 0 1 1-4.438 6.657m4.437-6.657.776-1.163m-.776 1.163L9.781 15.33m5.214-7.821a10.55 10.55 0 0 1 5.642 3.961c.23.317.23.745 0 1.062-2.785 3.828-7.51 5.148-11.632 3.961m5.99-8.984L17.667 3.5M9.78 15.329l-.776 1.163m0 0L6.333 20.5M11.5 8.031A4 4 0 0 0 8.126 13M12 7.086c-3.256 0-6.511 1.461-8.637 4.383a.9.9 0 0 0 0 1.062A10.6 10.6 0 0 0 6.5 15.406"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

EyeOff.displayName = 'EyeOff';
