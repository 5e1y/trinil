import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const MegaphoneSound: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M9 14.25h2.546a1.5 1.5 0 0 1 .832.252l3.977 2.651a.575.575 0 0 0 .895-.479V4.326a.576.576 0 0 0-.895-.48l-3.977 2.652a1.5 1.5 0 0 1-.832.252H5.25a3 3 0 0 0-3 3v1.5a3 3 0 0 0 3 3m3.75 0 1.078 3.956a1.5 1.5 0 0 1-1.153 1.865l-.759.152a1.5 1.5 0 0 1-1.753-1.121L5.25 14.25m3.75 0H5.25m15-3.75h1.5m-1.5-3.75.976-.976m-.976 8.476.976.976"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
MegaphoneSound.displayName = 'MegaphoneSound';
