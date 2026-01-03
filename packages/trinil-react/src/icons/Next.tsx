import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Next: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M21 3v18m-4.426-10.25L5.332 3.254C4.335 2.589 3 3.304 3 4.502V19.54c0 1.2 1.34 1.915 2.336 1.246l11.241-7.543a1.5 1.5 0 0 0-.003-2.493"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Next.displayName = 'Next';
