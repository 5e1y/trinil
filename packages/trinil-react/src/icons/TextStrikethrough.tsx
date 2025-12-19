import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const TextStrikethrough: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M3.866 13h8m0 0h8m-8 0c1.645.36 3.52.75 4.262 2.261a3.637 3.637 0 0 1-3.265 5.239H11.5a4 4 0 0 1-4-4m2.16-6.04a3.637 3.637 0 0 1 1.477-6.96H12.5a4 4 0 0 1 4 4"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

TextStrikethrough.displayName = 'TextStrikethrough';
