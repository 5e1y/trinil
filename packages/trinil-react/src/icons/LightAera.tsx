import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const LightAera: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M12 6V3m0 18v-3m9-6h.75m-19.5 0H3m4.5-6v-.75m-3.75 1.5-1.5-1.5M16.5 6v-.75m5.25 13.5-1.5-1.5m1.5-12-1.5 1.5m-16.5 10.5-1.5 1.5m5.25 0V18m9 .75V18M6 10.5v3A1.5 1.5 0 0 0 7.5 15h9a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 16.5 9h-9A1.5 1.5 0 0 0 6 10.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
LightAera.displayName = 'LightAera';
