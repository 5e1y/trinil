import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const FruitStrawberry: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M14.506 4.116s13.61 3.816-.62 16.753a2.814 2.814 0 0 1-3.772 0c-14.23-12.937-.62-16.753-.62-16.753m5.012 0-.256.384 1.5 3.75L12 6.75l-3.75 1.5 1.5-3.75-.256-.384m5.012 0L15.75 2.25 12 3l-3.75-.75 1.244 1.866M8.25 11.25V12m7.5-.75V12M12 12v.75m-2.25 3v.75m4.5-.75v.75"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
FruitStrawberry.displayName = 'FruitStrawberry';
