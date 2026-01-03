import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const PaperPlane: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="m21.75 2.25-5.25 19.5-4.5-4.5m9.75-15L2.25 7.5l4.5 4.5m15-9.75L6.75 12m15-9.75-9.75 15m0 0-6.75 1.5L6.75 12"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
PaperPlane.displayName = 'PaperPlane';
