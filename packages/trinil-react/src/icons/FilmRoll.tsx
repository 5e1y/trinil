import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const FilmRoll: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M11.25 7.5V6a1.5 1.5 0 0 0-1.5-1.5H9A1.5 1.5 0 0 0 7.5 3H6a1.5 1.5 0 0 0-1.5 1.5h-.75A1.5 1.5 0 0 0 2.25 6v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V18m0-10.5h1.5c.828 0 1.476.69 1.747 1.473A4.5 4.5 0 0 0 18.75 12a3 3 0 0 1 3 3v3h-10.5m0-10.5h-4.5V18h4.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
FilmRoll.displayName = 'FilmRoll';
