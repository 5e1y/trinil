import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Sofa: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M5.5 10.5H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h.25m1.25-6V14m0-3.5v-2a1 1 0 0 1 1-1h5.75m6.75 3h1.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-.25m-1.25-6V14m0-3.5v-2a1 1 0 0 0-1-1h-5.75m-6.75 9H19m-13.5 0V14m0 2.5H4.25m14.75 0V14m0 2.5h1.25M5.5 14h6.75M19 14h-6.75m8 2.5V18m-16-1.5V18m8-10.5V14"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Sofa.displayName = 'Sofa';
