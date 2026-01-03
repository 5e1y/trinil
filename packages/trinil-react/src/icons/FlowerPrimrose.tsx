import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const FlowerPrimrose: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M7.89 7.89c-2.383-2.383-6.352.088-5.264 3.28l.167.488c.076.222.076.463 0 .685l-.167.488c-1.088 3.19 2.88 5.662 5.264 3.279m0-8.22c-2.383-2.383.088-6.352 3.28-5.264l.488.167c.222.076.462.076.684 0l.489-.167c3.19-1.088 5.662 2.88 3.279 5.264m-8.22 0L9.88 9.88m-1.989 6.23c-2.383 2.384.088 6.353 3.28 5.265l.488-.167a1.06 1.06 0 0 1 .684 0l.489.167c3.19 1.088 5.662-2.88 3.279-5.264m-8.22 0L9.88 14.12m6.23-6.23c2.384-2.384 6.353.087 5.265 3.278l-.167.489a1.06 1.06 0 0 0 0 .685l.167.488c1.088 3.19-2.88 5.662-5.264 3.279m0-8.22L14.12 9.88m1.989 6.23-1.989-1.988m0-4.242A3 3 0 0 1 15 12a3 3 0 0 1-.879 2.121m0-4.242A3 3 0 0 0 12 9a3 3 0 0 0-2.121.879m0 0A3 3 0 0 0 8.999 12c0 .829.337 1.579.88 2.121m0 0a3 3 0 0 0 2.12.88 3 3 0 0 0 2.122-.88"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
FlowerPrimrose.displayName = 'FlowerPrimrose';
