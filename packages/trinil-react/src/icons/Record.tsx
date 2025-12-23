import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Record: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M6.5 15.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Zm0 0h11m0 0a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Record.displayName = 'Record';
