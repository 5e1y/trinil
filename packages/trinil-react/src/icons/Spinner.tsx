import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Spinner: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M12 2.25v3m0 16.5v-3m4.876-15.197-1.5 2.598M7.126 20.44l1.5-2.598M20.448 7.119l-2.599 1.5M3.56 16.869l2.598-1.5m15.6-3.376h-3m-16.5 0h3M3.56 7.132l2.598 1.5m14.29 8.25-2.599-1.5M7.126 3.56l1.5 2.598m8.25 14.29-1.5-2.599"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Spinner.displayName = 'Spinner';
