import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Flag: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M3 21v-6m0 0V3.204c0-.097.099-.162.187-.124l1.35.579a9.75 9.75 0 0 0 7.463.09 9.75 9.75 0 0 1 7.462.092l1.455.623c.05.022.083.071.083.126v11.706a.134.134 0 0 1-.187.124l-1.35-.58A9.75 9.75 0 0 0 12 15.75a9.75 9.75 0 0 1-7.462-.091z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Flag.displayName = 'Flag';
