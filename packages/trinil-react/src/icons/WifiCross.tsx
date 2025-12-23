import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const WifiCross: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M5 12c3.866-3.866 10.134-3.866 14 0M7 15a7.07 7.07 0 0 1 8.34-1.235M3 9c4.97-4.97 13.03-4.97 18 0m-3 9 1.5-1.5M18 18l1.5 1.5M18 18l-1.5 1.5M18 18l-1.5-1.5m-1.16-2.735a5 5 0 1 0 5.32 8.47 5 5 0 0 0-5.32-8.47ZM12.75 18a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
WifiCross.displayName = 'WifiCross';
