import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const FruitCherry: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M8.11 14.149a3.75 3.75 0 1 1-4.219 6.202 3.75 3.75 0 0 1 4.218-6.202m0 0c2.39-2.9 3.89-6.65 3.89-11.15m0 0c.715 4.405 1.402 5.898 4.036 8.806M12 3c-2.366-.423-7.177.035-7.5 5.25C6.25 9 10.2 9 12 3m4.036 8.805a3.75 3.75 0 1 0 3.928 6.39 3.75 3.75 0 0 0-3.928-6.39"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
FruitCherry.displayName = 'FruitCherry';
