import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Navigation: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="m3.847 19.692 6.765-16.495c.51-1.241 2.267-1.241 2.776 0L20.151 19.7c.521 1.273-.803 2.518-2.042 1.919l-5.456-2.64a1.5 1.5 0 0 0-1.305-.001l-5.461 2.635c-1.24.598-2.562-.648-2.04-1.92"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Navigation.displayName = 'Navigation';
