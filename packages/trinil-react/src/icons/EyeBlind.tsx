import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const EyeBlind: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M13.852 7.898a4.5 4.5 0 0 0-5.955 5.955m5.955-5.955-5.954 5.954m5.954-5.954c.997.45 1.8 1.253 2.25 2.25m-8.204 3.704a4.5 4.5 0 0 0 2.25 2.25m5.954-5.954a4.5 4.5 0 0 1-5.955 5.955m5.955-5.955-5.954 5.954m11.063-4.795.539.693c-4.586 7.055-14.914 7.055-19.5 0 4.428-6.641 14.06-6.993 18.961-.693"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
EyeBlind.displayName = 'EyeBlind';
