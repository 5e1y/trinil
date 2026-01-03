import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const IsometricView: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="m15.417 17.782-2.563 2.169c-.472.399-1.236.399-1.708 0l-2.563-2.169m6.834 0L12 14.892m3.417 2.89 3.417-2.89M5.166 9.108l-2.562 2.168c-.472.4-.472 1.047 0 1.446l2.562 2.168m0-5.782L8.583 12M5.166 9.109l3.417-2.891M12 14.89 8.583 12M12 14.891 15.417 12M12 14.891l-3.417 2.891m0-5.782-3.417 2.891M8.583 12 12 9.109M8.583 6.218l2.563-2.169c.472-.399 1.236-.399 1.708 0l2.563 2.169m-6.834 0L12 9.108m6.834 5.783 2.562-2.168c.472-.4.472-1.047 0-1.446L18.834 9.11m0 5.782L15.417 12M12 9.109 15.417 12M12 9.109l3.417-2.891m0 5.782 3.417-2.891m0 0-3.417-2.891M8.583 17.782l-3.417-2.89"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
IsometricView.displayName = 'IsometricView';
