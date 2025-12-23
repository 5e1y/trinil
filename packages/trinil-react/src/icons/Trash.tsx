import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Trash: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M8 9V7a4 4 0 1 1 8 0v2M8 9h8M8 9H6m10 0h2M6 9l.924 11.083A1 1 0 0 0 7.92 21h8.16a1 1 0 0 0 .996-.917L18 9M6 9H4.5M18 9h1.5M15 11.5l-.5 7m-5.5-7 .5 7m2.5-7v7"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Trash.displayName = 'Trash';
