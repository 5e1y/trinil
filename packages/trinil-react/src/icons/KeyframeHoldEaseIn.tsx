import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const KeyframeHoldEaseIn: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M12.132 3.75H3.753c-1.336 0-2.006 1.616-1.06 2.56l4.628 4.63a1.5 1.5 0 0 1 0 2.12l-4.629 4.63c-.945.944-.275 2.56 1.061 2.56h8.379m0-16.5v16.5m0-16.5h8.247a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-8.247"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
KeyframeHoldEaseIn.displayName = 'KeyframeHoldEaseIn';
