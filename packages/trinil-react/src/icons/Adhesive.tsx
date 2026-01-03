import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Adhesive: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M15.75 9c0 2.071-3.022 3.75-6.75 3.75S2.25 11.071 2.25 9m13.5 0c0-2.071-3.022-3.75-6.75-3.75M15.75 9v3.75M9 5.25C5.272 5.25 2.25 6.929 2.25 9M9 5.25h12.75v7.5h-6M2.25 9v6c0 2.071 3.022 3.75 6.75 3.75s6.75-1.679 6.75-3.75v-2.25M9 9.75s-1.5 0-1.5-.75S9 8.25 9 8.25s1.5 0 1.5.75-1.5.75-1.5.75Z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Adhesive.displayName = 'Adhesive';
