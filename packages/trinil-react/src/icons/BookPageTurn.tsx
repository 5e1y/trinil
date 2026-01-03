import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const BookPageTurn: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="m12 21 .554-.317A8.75 8.75 0 0 1 21.75 21V7.5a8.74 8.74 0 0 0-4.5-1.462M12 21l-.554-.317A8.75 8.75 0 0 0 2.25 21V7.5a8.75 8.75 0 0 1 9.196-.316L12 7.5M12 21V7.5M12 21l5.25-4.5V6.038M12 7.5 17.25 3v3.038"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
BookPageTurn.displayName = 'BookPageTurn';
