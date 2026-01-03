import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const AxisX: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="m7.5 16.5.75-.75m0 0v-1.492m0 1.492L21.75 18m-16.5.75.375-.375M3 21l.375-.375m4.875-9.367V10.5m0-3v-.75m0-3V3m13.5 15-1.104-1.582M21.75 18l-1.565 1.195"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
AxisX.displayName = 'AxisX';
