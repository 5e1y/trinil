import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const LightBulbOff: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M9.75 18.75v1.5a1.5 1.5 0 0 0 1.5 1.5h1.5a1.5 1.5 0 0 0 1.5-1.5v-1.5m-4.5 0h4.5m-4.5 0v-1.378c0-.969-.644-1.797-1.46-2.318a6.58 6.58 0 0 1-3.04-5.547V9a6.75 6.75 0 0 1 13.5 0v.507a6.58 6.58 0 0 1-3.04 5.547c-.816.521-1.46 1.35-1.46 2.318v1.378"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
LightBulbOff.displayName = 'LightBulbOff';
