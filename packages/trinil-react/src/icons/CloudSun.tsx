import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const CloudSun: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M5.354 11.707a5.252 5.252 0 0 1 8.464-3.025m-8.464 3.025.032-.014A5.2 5.2 0 0 1 7.5 11.25c.99 0 1.916.274 2.706.75m-4.852-.293A5.251 5.251 0 0 0 7.5 21.75h9A5.25 5.25 0 0 0 18 11.467m-2.443-.133.13-.021a5.3 5.3 0 0 1 2.313.154m-2.443-.133a5.2 5.2 0 0 0-1.763.666m1.763-.665a5.26 5.26 0 0 0-1.739-2.653M12.75 4.5H10.5M18 9.75v1.717M14.25 8.25l-.432.432M15.75 4.5a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
CloudSun.displayName = 'CloudSun';
