import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const BrightnessMedium: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M12 5.25v-1.5m0 15v1.5m6.758-8.257h1.5m-15 0h-1.5m13.028 4.775 1.06 1.06M7.24 7.222l-1.06-1.06m1.06 10.617-1.06 1.06M16.785 7.233l1.06-1.061M12 15.75a3.75 3.75 0 1 1 0-7.5 3.75 3.75 0 0 1 0 7.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
BrightnessMedium.displayName = 'BrightnessMedium';
