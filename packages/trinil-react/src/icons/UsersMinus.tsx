import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const UsersMinus: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M9 14.25a5.25 5.25 0 1 1 3-9.559M9 14.25H6.75a4.5 4.5 0 0 0-4.5 4.5 1.5 1.5 0 0 0 1.5 1.5h7.884M9 14.25h2.25q.383 0 .75.062m-3-.062c1.115 0 2.15-.348 3-.941m0-8.618a5.25 5.25 0 0 1 7.644 6.76M12 4.692A5.24 5.24 0 0 1 14.25 9c0 1.784-.89 3.36-2.25 4.309m0 0q.359.25.757.44m9.743 4.626h-6.75"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
UsersMinus.displayName = 'UsersMinus';
