import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Browser: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M12 21C7.229 15.948 7.229 8.052 12 3m0 18a9 9 0 0 1-9-9m9 9q.677-.718 1.227-1.507M12 21q.959-.001 1.862-.193M12 3a9 9 0 0 0-9 9m9-9a9 9 0 0 1 9 9m-9-9a13.09 13.09 0 0 1 3.47 10.687M3 12h18m0 0q-.001.959-.193 1.862m-5.337-.175a5 5 0 0 0-2.243 5.806m2.243-5.806A5 5 0 0 1 18 13c1.04 0 2.007.318 2.807.862m-7.58 5.631c.147.472.363.914.635 1.314m0 0a5 5 0 1 0 6.945-6.945m-1.893 5.052a2 2 0 1 1-2.828-2.828 2 2 0 0 1 2.828 2.828Zm0 0L20 20"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Browser.displayName = 'Browser';
