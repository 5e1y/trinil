import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Briefcase: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M16 8h4a1 1 0 0 1 1 1v3m-5-4-.544-1.632A2 2 0 0 0 13.559 5h-3.117a2 2 0 0 0-1.898 1.368L8 8m8 0H8m0 0H4a1 1 0 0 0-1 1v3m18 0v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-6m18 0-8 1M3 12l8 1m2 0v-.5a1 1 0 1 0-2 0v.5m2 0v1a1 1 0 1 1-2 0v-1"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Briefcase.displayName = 'Briefcase';
