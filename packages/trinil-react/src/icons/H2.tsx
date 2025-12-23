import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const H2: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M5 4v8m0 0v7.5M5 12h9m0 0V4m0 8v7.5m6 0h-2.9c-.055 0-.1-.045-.095-.1a.93.93 0 0 1 .413-.674l2.029-1.331A1.32 1.32 0 0 0 18.68 15h-.18a1.5 1.5 0 0 0-1.5 1.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
H2.displayName = 'H2';
