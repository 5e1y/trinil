import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const CloudCheck: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M5.386 10.193a5.25 5.25 0 1 1 10.301-.38m-10.3.38A5.2 5.2 0 0 1 7.5 9.75c.99 0 1.916.274 2.706.75m-4.82-.307A5.251 5.251 0 0 0 7.5 20.25h4.134m4.053-10.438a5.241 5.241 0 0 1 4.97 1.98m-4.97-1.98a5.2 5.2 0 0 0-1.893.688m.456 8.25 2.894 2.894a.15.15 0 0 0 .212 0l4.91-4.91"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
CloudCheck.displayName = 'CloudCheck';
