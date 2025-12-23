import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const VolumeHigh: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M18.318 6c3.576 3.314 3.576 8.686 0 12M14 8.667c1.987 1.84 1.987 4.825 0 6.666m2.159-8c2.782 2.578 2.782 6.756 0 9.334M5 16h1.697a1 1 0 0 1 .555.168l4.151 2.768a.383.383 0 0 0 .597-.32V5.384a.384.384 0 0 0-.597-.32L7.252 7.832A1 1 0 0 1 6.697 8H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2Z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
VolumeHigh.displayName = 'VolumeHigh';
