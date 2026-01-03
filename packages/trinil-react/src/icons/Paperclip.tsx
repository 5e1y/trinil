import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Paperclip: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="m21.75 11.25-8.89 8.814a5.836 5.836 0 0 1-8.22-8.286l8.354-8.294a4.241 4.241 0 1 1 5.974 6.022l-8.361 8.29a2.65 2.65 0 1 1-3.729-3.765L15 6"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Paperclip.displayName = 'Paperclip';
