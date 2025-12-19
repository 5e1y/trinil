import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Glass: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M8 21h4m0 0h4m-4 0v-9m0 0h-.232a5.228 5.228 0 0 1-4.35-8.127l.552-.828A.1.1 0 0 1 8.053 3h7.893a.1.1 0 0 1 .084.045l.552.828A5.227 5.227 0 0 1 12.232 12z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Glass.displayName = 'Glass';
