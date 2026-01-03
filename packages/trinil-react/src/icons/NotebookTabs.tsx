import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const NotebookTabs: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M5.25 18v2.25a1.5 1.5 0 0 0 1.5 1.5h9M5.25 18v-6m0 6h-1.5m1.5 0H7.5m-2.25-6V6m0 6h-1.5m1.5 0H7.5M5.25 6V3.75a1.5 1.5 0 0 1 1.5-1.5h9M5.25 6h-1.5m1.5 0H7.5m8.25-3.75h3a1.5 1.5 0 0 1 1.5 1.5V7.5m-4.5-5.25V7.5m0 14.25h3a1.5 1.5 0 0 0 1.5-1.5V18m-4.5 3.75V18m0 0h4.5m-4.5 0v-5.25m4.5 5.25v-5.25m-4.5 0h4.5m-4.5 0V7.5m4.5 5.25V7.5m-4.5 0h4.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
NotebookTabs.displayName = 'NotebookTabs';
