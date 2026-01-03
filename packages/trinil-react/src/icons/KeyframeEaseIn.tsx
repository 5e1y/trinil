import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const KeyframeEaseIn: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M12 3.75H3.621c-1.336 0-2.005 1.616-1.06 2.56l4.628 4.63a1.5 1.5 0 0 1 0 2.12l-4.628 4.63c-.945.944-.276 2.56 1.06 2.56H12m0-16.5h1.629a1.5 1.5 0 0 1 1.06.44l6.75 6.75a1.5 1.5 0 0 1 0 2.12l-6.75 6.75a1.5 1.5 0 0 1-1.06.44H12m0-16.5v16.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
KeyframeEaseIn.displayName = 'KeyframeEaseIn';
