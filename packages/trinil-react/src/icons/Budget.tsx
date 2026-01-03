import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Budget: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M12 18v-4.5m3.75 4.5v-7.5M8.25 18v-1.5m8.25-12v.75a1.5 1.5 0 0 1-1.5 1.5H9a1.5 1.5 0 0 1-1.5-1.5V4.5m9 0v-.75a1.5 1.5 0 0 0-1.5-1.5H9a1.5 1.5 0 0 0-1.5 1.5v.75m9 0h2.25a1.5 1.5 0 0 1 1.5 1.5v14.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V6a1.5 1.5 0 0 1 1.5-1.5H7.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Budget.displayName = 'Budget';
