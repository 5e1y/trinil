import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const AlarmPlus: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M6.166 18.583 3.75 21m2.416-2.417A8.22 8.22 0 0 1 3.75 12.75c0-.904.145-1.773.414-2.587m2.002 8.42A8.22 8.22 0 0 0 11.951 21m7.885-10.837L21.44 8.56a1.5 1.5 0 0 0 0-2.12l-3.878-3.88a1.5 1.5 0 0 0-2.122 0L13.5 4.5l.162.162m6.174 5.501a8.254 8.254 0 0 0-9.505-5.494m9.505 5.494q.232.698.335 1.444m-9.84-6.938.169-.17L8.56 2.56a1.5 1.5 0 0 0-2.12 0L2.56 6.44a1.5 1.5 0 0 0 0 2.12l1.604 1.603M10.33 4.67a8.26 8.26 0 0 0-6.167 5.494M16.5 10.5 12 14.25l-3.75-3M18.375 22.5v-4.125m0 0V14.25m0 4.125H22.5m-4.125 0H14.25"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
AlarmPlus.displayName = 'AlarmPlus';
