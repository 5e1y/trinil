import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Money: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M15.75 15v-1.5M5.25 15v-1.5M6.75 6a1.5 1.5 0 0 1 1.5-1.5h12a1.5 1.5 0 0 1 1.5 1.5v8.25m-3-3.75V18a1.5 1.5 0 0 1-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5v-7.5A1.5 1.5 0 0 1 3.75 9h13.5a1.5 1.5 0 0 1 1.5 1.5m-6 3.75a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Money.displayName = 'Money';
