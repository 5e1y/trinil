import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const GraphPoll: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M3 4.5V18a1 1 0 0 0 1 1h3m0 0h4m-4 0v-6.9a.1.1 0 0 1 .1-.1h3.8a.1.1 0 0 1 .1.1V19m0 0h3m0 0h4m-4 0V7.1a.1.1 0 0 1 .1-.1h3.8a.1.1 0 0 1 .1.1V19m3.5 0H18"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
GraphPoll.displayName = 'GraphPoll';
