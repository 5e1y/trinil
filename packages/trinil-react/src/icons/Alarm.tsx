import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Alarm: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="m16.5 10-4.441 3.454a.1.1 0 0 1-.12.003L8.5 11m8.803 6.803L19.5 20m-2.197-2.197A7.48 7.48 0 0 0 19.5 12.5q0-.706-.126-1.374m-2.07 6.677A7.48 7.48 0 0 1 12 20a7.48 7.48 0 0 1-5.303-2.197m0 0L4.5 20m2.197-2.197A7.48 7.48 0 0 1 4.5 12.5q0-.706.126-1.374m0 0a7.5 7.5 0 0 1 2.07-3.93 7.5 7.5 0 0 1 3.93-2.07m-6 6-.505-.505a3 3 0 0 1 0-4.242L5.88 4.62a3 3 0 0 1 4.242 0l.505.505m0 0a7.5 7.5 0 0 1 2.748 0m6 6a7.5 7.5 0 0 0-2.07-3.93 7.5 7.5 0 0 0-1.553-1.192 7.5 7.5 0 0 0-2.377-.878m6 6 .505-.505a3 3 0 0 0 0-4.242L18.12 4.62a3 3 0 0 0-4.242 0l-.505.505"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Alarm.displayName = 'Alarm';
