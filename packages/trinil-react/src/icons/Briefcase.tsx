import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Briefcase: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M6.75 6.75h-3a1.5 1.5 0 0 0-1.5 1.5V12m4.5-5.25.746-1.864A3 3 0 0 1 10.28 3h3.438a3 3 0 0 1 2.785 1.886l.746 1.864m-10.5 0h10.5m0 0h3a1.5 1.5 0 0 1 1.5 1.5V12m-8.25.75V12a1.5 1.5 0 0 0-3 0v.75m3 0v.75a1.5 1.5 0 0 1-3 0v-.75m3 0 8.25-.75m0 0v6.75a1.5 1.5 0 0 1-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5V12m8.25.75L2.25 12"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Briefcase.displayName = 'Briefcase';
