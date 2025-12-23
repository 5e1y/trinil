import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const DatabaseCheck: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M20 9c0 2.761-3.582 5-8 5s-8-2.239-8-5m16 0c0-2.761-3.582-5-8-5S4 6.239 4 9m16 0v3M4 9v3m0 0c0 2.761 3.582 5 8 5q.566 0 1.11-.048M4 12v3c0 2.761 3.582 5 8 5q.71 0 1.384-.075M20 12v1.416M20 12c0 .452-.096.89-.275 1.305M23 18a5 5 0 0 1-5 5m5-5a5 5 0 0 0-3-4.584M23 18a5 5 0 0 0-5-5m0 10a5 5 0 0 1-4.616-3.075M18 23a5 5 0 0 1-5-5m7-4.584a5 5 0 0 0-.275-.11M18 13c.606 0 1.187.108 1.725.305M18 13a5 5 0 0 0-4.89 3.952M18 13a5 5 0 0 0-5 5m.11-1.048Q13.001 17.46 13 18m0 0c0 .682.137 1.333.384 1.925M16 18l1.43 1.43a.1.1 0 0 0 .14 0L20 17"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
DatabaseCheck.displayName = 'DatabaseCheck';
