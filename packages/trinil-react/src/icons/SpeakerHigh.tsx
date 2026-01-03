import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const SpeakerHigh: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M14.652 9.348A3.74 3.74 0 0 1 15.75 12c0 1.036-.42 1.973-1.098 2.652m2.121-7.425A6.73 6.73 0 0 1 18.75 12a6.73 6.73 0 0 1-1.977 4.773m2.121-11.667A9.72 9.72 0 0 1 21.75 12a9.72 9.72 0 0 1-2.856 6.894M11.25 5.25v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V5.25a1.5 1.5 0 0 1 1.5-1.5h6a1.5 1.5 0 0 1 1.5 1.5m-6 9v1.5a1.5 1.5 0 0 0 3 0v-1.5a1.5 1.5 0 0 0-3 0m3-6a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
SpeakerHigh.displayName = 'SpeakerHigh';
