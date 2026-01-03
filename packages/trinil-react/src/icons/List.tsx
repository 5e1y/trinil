import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const List: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M10.5 3.75h11.25M10.5 12h11.25M10.5 20.25h11.25m-19.5 0a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0m0-8.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0m0-8.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
List.displayName = 'List';
