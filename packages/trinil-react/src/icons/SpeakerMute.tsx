import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const SpeakerMute: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M14.25 8.25 18 12m0 0 3.75 3.75M18 12l-3.75 3.75M18 12l3.75-3.75m-10.5-3v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V5.25a1.5 1.5 0 0 1 1.5-1.5h6a1.5 1.5 0 0 1 1.5 1.5m-6 9v1.5a1.5 1.5 0 0 0 3 0v-1.5a1.5 1.5 0 0 0-3 0m3-6a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
SpeakerMute.displayName = 'SpeakerMute';
