import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const LinkUnlinked: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="m10.5 7.5.302-.905a6 6 0 0 1 1.45-2.348l.498-.497a5.303 5.303 0 0 1 7.5 7.5l-.497.497a6 6 0 0 1-2.348 1.451l-.905.302m-3 3-.302.905a6 6 0 0 1-1.45 2.348l-.498.497a5.303 5.303 0 1 1-7.5-7.5l.497-.498a6 6 0 0 1 2.348-1.45L7.5 10.5m9 8.25 1.5 3m.75-5.25 3 .75M7.5 5.25l-.75-3M5.25 7.5l-3-.75"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
LinkUnlinked.displayName = 'LinkUnlinked';
