import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Reply: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="m6.75 10.5 3-3m-3 3 3 3m-3-3h6.75a3 3 0 0 1 3 3M15 3.75H9a6.75 6.75 0 0 0 0 13.5h3.75a7.5 7.5 0 0 0 6 3l-.06-.06a3.97 3.97 0 0 1-1.11-3.45A6.752 6.752 0 0 0 15 3.75"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Reply.displayName = 'Reply';
