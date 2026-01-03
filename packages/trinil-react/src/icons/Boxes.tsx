import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Boxes: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M16.5 20.25 21 18v-5.25m-4.5 7.5V15m0 5.25L12 18m9-5.25L16.5 15m4.5-2.25-4.5-2.25m0 4.5L12 12.75M12 18v-5.25M12 18l-4.5 2.25m4.5-7.5 4.5-2.25M12 12.75 7.5 15m4.5-2.25L7.5 10.5m4.5 2.25V7.5m4.5 3V5.25m-9 15V15m0 5.25L3 18v-5.25M7.5 15 3 12.75m0 0 4.5-2.25m0 0V5.25m9 0L12 7.5m4.5-2.25L12 3 7.5 5.25M12 7.5 7.5 5.25"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Boxes.displayName = 'Boxes';
