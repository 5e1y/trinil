import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Quote: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M10 7c0 9-5.5 13-5.5 13M10 7a3 3 0 1 0-6 0 3 3 0 0 0 6 0Zm10 0c0 9-5.5 13-5.5 13M20 7a3 3 0 1 0-6 0 3 3 0 0 0 6 0Z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Quote.displayName = 'Quote';
