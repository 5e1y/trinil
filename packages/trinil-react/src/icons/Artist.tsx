import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Artist: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M9 14.25a5.25 5.25 0 1 1 0-10.5 5.25 5.25 0 0 1 0 10.5m0 0H6.75a4.5 4.5 0 0 0-4.5 4.5 1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5 4.5 4.5 0 0 0-4.5-4.5zm10.335-4.683c-.312.42-.585 1.154-.585 2.433 0 3.306.405 6.207.62 7.514.07.43.444.736.88.736s.81-.306.88-.736A48 48 0 0 0 21.75 12c0-1.184-.234-1.901-.517-2.335m-1.898-.098c.268.118.563.183.868.183h.554q.25-.001.476-.085m-1.898-.098A2.15 2.15 0 0 1 18.21 8.4l-.124-.312a2.64 2.64 0 0 1 1.094-3.247L21 3.75l-.473 1.894a1.23 1.23 0 0 0 .805 1.467c.645.215.994.912.779 1.557l-.047.14a1.38 1.38 0 0 1-.83.857"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Artist.displayName = 'Artist';
