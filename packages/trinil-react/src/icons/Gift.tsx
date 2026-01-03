import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Gift: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M18.75 13.5v6.75a1.5 1.5 0 0 1-1.5 1.5h-3m4.5-8.25h-4.5m4.5 0a1.5 1.5 0 0 0 1.5-1.5v-1.5a1.5 1.5 0 0 0-1.5-1.5h-4.5m-9 4.5v6.75a1.5 1.5 0 0 0 1.5 1.5h3m-4.5-8.25h4.5m-4.5 0a1.5 1.5 0 0 1-1.5-1.5v-1.5A1.5 1.5 0 0 1 5.25 9h4.5M12 9s3-9 6-6-6 6-6 6m0 0S9 0 6 3s6 6 6 6m0 0h2.25M12 9H9.75m4.5 0v4.5m0 0h-4.5m4.5 0v8.25M9.75 9v4.5m0 0v8.25m0 0h4.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Gift.displayName = 'Gift';
