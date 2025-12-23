import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Timeline: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M12 12.5H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h8m0 2.5h4a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1h-4m0 2.5V10m0 2.5V15m0-5V8m0 9.5H8a1 1 0 0 1-1-1V16a1 1 0 0 1 1-1h4m0 2.5h8a1 1 0 0 0 1-1V16a1 1 0 0 0-1-1h-8m0 2.5V15m0 2.5V21m0-13-1.707-1.707A1 1 0 0 1 10 5.586V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1.586a1 1 0 0 1-.293.707z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Timeline.displayName = 'Timeline';
