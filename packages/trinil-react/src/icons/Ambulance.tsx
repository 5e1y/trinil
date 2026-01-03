import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Ambulance: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M20.25 18a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0m4.5 0a1.5 1.5 0 0 0 1.5-1.5v-3.335a1.5 1.5 0 0 0-.214-.771l-1.599-2.666A1.5 1.5 0 0 0 18.651 9H15.75m0 9H9m6.75 0V9M9 18a2.25 2.25 0 0 1-4.5 0M9 18a2.25 2.25 0 0 0-4.5 0m0 0h-.75a1.5 1.5 0 0 1-1.5-1.5V5.25a1.5 1.5 0 0 1 1.5-1.5h10.5a1.5 1.5 0 0 1 1.5 1.5V9M7.5 12.75h3v-1.5H12v-3h-1.5v-1.5h-3v1.5H6v3h1.5z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Ambulance.displayName = 'Ambulance';
