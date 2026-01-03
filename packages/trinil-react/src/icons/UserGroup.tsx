import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const UserGroup: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M13.987 13.987c.557.17 1.15.263 1.763.263a6 6 0 0 0 3-.803m-4.763.54c.17.557.263 1.15.263 1.763 0 2.22-1.207 4.16-3 5.197m2.737-6.96a6 6 0 0 0-1.12-2.07m-2.854-1.904a6 6 0 1 1 8.737 3.434m-8.737-3.434a6 6 0 0 1 2.854 1.905m-2.854-1.905A6 6 0 0 0 5.25 20.947m7.617-9.03A3 3 0 0 1 15.75 9.75m-7.5 7.5a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5m0 0a3 3 0 0 0-3 3v.697m3-3.697a3 3 0 0 1 3 3v.697m0 0a6 6 0 0 1-3 .803 6 6 0 0 1-3-.803M15.75 9.75a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5m0 0a3 3 0 0 1 3 3v.697"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
UserGroup.displayName = 'UserGroup';
