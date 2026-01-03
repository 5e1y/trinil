import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Umbrella: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M12 10.447c1.357 0 2.714.518 3.75 1.553a3.842 3.842 0 0 1 6 0c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a3.842 3.842 0 0 1 6 0A5.29 5.29 0 0 1 12 10.447m0 0V19.5a2.25 2.25 0 0 1-4.5 0V18"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Umbrella.displayName = 'Umbrella';
