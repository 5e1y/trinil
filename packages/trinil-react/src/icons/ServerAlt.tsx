import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const ServerAlt: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M13.5 6.75h.75m3 0H18m-3.75 10.5h-.75m4.5 0h-.75m-7.5 0v-1.5a1.5 1.5 0 0 1 1.5-1.5h9a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-9a1.5 1.5 0 0 1-1.5-1.5zm0 0h-3m0 0A2.25 2.25 0 0 0 4.5 15m2.25 2.25A2.25 2.25 0 0 1 4.5 19.5M9.75 6.75v-1.5a1.5 1.5 0 0 1 1.5-1.5h9a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-9a1.5 1.5 0 0 1-1.5-1.5zm0 0h-3m0 0A2.25 2.25 0 0 0 4.5 4.5m2.25 2.25A2.25 2.25 0 0 1 4.5 9m0 0v6m0-6a2.25 2.25 0 0 1 0-4.5m0 10.5a2.25 2.25 0 0 0 0 4.5m0 0v2.25m0-17.25V2.25"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
ServerAlt.displayName = 'ServerAlt';
