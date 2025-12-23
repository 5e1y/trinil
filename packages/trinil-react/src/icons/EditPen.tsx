import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const EditPen: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M19 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5m.293 10.707 8.5-8.5a1 1 0 0 0 0-1.414l-1.586-1.586a1 1 0 0 0-1.414 0l-8.5 8.5a1 1 0 0 0-.293.707V15a1 1 0 0 0 1 1h1.586a1 1 0 0 0 .707-.293Z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
EditPen.displayName = 'EditPen';
