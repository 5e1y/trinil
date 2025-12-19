import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const KeyframeLinear: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M12 20.586a1 1 0 0 1-.707-.293l-7.586-7.586a1 1 0 0 1 0-1.414l7.586-7.586A1 1 0 0 1 12 3.414m0 17.172a1 1 0 0 0 .707-.293l7.586-7.586a1 1 0 0 0 0-1.414l-7.586-7.586A1 1 0 0 0 12 3.414m0 17.172V3.414"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

KeyframeLinear.displayName = 'KeyframeLinear';
