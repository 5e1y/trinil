import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const WateringCan: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M9 8.25h-.75a1.5 1.5 0 0 0-1.5 1.5v1.5l-4.5-1.5v3l4.5 3v3a1.5 1.5 0 0 0 1.5 1.5h8.25a1.5 1.5 0 0 0 1.5-1.5v-1.5m-9-9c1.457-6.594 12.71-5.847 12.75 1.5.035 6.563-3.75 7.5-3.75 7.5m-9-9a5.175 5.175 0 0 0 6.53.647l.97-.647a1.5 1.5 0 0 1 1.5 1.5v7.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
WateringCan.displayName = 'WateringCan';
