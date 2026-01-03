import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const McrophoneOff: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M18.75 11.25V12a6.8 6.8 0 0 1-.29 1.96M5.25 11.25V12A6.75 6.75 0 0 0 12 18.75m-3.75 3H12m0 0h3.75m-3.75 0v-3m0 0a6.73 6.73 0 0 0 4.773-1.977M15.75 11.25V6a3.75 3.75 0 0 0-7.044-1.794M2.25 2.25l6 6m0 0V12a3.75 3.75 0 0 0 6.402 2.652M8.25 8.25l6.402 6.402m0 0 2.121 2.121m0 0 4.977 4.977"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
McrophoneOff.displayName = 'McrophoneOff';
