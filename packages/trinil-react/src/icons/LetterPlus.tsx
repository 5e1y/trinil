import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const LetterPlus: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M3.32 5.767A1 1 0 0 1 4 5.5h16c.263 0 .502.101.68.267m-17.36 0A1 1 0 0 0 3 6.5v11a1 1 0 0 0 1 1h9.025M3.32 5.767l8.04 6.7a1 1 0 0 0 1.28 0l8.04-6.7m0 0c.197.182.32.443.32.733V14m-3 4v-2.501M18 18h2.502M18 18v2.495M18 18h-2.503M21 14a5 5 0 0 0-7.975 4.5M21 14a5 5 0 1 1-7.975 4.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
LetterPlus.displayName = 'LetterPlus';
