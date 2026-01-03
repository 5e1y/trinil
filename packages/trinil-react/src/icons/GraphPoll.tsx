import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const GraphPoll: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M21.75 20.25h-18a1.5 1.5 0 0 1-1.5-1.5v-1.5m0 0h7.5V13.5h-7.5m0 3.75V13.5m0 0v-3m0 0h15V6.75h-15m0 3.75V6.75m0-3v3"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
GraphPoll.displayName = 'GraphPoll';
