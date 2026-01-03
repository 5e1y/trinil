import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Scene: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M11.854 11.557a5.255 5.255 0 0 0-1.93 5.517m1.93-5.517a5.246 5.246 0 1 1-1.93 5.517m1.93-5.517L8.632 3.501c-.352-.879-1.597-.879-1.948 0L2.487 13.993a.8.8 0 0 0-.063.389c.127 1.094 1.291 2.946 5.234 2.946.89 0 1.639-.095 2.266-.253m7.326-1.325A2.25 2.25 0 0 1 15 18m2.25-12.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Scene.displayName = 'Scene';
