import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Plug: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M7.5 9H6a1 1 0 0 0-1 1v2a7 7 0 0 0 4.725 6.622c.444.153.775.552.775 1.022V21.5M7.5 9V4.25a1.25 1.25 0 0 1 2.5 0V9M7.5 9H10m0 0h4m2.5 0H18a1 1 0 0 1 1 1v2a7 7 0 0 1-4.725 6.622c-.444.153-.775.552-.775 1.022V21.5m3-12.5V4.25a1.25 1.25 0 1 0-2.5 0V9m2.5 0H14"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Plug.displayName = 'Plug';
