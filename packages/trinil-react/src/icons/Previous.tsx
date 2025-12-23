import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Previous: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M5 20.5v-17m14 2.892v11.216a1 1 0 0 1-1.563.826l-8.225-5.608a1 1 0 0 1 0-1.652l8.225-5.608A1 1 0 0 1 19 6.392Z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Previous.displayName = 'Previous';
