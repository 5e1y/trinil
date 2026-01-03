import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const EditPen: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M19.5 12.75v6.75A1.5 1.5 0 0 1 18 21H4.5A1.5 1.5 0 0 1 3 19.5V6a1.5 1.5 0 0 1 1.5-1.5h6.75m-3 11.25v-2.379c0-.398.158-.779.44-1.06l9-9a1.5 1.5 0 0 1 2.12 0l.88.878a1.5 1.5 0 0 1 0 2.122l-9 9a1.5 1.5 0 0 1-1.061.439z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
EditPen.displayName = 'EditPen';
