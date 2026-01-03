import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Timeline: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M12 19.5H6v-3.75h6m0 3.75h9v-3.75h-9m0 3.75v-3.75m0 3.75v2.25m0-6v-3m0 0H3V9h9m0 3.75h6V9h-6m0 3.75V9m0 0V7.5m0 0-1.81-1.81a1.5 1.5 0 0 1-.44-1.061V3.75a1.5 1.5 0 0 1 1.5-1.5h1.5a1.5 1.5 0 0 1 1.5 1.5v.879a1.5 1.5 0 0 1-.44 1.06z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Timeline.displayName = 'Timeline';
