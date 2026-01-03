import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const MessageBubble: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M2.25 18.75a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0M15 3.75H9a6.75 6.75 0 0 0-4.49 11.79q-.01.105-.01.21a2.25 2.25 0 0 0 3.947 1.478q.274.021.553.022h6a6.75 6.75 0 0 0 0-13.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
MessageBubble.displayName = 'MessageBubble';
