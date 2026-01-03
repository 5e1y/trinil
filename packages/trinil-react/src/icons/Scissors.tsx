import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Scissors: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M9.402 15.348a3.75 3.75 0 1 0-5.303 5.303 3.75 3.75 0 0 0 5.303-5.303m0 0L12.75 12M9.402 8.652a3.75 3.75 0 1 0-5.303-5.303 3.75 3.75 0 0 0 5.303 5.303m0 0L12.75 12m0 0L21 3.75M12.75 12 21 20.25"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Scissors.displayName = 'Scissors';
