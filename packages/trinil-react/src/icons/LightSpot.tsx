import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const LightSpot: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M12 21.75c4.97 0 9-2.35 9-5.25 0-.521-.13-1.025-.373-1.5M12 21.75c-4.97 0-9-2.35-9-5.25 0-.521.13-1.025.373-1.5M12 21.75v-12M3.373 15l.116-.212M3.373 15q.054-.107.116-.212M7.5 7.5l-4.01 7.288m0 0c.891-1.51 2.931-2.707 5.51-3.24M20.627 15l-.116-.212m.116.212a4 4 0 0 0-.116-.212M16.5 7.5l4.01 7.288m0 0c-.892-1.51-2.931-2.707-5.51-3.24M14.25 4.5a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
LightSpot.displayName = 'LightSpot';
