import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const FlagGolf: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M12 15.75a3.75 3.75 0 0 0-3.75 3.75v.75a1.5 1.5 0 0 0 1.5 1.5h4.5a1.5 1.5 0 0 0 1.5-1.5v-.75A3.75 3.75 0 0 0 12 15.75m0 0a41.6 41.6 0 0 0-.435-6m0 0a41.6 41.6 0 0 0-1.7-7.154L9.75 2.25 18 4.5z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
FlagGolf.displayName = 'FlagGolf';
