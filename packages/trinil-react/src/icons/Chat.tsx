import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Chat: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M16.5 13.5A4.5 4.5 0 0 0 12 9H7.756m8.744 4.5q0 .43-.078.84A4.5 4.5 0 0 1 12 18H9a7.5 7.5 0 0 1-6 3l.448-.673A6.26 6.26 0 0 0 4.5 16.854 4.5 4.5 0 0 1 7.5 9h.256m8.744 4.5c1.302 1.011 2.815 1.5 4.5 1.5l-.448-.673a6.26 6.26 0 0 1-1.052-3.473A4.5 4.5 0 0 0 16.5 3H12a4.5 4.5 0 0 0-4.244 6"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Chat.displayName = 'Chat';
