import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Opacity: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M9.476 2.58a9.7 9.7 0 0 1 5.047.002c5.202 1.394 8.289 6.74 6.895 11.942a9.746 9.746 0 0 1-11.941 6.894M5.105 5.105a9.7 9.7 0 0 0-2.523 4.371m2.523 9.42a9.8 9.8 0 0 1-2.524-4.372"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Opacity.displayName = 'Opacity';
