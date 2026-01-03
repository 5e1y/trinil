import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Dropper: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="m9 18-6 3 3-6 6-6-.164-.491a3 3 0 0 1 .725-3.07l2.325-2.325a3 3 0 0 1 4.243 0l1.757 1.758a3 3 0 0 1 0 4.242L18.56 11.44a3 3 0 0 1-3.07.725L15 12l-1.5 1.5M9 18l-.75-.75M9 18l2.25-2.25m0 0L10.5 15m.75.75 2.25-2.25m0 0-.75-.75"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Dropper.displayName = 'Dropper';
