import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const LightPoint: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M12 8V3m0 13v5m4.005-9.005h5m-13 0h-5m11.832 2.83 3.535 3.535M9.18 9.168 5.645 5.633m3.535 9.199-3.535 3.535m9.192-9.192 3.535-3.536M13.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
LightPoint.displayName = 'LightPoint';
