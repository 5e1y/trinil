import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Moon: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M10 21A9 9 0 1 0 5.58 4.158a.7.7 0 0 0-.278.907c.12.265.386.431.676.452a6.5 6.5 0 0 1 0 12.966.8.8 0 0 0-.676.452.7.7 0 0 0 .279.907A8.96 8.96 0 0 0 10 21Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Moon.displayName = 'Moon';
