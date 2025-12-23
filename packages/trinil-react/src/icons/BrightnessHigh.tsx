import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const BrightnessHigh: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M12 6V2m6 10h4m-10 6v4M6 12H2m14.243-4.243L19.07 4.93m-2.828 11.314 2.828 2.828M7.757 16.243 4.93 19.07M7.757 7.757 4.93 4.93M16 12a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
BrightnessHigh.displayName = 'BrightnessHigh';
