import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const McrophoneOff: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M8.5 12V6.5A3.5 3.5 0 0 1 14.45 4M6 10.5V12c0 1.227.368 2.367 1 3.318M18 10.5V12a6 6 0 0 1-6 6m0 0v3m0-3a5.97 5.97 0 0 1-3.329-1.007M12 21h4m-4 0H8m.671-4.007L6 21m2.671-4.007 1.387-2.08m0 0A3.5 3.5 0 0 0 15.5 12V6.749m-5.442 8.163L15.5 6.75M18 3l-2.5 3.75"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
McrophoneOff.displayName = 'McrophoneOff';
