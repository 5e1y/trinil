import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Letter: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M3.32 5.767A1 1 0 0 1 4 5.5h16c.263 0 .502.101.68.267m-17.36 0A1 1 0 0 0 3 6.5v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-11c0-.29-.123-.55-.32-.733m-17.36 0 8.04 6.7a1 1 0 0 0 1.28 0l8.04-6.7"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Letter.displayName = 'Letter';
