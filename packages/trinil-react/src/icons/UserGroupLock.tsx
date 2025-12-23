import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const UserGroupLock: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M9 9a6 6 0 0 0-4.416 10.062M9 9a6 6 0 1 1 10.416 4.062M9 9c1.78 0 3.378.775 4.477 2.005M9 17a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0 0h1.333c1.1 0 2.076.533 2.683 1.355M9 17H7.667c-1.391 0-2.583.852-3.083 2.062m0 0A5.98 5.98 0 0 0 9 21a5.98 5.98 0 0 0 4.174-1.69M15 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0 0h1.333c1.391 0 2.583.852 3.083 2.062M15 11h-1.333q-.096 0-.19.005m5.939 2.057-.105.112m-5.834-2.169a6 6 0 0 1 1.45 3.051M23 18a5 5 0 0 1-5 5m5-5a5 5 0 0 0-3.69-4.826M23 18a5 5 0 0 0-5-5m0 10a5 5 0 0 1-4.826-3.69M18 23a5 5 0 0 1-5-5m0 0c0 .453.06.893.174 1.31M13 18c0-1.602.754-3.029 1.926-3.944M13 18a5 5 0 0 1 5-5m0 0c.453 0 .893.06 1.31.174M18 13a4.98 4.98 0 0 0-3.074 1.056M16.5 17.5h-.4a.1.1 0 0 0-.1.1v2.3a.1.1 0 0 0 .1.1h3.8a.1.1 0 0 0 .1-.1v-2.3a.1.1 0 0 0-.1-.1h-.4m-3 0v-1a1.5 1.5 0 0 1 3 0v1m-3 0h3"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
UserGroupLock.displayName = 'UserGroupLock';
