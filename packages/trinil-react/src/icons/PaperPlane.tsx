import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const PaperPlane: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M8.5 12.5 5.249 9.249a1 1 0 0 1 .464-1.678l14.125-3.53a.1.1 0 0 1 .085.016M8.5 12.5l-.596 2.383a1 1 0 0 0 1.213 1.213L11.5 15.5m-3-3 11.423-8.443M11.5 15.5l3.251 3.25a1 1 0 0 0 1.677-.464L19.96 4.161a.1.1 0 0 0-.017-.084M11.5 15.5l8.443-11.423m0 0-.02-.02"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
PaperPlane.displayName = 'PaperPlane';
