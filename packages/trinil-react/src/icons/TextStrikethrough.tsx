import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const TextStrikethrough: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M14.25 12.75c2.437.482 3.199 1.843 3.512 3.569.515 2.828-1.658 5.431-5.282 5.431h-.433C8.34 21.75 6 19.365 5.959 16.5m8.291-3.75h7.5m-7.5 0h-12m5.625-3C6.75 9.375 6.378 8.454 6.237 7.681 5.723 4.853 7.896 2.25 11.52 2.25h.433c3.706 0 5.297 2.385 5.338 5.25"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
TextStrikethrough.displayName = 'TextStrikethrough';
