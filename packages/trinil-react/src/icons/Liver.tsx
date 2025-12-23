import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Liver: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="m12 14.5-4 3.707a2.977 2.977 0 0 1-5-2.184v-5.34a4.59 4.59 0 0 1 5.412-4.517L13 7m-1 7.5h1.208a4.77 4.77 0 0 0 3.724-1.79l.212-.265c.235-.294.524-.54.85-.728l2.274-1.299a1.851 1.851 0 0 0-.41-3.387l-1.257-.36a3.3 3.3 0 0 0-1.223-.109L13 7m-1 7.5c-1.2-3.2.167-6.333 1-7.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Liver.displayName = 'Liver';
