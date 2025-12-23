import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Walk: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="m11 14 1.868 3.27a1 1 0 0 1 .132.496V21m-2-7-.958 3.832a1 1 0 0 1-.138.312L8.334 20.5M11 14l1.582-5.674m0 0 1.226 3.608a1 1 0 0 0 .782.664l1.91.319m-3.918-4.59a2.5 2.5 0 1 1 1.837-4.653 2.5 2.5 0 0 1-1.837 4.652Zm0 0L9.679 9.903a1 1 0 0 0-.304.254L7.9 12"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Walk.displayName = 'Walk';
