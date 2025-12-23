import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const SpeakerLow: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M17 8.667c1.987 1.84 1.987 4.825 0 6.666M9.25 8.75a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Zm1.25 3.75a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM6 18V6a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1Z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
SpeakerLow.displayName = 'SpeakerLow';
