import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Paired: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M5 10.59a4.612 4.612 0 0 0-1.966 3.752A4.625 4.625 0 0 0 7.659 19h4.591A4.75 4.75 0 0 0 17 14.25v-.042a4.434 4.434 0 0 0-4.434-4.458H9m10 3.683q.286-.196.537-.433a4.625 4.625 0 0 0-3.162-8H11.75A4.75 4.75 0 0 0 7 9.797a4.5 4.5 0 0 0 4.5 4.453H15"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Paired.displayName = 'Paired';
