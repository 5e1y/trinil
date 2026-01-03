import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const UserGroupMinus: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M10.013 10.013a6 6 0 1 1 10.595 1.759m-10.595-1.759a6 6 0 0 1 2.854 1.905m-2.854-1.905A6 6 0 0 0 5.25 20.947m7.617-9.03A3 3 0 0 1 15.75 9.75m-2.883 2.168q.39.468.68 1.01M8.25 17.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5m0 0a3 3 0 0 0-3 3v.697m3-3.697a3 3 0 0 1 3 3v.697a6 6 0 0 1-3 .803 6 6 0 0 1-3-.803M15.75 9.75a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5m0 0c1.114 0 2.087.607 2.604 1.51m4.146 7.115h-6.75"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
UserGroupMinus.displayName = 'UserGroupMinus';
