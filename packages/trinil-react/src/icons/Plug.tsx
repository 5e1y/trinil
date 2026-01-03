import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Plug: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M14.25 21.75v-1.676c0-.756.572-1.377 1.29-1.613a6.85 6.85 0 0 0 4.71-6.508V8.36a.11.11 0 0 0-.11-.11h-2.89m-7.5 13.5v-1.676c0-.756-.572-1.377-1.29-1.613a6.85 6.85 0 0 1-4.71-6.508V8.36c0-.06.05-.11.11-.11h2.89m0 0v-4.5a1.5 1.5 0 1 1 3 0v4.5m-3 0h3m0 0h4.5m3 0v-4.5a1.5 1.5 0 0 0-3 0v4.5m3 0h-3"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Plug.displayName = 'Plug';
