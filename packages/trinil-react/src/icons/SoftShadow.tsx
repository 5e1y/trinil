import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const SoftShadow: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="m14.914 15.086-5.581 5.581m8.927-4.927L13 21m7.749-3.749-3.223 3.223m-11.188-.812 2.724-2.724m0 0q.46.061.938.062c1.867 0 3.563-.73 4.818-1.922a7 7 0 1 0-5.756 1.86Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

SoftShadow.displayName = 'SoftShadow';
