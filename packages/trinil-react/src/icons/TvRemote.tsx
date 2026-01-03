import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const TvRemote: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M12 9.75V7.5m0 0V5.25m0 2.25H9.75m2.25 0h2.25m-4.5 9.75v-.75m4.5.75v-.75m-4.5-3v-.75m4.5.75v-.75M6 3.75v12a6 6 0 0 0 12 0v-12a1.5 1.5 0 0 0-1.5-1.5h-9A1.5 1.5 0 0 0 6 3.75"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
TvRemote.displayName = 'TvRemote';
