import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const BuildingAlt: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M12 20h2.5M12 20V9.5M12 20H9.5m5 0h3m-3 0v-3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3m0 0H19a1 1 0 0 0 1-1v-8.882a1 1 0 0 0-.553-.894l-3-1.5a1 1 0 0 0-.894 0L12 9.5m0 0V6.618a1 1 0 0 0-.553-.894l-2.97-1.485a1 1 0 0 0-.941.025L4.506 5.99A1 1 0 0 0 4 6.858V19a1 1 0 0 0 1 1h1.5m3 0h-3m3 0v-3a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v3m9.5-6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM8 10a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

BuildingAlt.displayName = 'BuildingAlt';
