import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Dislike: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M16.437 14.25h3.75a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5h-3.75m0 10.5L9.687 21l-.72-.721a3 3 0 0 1-.563-3.463l1.283-2.566h-6c-.828 0-1.507-.673-1.431-1.498a16.4 16.4 0 0 1 2.983-8.024l.25-.35a1.5 1.5 0 0 1 1.22-.628h9.728m0 10.5V3.75"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Dislike.displayName = 'Dislike';
