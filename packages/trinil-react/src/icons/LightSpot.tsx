import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const LightSpot: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M9 7 5.056 18.181M15 7l3.944 11.181M12 8v13m0 0c3.866 0 7-1.12 7-2.5 0-1.133-2.108-2.09-5-2.396M12 21c-3.866 0-7-1.12-7-2.5 0-1.133 2.109-2.09 5-2.396M13.5 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

LightSpot.displayName = 'LightSpot';
