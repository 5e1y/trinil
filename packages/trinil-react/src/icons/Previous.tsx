import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Previous: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M3 3v18m4.426-10.25 11.242-7.496C19.665 2.59 21 3.304 21 4.502v15.039c0 1.2-1.34 1.914-2.336 1.245L7.423 13.244a1.5 1.5 0 0 1 .003-2.494"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Previous.displayName = 'Previous';
