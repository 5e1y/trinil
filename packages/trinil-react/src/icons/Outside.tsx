import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Outside: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M6 20.5v-2m0 0s3-.086 3-4c0-3.521-2.428-8.396-2.915-9.339a.095.095 0 0 0-.17 0C5.425 6.094 3 10.904 3 14.5c0 4 3 4 3 4Zm0 0V14m6.5 1H14m5 0h-1.5M14 15l-2 5.5m2-5.5h3.5m0 0 2 5.5m-9-2.5H21m-2.5-8.5V11m-4-5.5H13m2.5 3-1 1m2-4a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Outside.displayName = 'Outside';
