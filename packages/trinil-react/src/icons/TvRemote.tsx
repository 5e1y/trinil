import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const TvRemote: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M12 6.5V8m0 0v1.5M12 8h-1.5M12 8h1.5m-3 4.5v.5m3-.5v.5m-3 3v.5m3-.5v.5m-6-11.7v11.7a4.5 4.5 0 1 0 9 0V4.8A1.8 1.8 0 0 0 14.7 3H9.3a1.8 1.8 0 0 0-1.8 1.8Z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
TvRemote.displayName = 'TvRemote';
