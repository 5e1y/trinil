import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Office: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M19.5 12v4m0-4h-2m2 0h2m-2 4v3a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-3m6 0h-6m0 0v-4m0 0H7m6.5 0h2m-11 8v-8m0 0h-2m2 0H7m10.5 0V9.6a.1.1 0 0 0-.1-.1H17m.5 2.5h-2M7 12V8m0 0H4.6a.1.1 0 0 1-.1-.1V6.5a2.5 2.5 0 1 1 5 0v1.4a.1.1 0 0 1-.1.1zm8.5 4V9.6a.1.1 0 0 1 .1-.1H17m0 0v-2"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Office.displayName = 'Office';
