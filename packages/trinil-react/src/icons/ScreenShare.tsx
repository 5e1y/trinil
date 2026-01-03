import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const ScreenShare: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M12 8.25 8.25 12M12 8.25 15.75 12M12 8.25v7.5m9.75-8.25v9a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
ScreenShare.displayName = 'ScreenShare';
