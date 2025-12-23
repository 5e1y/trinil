import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const MessageBubble: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M4.25 21a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
MessageBubble.displayName = 'MessageBubble';
