import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Support: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M8.25 20.25h3m9 0h-3m-6 0v-3m0 3h3m0 0v-6m0 6h3m0 0v-9M4.5 3h12.879c1.336 0 2.005 1.616 1.06 2.56L5.561 18.44C4.616 19.383 3 18.714 3 17.378V4.5A1.5 1.5 0 0 1 4.5 3"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Support.displayName = 'Support';
