import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Thermos: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="m15.833 5-.194-1.164A1 1 0 0 0 14.653 3H9.347a1 1 0 0 0-.986.836l-.779 4.67A.424.424 0 0 0 8 9m7.833-4H17.5a1.5 1.5 0 0 1 0 3h-1.167m-.5-3 .5 3m0 0 .085.507A.424.424 0 0 1 16 9m0 0H8m8 0v11a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Thermos.displayName = 'Thermos';
