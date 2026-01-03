import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Slice: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M6.429 9.75 2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m-11.142 0L2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m0 0L21.75 12l-4.179 2.25m-11.142 0L2.25 16.5 12 21.75l9.75-5.25-4.179-2.25m-11.142 0 5.571 3 5.571-3"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Slice.displayName = 'Slice';
