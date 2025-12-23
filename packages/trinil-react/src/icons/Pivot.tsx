import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Pivot: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M7.306 7.306C4.723 8.273 3 10.014 3 12s1.723 3.727 4.306 4.694m0-9.388C8.673 6.795 10.28 6.5 12 6.5s3.327.295 4.694.806m-9.388 0C6.795 8.673 6.5 10.28 6.5 12c0 .687.047 1.357.136 2m.67-6.694C8.273 4.723 10.014 3 12 3s3.727 1.723 4.694 4.306m0 0C19.277 8.273 21 10.014 21 12s-1.723 3.727-4.306 4.694m0-9.388c.511 1.367.806 2.974.806 4.694s-.295 3.327-.806 4.694m0 0C15.727 19.277 13.987 21 12 21c-1.986 0-3.727-1.723-4.694-4.306M6.636 14l-1.363-1.364M6.636 14 8 12.636m-.694 4.058c.82.307 1.728.536 2.694.67.643.089 1.313.136 2 .136s1.357-.047 2-.136m0 0L12.636 16M14 17.364l-1.364 1.363M13.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Pivot.displayName = 'Pivot';
