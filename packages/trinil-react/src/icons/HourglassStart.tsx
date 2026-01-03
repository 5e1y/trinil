import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const HourglassStart: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M3.75 3.75v1.146a5.43 5.43 0 0 0 3 4.854l2.33 1.165a1.214 1.214 0 0 1 0 2.17L6.75 14.25c-1.839.92-3 2.799-3 4.854v1.146a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-1.146a5.43 5.43 0 0 0-3-4.854l-2.33-1.165a1.214 1.214 0 0 1 0-2.17l2.33-1.165c1.839-.92 3-2.798 3-4.854V3.75a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5M9.519 7.5h.054c1.028 0 1.967.58 2.427 1.5.46-.92 1.4-1.5 2.427-1.5h.054a2.8 2.8 0 0 0 2.657-1.915l.112-.335H6.75l.112.335A2.8 2.8 0 0 0 9.519 7.5" clip-rule="evenodd"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
HourglassStart.displayName = 'HourglassStart';
