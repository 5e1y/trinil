import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Leather: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M7.5 12.75c.108-.586.126-.914 0-1.5m9 1.5c-.108-.586-.126-.914 0-1.5m0-3.75c-.585-.085-.996-.168-1.5-.38m-7.5.38c.584-.085.996-.168 1.5-.38m7.5 9.38c-.585.085-.996.168-1.5.38m-7.5-.38c.584.085.996.168 1.5.38M2.25 8.25l1.5-4.5.942.314A5.2 5.2 0 0 0 10.5 2.25h3a5.2 5.2 0 0 0 5.808 1.814l.942-.314 1.5 4.5c-2.942 1.634-2.942 5.866 0 7.5l-1.5 4.5-.942-.314A5.2 5.2 0 0 0 13.5 21.75h-3a5.2 5.2 0 0 0-5.808-1.814l-.942.314-1.5-4.5c2.942-1.634 2.942-5.866 0-7.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Leather.displayName = 'Leather';
