import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const MessageDots: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M15 3.75H9a6.75 6.75 0 0 0-3.33 12.623c.452.256.823.68.798 1.198a3.97 3.97 0 0 1-1.159 2.62.034.034 0 0 0 .025.059 7.5 7.5 0 0 0 5.437-2.423c.32-.348.757-.577 1.229-.577h3a6.75 6.75 0 0 0 0-13.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
MessageDots.displayName = 'MessageDots';
