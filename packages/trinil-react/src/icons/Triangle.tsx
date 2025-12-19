import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Triangle: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="m3.21 18.755 7.712-14.552a1.213 1.213 0 0 1 2.143-.008l7.85 14.552c.44.816-.146 1.808-1.068 1.808H4.283c-.919 0-1.506-.985-1.074-1.8Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Triangle.displayName = 'Triangle';
