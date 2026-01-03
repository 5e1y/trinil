import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Dollar: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M10.5 2.25v1.53m0 0v8.053m0-8.053q.245-.03.497-.03h1.7q.412 0 .803.07m-3-.04A4.06 4.06 0 0 0 7.23 6.3c-.99 2.474.634 5.21 3.27 5.533m0 0v8.347m0-8.347.049.006 2.902.322.049.006m-3 8.013v1.57m0-1.57q.391.07.803.07h1.7q.252 0 .497-.03m-3-.04A4.6 4.6 0 0 1 6.75 15M13.5 2.25v1.57m0 0v8.347m0-8.347A4.6 4.6 0 0 1 17.25 9m-3.75 3.167v8.053m0-8.053c2.636.324 4.26 3.059 3.27 5.533a4.06 4.06 0 0 1-3.27 2.52m0 0v1.53"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Dollar.displayName = 'Dollar';
