import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Text: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M3 7.5v-3A1.5 1.5 0 0 1 4.5 3H12m9 4.5v-3A1.5 1.5 0 0 0 19.5 3H12m0 0v18m0 0h4.5M12 21H7.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Text.displayName = 'Text';
